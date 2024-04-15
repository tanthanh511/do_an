using Northwind.Shared;

namespace Northwind.WebApi.Repositories;

public interface ICategoryRepository
{
    Task<IEnumerable<Category>> RetrieveAllAsync();
    Task<Category?> CreateAsync(Category c);
    Task<Category?> RetrieveAsync(string id);
    Task<Category?> UpdateAsync(string id, Category c);
    Task<bool?> DeleteAsync(string id);
}

