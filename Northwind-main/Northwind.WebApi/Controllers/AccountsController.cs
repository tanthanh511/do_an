using Microsoft.AspNetCore.Mvc;
using Northwind.WebApi.Repositories;
using Northwind.Shared;
using System.ComponentModel.DataAnnotations;
//using Northwind.WebApi.Authorization;
//using Northwind.WebApi.Models;

namespace Northwind.WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
//[Authorize]
public class AccountsController : ControllerBase
{
    
    private readonly IAccountRepository repo;

    // Constructor injects repository registered in Startup
    public AccountsController(IAccountRepository repo  )
    {
        this.repo = repo;
       
    }

    // GET: api/account
    // This will always return a list of account (but it might be empty)
    [HttpGet]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Account>))]
    public async Task<IEnumerable<Account>> GetAccounts()
    {
        return await repo.RetrieveAllAsync();
    }


    //GET: api/accounts/[id]
    [HttpGet("{id}", Name = nameof(GetAccounts))] // Named route
    [ProducesResponseType(200, Type = typeof(Account))]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetAccount(string id)
    {
        Account? c = await repo.RetrieveAsync(id);

        if (c == null)
        {
            return NotFound(); // 404 Resource not found
        }

        return Ok(c); // 200 OK with account in body
    }

    [HttpGet("{email}/{password}", Name = nameof(Login))] // Named route
    [ProducesResponseType(200, Type = typeof(Account))]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Login(string email, string password)
    {
        IEnumerable<Account?> listAccount = await repo.RetrieveAllAsync();

        if (listAccount.FirstOrDefault(a=> a.Email== email) == null
            || listAccount.FirstOrDefault(a => a.Password == password) == null)
        {
            return NotFound(); // 404 Resource not found
        }

        return Ok(listAccount.FirstOrDefault(a => a.Email == email)); // 200 OK with account in body
    }



    // POST: api/accounts
    // BODY: Customer (JSON, XML)
    [HttpPost]
    [ProducesResponseType(201, Type = typeof(Account))]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Create([FromBody] Account c)
    {
        if (c == null)
        {
            return BadRequest(); // 400 Bad request
        }

        Account? addedAcount = await repo.CreateAsync(c);

        if (addedAcount == null)
        {
            return BadRequest("Repository failed to create customer.");
        }
        else
        {
            return CreatedAtRoute( // 201 Created
                routeName: nameof(GetAccounts),
                routeValues: new { id = addedAcount.Id },
                value: addedAcount);
        }
    }


    // PUT: api/customers/[id]
    // BODY: Customer (JSON, XML)
    [HttpPut("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Update(string id, [FromBody] Account c)
    {
        if (c == null || c.Id.ToString() != id)
        {
            return BadRequest(); // 400 Bad request
        }

        Account? existing = await repo.RetrieveAsync(id);
        if (existing == null)
        {
            return NotFound(); // 404 Resource not found
        }

        await repo.UpdateAsync(id, c);

        return new NoContentResult(); // 204 No content
    }

    // DELETE: api/customers/[id]
    [HttpDelete("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Delete(string id)
    {
        // Take control of problem details
        if (id == "bad")
        {
            ProblemDetails problemDetails = new()
            {
                Status = StatusCodes.Status400BadRequest,
                Type = "https://localhost:5001/accounts/failed-to-delete",
                Title = $"Customer ID {id} found but failed to delete.",
                Detail = "More details like Company Name, Country and so on.",
                Instance = HttpContext.Request.Path
            };
            return BadRequest(problemDetails); // 400 Bad Request
        }

        Account? existing = await repo.RetrieveAsync(id);
        if (existing == null)
        {
            return NotFound(); // 404 Resource not found
        }

        bool? deleted = await repo.DeleteAsync(id);
        if (deleted.HasValue && deleted.Value) // Short circuit AND
        {
            return new NoContentResult(); // 204 No content
        }
        else
        {
            // 400 Bad request
            return BadRequest($"Customer {id} was found but failed to delete.");
        }
    }



    
    // Đang lỗi 
    //[AllowAnonymous]
    //[HttpPost("authenticate")]
    //public IActionResult Authenticate(AuthenticateRequest model)
    //{
    //    var response = repo.Authenticate(model);

    //    if (response == null)
    //        return BadRequest(new { message = "Username or password is incorrect" });

    //    return Ok(response);
    //}
    

    //public async Task<IActionResult> Authenticate(AuthenticateRequest model)
    //{
    //    var response = await repo.Authenticate(model);

    //    if (response == null)
    //        return BadRequest(new { message = "Username or password is incorrect" });

    //    return Ok(response);
    //}

}
