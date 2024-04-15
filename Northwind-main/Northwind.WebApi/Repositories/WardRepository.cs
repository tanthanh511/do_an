using Humanizer;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Northwind.Shared;
using System.Collections.Concurrent;

namespace Northwind.WebApi.Repositories;

public class WardRepository : IWardRepository
{
    // Use a static thread-safe dictionary field to cache the acounts
    private static ConcurrentDictionary<string, Ward>? wardsCache;

    // Use an instance data context field because it should not be cached due to their internal caching
    private TravelCompanionContext db;

    public WardRepository(TravelCompanionContext injectedContext)
    {
        db = injectedContext;
        // pre-load customers from database as a normal
        // Dictionary with CustomerId as the key, then convert to a thread-safe ConcurrentDictionary
        if (wardsCache is null)
        {
            wardsCache = new ConcurrentDictionary<string, Ward>(
                db.Wards.ToDictionary(c => c.Id.ToString()));
        }
    }

    



    public Task<IEnumerable<Ward>> RetrieveAllAsync()
    {
        // For performance, get from cache
        return Task.FromResult(
            wardsCache is null ?
                Enumerable.Empty<Ward>() :
                wardsCache.Values);
    }


    private Ward UpdateCache(string id, Ward c)
    {
        Ward? old;
        if (wardsCache is not null)
        {
            if (wardsCache.TryGetValue(id, out old))
            {
                if (wardsCache.TryUpdate(id, c, old))
                {
                    return c;
                }
            }
        }
        return null!;
    }
    public async Task<Ward?> CreateAsync(Ward c)
    {
        
        EntityEntry<Ward> added = await db.Wards.AddAsync(c);

        int affected = await db.SaveChangesAsync();
        if (affected == 1)
        {
            if (wardsCache is null)
            {
                return c;
            }
            return wardsCache.AddOrUpdate(c.Id.ToString(), c, UpdateCache);
        }
        else
        {
            return null;
        }
    }

    // GET Account by ID
    public Task<Ward?> RetrieveAsync(string id)
    {
        if (wardsCache is null)
        {
            return null!;
        }

        wardsCache.TryGetValue(id, out Ward? c);
        return Task.FromResult(c);
    }


    // Update Account 
    public async Task<Ward?> UpdateAsync(string id, Ward c)
    {
        // Update in database
        db.Wards.Update(c);

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
        if (!Guid.TryParse(id, out Guid wardId))
        {
            // Trả về null nếu id không hợp lệ
            return null;
        }

        // Remove from database
        Ward? c = db.Wards.Find(wardId);  
        if (c is null)
        {
            return null;
        }

        db.Wards.Remove(c);

        int affected = await db.SaveChangesAsync();
        if (affected == 1)
        {
            if (wardsCache is null)
            {
                return null;
            }

            // Remove from cache
            return wardsCache.TryRemove(id, out c);
        }
        else
        {
            return null;
        }
    }
}
