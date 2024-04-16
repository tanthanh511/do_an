using Northwind.WebApi.Repositories;

namespace Northwind.WebApi.Authorization;
public class JwtMiddleware
{
    private readonly RequestDelegate _next;

    public JwtMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context, IAccountRepository AccountRepository, IJwtUtils jwtUtils)
    {
        var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
        var Id = jwtUtils.ValidateJwtToken(token);
        if (Id != null)
        {
            // attach user to context on successful jwt validation
            context.Items["User"] = AccountRepository.RetrieveAsync(Id.Value.ToString());
        }

        await _next(context);
    }
}
