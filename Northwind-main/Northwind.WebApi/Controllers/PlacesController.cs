using Microsoft.AspNetCore.Mvc;
using Northwind.WebApi.Repositories;
using Northwind.Shared;

namespace Northwind.WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PlaceController : ControllerBase
{
    private readonly IPlaceRepository repo;

    // Constructor injects repository registered in Startup
    public PlaceController(IPlaceRepository repo)
    {
        this.repo = repo;
    }

    // GET: api/Place
    // This will always return a list of ward (but it might be empty)
    [HttpGet]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Place>))]
    public async Task<IEnumerable<Place>> GetPlaces()
    {
        return await repo.RetrieveAllAsync();
    }

    // POST: api/Place
    // BODY: Ward (JSON, XML)
    [HttpPost]
    [ProducesResponseType(201, Type = typeof(Place))]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Create([FromBody] Place c)
    {
        if (c == null)
        {
            return BadRequest(); // 400 Bad request
        }

        Place? addedPlace = await repo.CreateAsync(c);

        if (addedPlace == null)
        {
            return BadRequest("Repository failed to create customer.");
        }
        else
        {
            return CreatedAtRoute( // 201 Created
                routeName: nameof(GetPlaces),
                routeValues: new { id = addedPlace.Id },
                value: addedPlace);
        }
    }

    // GET: api/Place/[id]
    [HttpGet("{id}", Name = nameof(GetPlaces))] // Named route
    [ProducesResponseType(200, Type = typeof(Place))]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetPlace(string id)
    {
        Place? c = await repo.RetrieveAsync(id);

        if (c == null)
        {
            return NotFound(); // 404 Resource not found
        }

        return Ok(c); // 200 OK with ward in body
    }

    // PUT: api/Place/[id]
    // BODY: Place (JSON, XML)
    [HttpPut("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Update(string id, [FromBody] Place c)
    {
        if (c == null || c.Id.ToString() != id)
        {
            return BadRequest(); // 400 Bad request
        }

        Place? existing = await repo.RetrieveAsync(id);
        if (existing == null)
        {
            return NotFound(); // 404 Resource not found
        }

        await repo.UpdateAsync(id, c);

        return new NoContentResult(); // 204 No content
    }

    // DELETE: api/Places/[id]
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
                Title = $"Place ID {id} found but failed to delete.",
                Detail = "More details like Company Name, Country and so on.",
                Instance = HttpContext.Request.Path
            };
            return BadRequest(problemDetails); // 400 Bad Request
        }

        Place? existing = await repo.RetrieveAsync(id);
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
            return BadRequest($"Place {id} was found but failed to delete.");
        }
    }
}
