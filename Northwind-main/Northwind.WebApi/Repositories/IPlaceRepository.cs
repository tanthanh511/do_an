using Northwind.Shared;

namespace Northwind.WebApi.Repositories;

public interface IPlaceRepository
{
    Task<IEnumerable<Place>> RetrieveAllAsync();
    Task<Place?> CreateAsync(Place c);
    Task<Place?> RetrieveAsync(string id);
    Task<Place?> UpdateAsync(string id, Place c);
    Task<bool?> DeleteAsync(string id);
}

