using Northwind.Shared;

namespace Northwind.WebApi.Models;

public class AuthenticateResponse
{
    public Guid Id { get; set; }
    public string? Email { get; set; }
    public string? Username { get; set; }
    public string? Password { get; set; }
    public string? Bio { get; set; }
    public string? Avata { get; set; }
    public int? Status { get; set; }

    public string Token { get; set; }


    public AuthenticateResponse(Account account, string token)
    {
        Id = account.Id;
        Email = account.Email;
        Username = account.Username;
        Bio = account.Bio;
        Password = account.Password;
        Avata = account.Avatar;
        Status = account.Status;
        Token = token;
    }
}
