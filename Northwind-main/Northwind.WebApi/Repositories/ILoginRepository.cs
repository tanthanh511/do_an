using Northwind.Shared;

namespace Northwind.WebApi.Repositories;

public interface ILoginRepository
{
    Task<Account?> AuthenticateAccountAsync(Account c);
    string GenerateToken(Account c);
}

