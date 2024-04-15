using Microsoft.AspNetCore.Mvc;
using Northwind.WebApi.Repositories;
using Northwind.Shared;

namespace Northwind.WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController : ControllerBase
{
    private readonly ICategoryRepository repo;

    // Constructor injects repository registered in Startup
    public CategoriesController(ICategoryRepository repo)
    {
        this.repo = repo;
    }

    // GET: api/account
    // This will always return a list of ward (but it might be empty)
    [HttpGet]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Category>))]
    public async Task<IEnumerable<Category>> GetCategories()
    {
        return await repo.RetrieveAllAsync();
    }

    // POST: api/wards
    // BODY: Ward (JSON, XML)
    [HttpPost]
    [ProducesResponseType(201, Type = typeof(Ward))]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Create([FromBody] Category c)
    {
        if (c == null)
        {
            return BadRequest(); // 400 Bad request
        }

        Category? addedCategory = await repo.CreateAsync(c);

        if (addedCategory == null)
        {
            return BadRequest("Repository failed to create customer.");
        }
        else
        {
            return CreatedAtRoute( // 201 Created
                routeName: nameof(GetCategories),
                routeValues: new { id = addedCategory.Id },
                value: addedCategory);
        }
    }

    // GET: api/ward/[id]
    [HttpGet("{id}", Name = nameof(GetCategories))] // Named route
    [ProducesResponseType(200, Type = typeof(Category))]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetCategory(string id)
    {
        Category? c = await repo.RetrieveAsync(id);

        if (c == null)
        {
            return NotFound(); // 404 Resource not found
        }

        return Ok(c); // 200 OK with ward in body
    }

    // PUT: api/ward/[id]
    // BODY: ward (JSON, XML)
    [HttpPut("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Update(string id, [FromBody] Category c)
    {
        if (c == null || c.Id.ToString() != id)
        {
            return BadRequest(); // 400 Bad request
        }

        Category? existing = await repo.RetrieveAsync(id);
        if (existing == null)
        {
            return NotFound(); // 404 Resource not found
        }

        await repo.UpdateAsync(id, c);

        return new NoContentResult(); // 204 No content
    }

    // DELETE: api/wards/[id]
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

        Category? existing = await repo.RetrieveAsync(id);
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
            return BadRequest($"Category {id} was found but failed to delete.");
        }
    }
}
