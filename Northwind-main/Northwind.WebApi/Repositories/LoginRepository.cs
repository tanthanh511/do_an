using Humanizer;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.IdentityModel.Tokens;
using Northwind.Shared;
using System.Collections.Concurrent;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Northwind.WebApi.Repositories;

public class LoginRepository : ILoginRepository
{
    private readonly IConfiguration _config;
    public LoginRepository(IConfiguration configuration)
    {
        _config = configuration;

    }
    public Task<Account?> AuthenticateAccountAsync(Account c)
   {
        Account? account = null;
        if (c.Username == "admin" && c.Password == "123")
        {
            account = new Account { Username = "tan thanh"};
        }
        return Task.FromResult(account);
   }

    public string GenerateToken(Account c)
    {
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], null,
            expires: DateTime.Now.AddMinutes(1),
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }



}
