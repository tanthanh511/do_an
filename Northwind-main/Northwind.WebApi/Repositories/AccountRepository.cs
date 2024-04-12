﻿using Microsoft.EntityFrameworkCore.ChangeTracking;
using Northwind.Shared;
using System.Collections.Concurrent;

namespace Northwind.WebApi.Repositories;

public class AccountRepository : IAccountRepository
{
    // Use a static thread-safe dictionary field to cache the customers
    private static ConcurrentDictionary<string, Account>? accountsCache;

    // Use an instance data context field because it should not be cached due to their internal caching
    private TravelCompanionContext db;

    public AccountRepository(TravelCompanionContext injectedContext)
    {
        db = injectedContext;
        // pre-load customers from database as a normal
        // Dictionary with CustomerId as the key, then convert to a thread-safe ConcurrentDictionary
        if (accountsCache is null)
        {
            accountsCache = new ConcurrentDictionary<string, Account>(
                db.Accounts.ToDictionary(c => c.Id.ToString()));
        }
    }

    



    public Task<IEnumerable<Account>> RetrieveAllAsync()
    {
        // For performance, get from cache
        return Task.FromResult(
            accountsCache is null ?
                Enumerable.Empty<Account>() :
                accountsCache.Values);
    }


    private Account UpdateCache(string id, Account c)
    {
        Account? old;
        if (accountsCache is not null)
        {
            if (accountsCache.TryGetValue(id, out old))
            {
                if (accountsCache.TryUpdate(id, c, old))
                {
                    return c;
                }
            }
        }
        return null!;
    }
    public async Task<Account?> CreateAsync(Account c)
    {
       
        //c.Id = c.Id.ToString().ToUpper();

        EntityEntry<Account> added = await db.Accounts.AddAsync(c);

        int affected = await db.SaveChangesAsync();
        if (affected == 1)
        {
            if (accountsCache is null)
            {
                return c;
            }
            return accountsCache.AddOrUpdate(c.Id.ToString(), c, UpdateCache);
        }
        else
        {
            return null;
        }
    }

    // GET Account by ID
    public Task<Account?> RetrieveAsync(string id)
    {
        // For performance, get from cache
        //id = id.ToUpper();

        if (accountsCache is null)
        {
            return null!;
        }

        accountsCache.TryGetValue(id, out Account? c);
        return Task.FromResult(c);
    }


    // Update Account 
    public async Task<Account?> UpdateAsync(string id, Account c)
    {
        // Normalize customer Id
        id = id;
        c.Id = c.Id;

        // Update in database
        db.Accounts.Update(c);

        int affected = await db.SaveChangesAsync();
        if (affected == 1)
        {
            // Update in cache
            return UpdateCache(id, c);
        }
        return null;
    }


    public async Task<bool?> DeleteAsync(string id)
    {
        id = id;

        // Remove from database
        Account? c = db.Accounts.Find(id);
        if (c is null)
        {
            return null;
        }

        db.Accounts.Remove(c);

        int affected = await db.SaveChangesAsync();
        if (affected == 1)
        {
            if (accountsCache is null)
            {
                return null;
            }

            // Remove from cache
            return accountsCache.TryRemove(id, out c);
        }
        else
        {
            return null;
        }
    }
}