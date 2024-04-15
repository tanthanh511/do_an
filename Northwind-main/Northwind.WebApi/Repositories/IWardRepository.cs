using Northwind.Shared;

namespace Northwind.WebApi.Repositories;

public interface IWardRepository
{
    Task<IEnumerable<Ward>> RetrieveAllAsync();
    Task<Ward?> CreateAsync(Ward c);
    Task<Ward?> RetrieveAsync(string id);
    Task<Ward?> UpdateAsync(string id, Ward c);
    Task<bool?> DeleteAsync(string id);
}

