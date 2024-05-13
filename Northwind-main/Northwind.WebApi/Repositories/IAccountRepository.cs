using Northwind.Shared;
//using Northwind.WebApi.Models;

namespace Northwind.WebApi.Repositories;

public interface IAccountRepository
{
    Task<IEnumerable<Account>> RetrieveAllAsync();
    Task<Account?> CreateAsync(Account c);
    Task<Account?> RetrieveAsync(string id);
    Task<Account?> LoginAsync(string name, string password);

    Task<Account?> UpdateAsync(string id, Account c);
    Task<bool?> DeleteAsync(string id);
    


}

