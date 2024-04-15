using Humanizer;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Northwind.Shared;
using System.Collections.Concurrent;

namespace Northwind.WebApi.Repositories;

public class PlaceRepository : IPlaceRepository
{
    // Use a static thread-safe dictionary field to cache the acounts
    private static ConcurrentDictionary<string, Place>? placesCache;

    // Use an instance data context field because it should not be cached due to their internal caching
    private TravelCompanionContext db;

    public PlaceRepository(TravelCompanionContext injectedContext)
    {
        db = injectedContext;
        // pre-load customers from database as a normal
        // Dictionary with CustomerId as the key, then convert to a thread-safe ConcurrentDictionary
        if (placesCache is null)
        {
            placesCache = new ConcurrentDictionary<string, Place>(
                db.Places.ToDictionary(c => c.Id.ToString()));
        }
    }

    



    public Task<IEnumerable<Place>> RetrieveAllAsync()
    {
        // For performance, get from cache
        return Task.FromResult(
            placesCache is null ?
                Enumerable.Empty<Place>() :
               placesCache.Values);
    }


    private Place UpdateCache(string id, Place c)
    {
        Place? old;
        if (placesCache is not null)
        {
            if (placesCache.TryGetValue(id, out old))
            {
                if (placesCache.TryUpdate(id, c, old))
                {
                    return c;
                }
            }
        }
        return null!;
    }
    public async Task<Place?> CreateAsync(Place c)
    {
        
        EntityEntry<Place> added = await db.Places.AddAsync(c);

        int affected = await db.SaveChangesAsync();
        if (affected == 1)
        {
            if (placesCache is null)
            {
                return c;
            }
            return placesCache.AddOrUpdate(c.Id.ToString(), c, UpdateCache);
        }
        else
        {
            return null;
        }
    }

    // GET Account by ID
    public Task<Place?> RetrieveAsync(string id)
    {
        if (placesCache is null)
        {
            return null!;
        }

        placesCache.TryGetValue(id, out Place? c);
        return Task.FromResult(c);
    }


    // Update Account 
    public async Task<Place?> UpdateAsync(string id, Place c)
    {
        // Update in database
        db.Places.Update(c);

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
        if (!Guid.TryParse(id, out Guid placeId))
        {
            // Trả về null nếu id không hợp lệ
            return null;
        }

        // Remove from database
        Place? c = db.Places.Find(placeId);  
        if (c is null)
        {
            return null;
        }

        db.Places.Remove(c);

        int affected = await db.SaveChangesAsync();
        if (affected == 1)
        {
            if (placesCache is null)
            {
                return null;
            }

            // Remove from cache
            return placesCache.TryRemove(id, out c);
        }
        else
        {
            return null;
        }
    }
}
