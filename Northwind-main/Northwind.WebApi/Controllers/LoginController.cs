using Microsoft.AspNetCore.Mvc;
using Northwind.WebApi.Repositories;
using Northwind.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Northwind.WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LoginController : ControllerBase
{
    private IConfiguration _config;
    private readonly ILoginRepository _loginRepository;

    public LoginController(IConfiguration configuration, ILoginRepository loginRepository)
    {
        _config = configuration;
        _loginRepository = loginRepository;
    }


    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> Login(Account c)
    {
        IActionResult response = Unauthorized();
        var account = await _loginRepository.AuthenticateAccountAsync(c);
        if (account != null)
        {
            var token = _loginRepository.GenerateToken(account);
            response = Ok(new { token });
        }
        return response;
    }



}
