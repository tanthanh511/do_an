using Humanizer;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Northwind.Shared;
using System.Collections.Concurrent;

namespace Northwind.WebApi.Repositories;

public class CategoryRepository : ICategoryRepository
{
    // Use a static thread-safe dictionary field to cache the acounts
    private static ConcurrentDictionary<string, Category>? categoriesCache;

    // Use an instance data context field because it should not be cached due to their internal caching
    private TravelCompanionContext db;

    public CategoryRepository(TravelCompanionContext injectedContext)
    {
        db = injectedContext;
        // pre-load customers from database as a normal
        // Dictionary with CustomerId as the key, then convert to a thread-safe ConcurrentDictionary
        if (categoriesCache is null)
        {
            categoriesCache = new ConcurrentDictionary<string, Category>(
                db.Categories.ToDictionary(c => c.Id.ToString()));
        }
    }

    



    public Task<IEnumerable<Category>> RetrieveAllAsync()
    {
        // For performance, get from cache
        return Task.FromResult(
            categoriesCache is null ?
                Enumerable.Empty<Category>() :
                categoriesCache.Values);
    }


    private Category UpdateCache(string id, Category c)
    {
        Category? old;
        if (categoriesCache is not null)
        {
            if (categoriesCache.TryGetValue(id, out old))
            {
                if (categoriesCache.TryUpdate(id, c, old))
                {
                    return c;
                }
            }
        }
        return null!;
    }
    public async Task<Category?> CreateAsync(Category c)
    {
        
        EntityEntry<Category> added = await db.Categories.AddAsync(c);

        int affected = await db.SaveChangesAsync();
        if (affected == 1)
        {
            if (categoriesCache is null)
            {
                return c;
            }
            return categoriesCache.AddOrUpdate(c.Id.ToString(), c, UpdateCache);
        }
        else
        {
            return null;
        }
    }

    // GET Account by ID
    public Task<Category?> RetrieveAsync(string id)
    {
        if (categoriesCache is null)
        {
            return null!;
        }

        categoriesCache.TryGetValue(id, out Category? c);
        return Task.FromResult(c);
    }


    // Update Account 
    public async Task<Category?> UpdateAsync(string id, Category c)
    {
        // Update in database
        db.Categories.Update(c);

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
        if (!Guid.TryParse(id, out Guid categoryId))
        {
            // Trả về null nếu id không hợp lệ
            return null;
        }

        // Remove from database
        Category? c = db.Categories.Find(categoryId);  

       
        if (c is null)
        {
            return null;
        }


        if (c.Places != null)
        {
            return false;
        }

        db.Categories.Remove(c);

        int affected = await db.SaveChangesAsync();
        if (affected == 1)
        {
            if (categoriesCache is null)
            {
                return null;
            }

            // Remove from cache
            return categoriesCache.TryRemove(id, out c);
        }
        else
        {
            return null;
        }
    }
}
