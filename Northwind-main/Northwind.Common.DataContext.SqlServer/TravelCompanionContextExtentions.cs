using Microsoft.EntityFrameworkCore; // UseSqlServer
using Microsoft.Extensions.DependencyInjection;
using Northwind.Shared;

namespace Northwind.Common.DataContext.SqlServer;

public static class TravelCompanionContextExtentions
{
    /// <summary>
    /// Adds NorthwindContext to the specified IServiceCollection. Uses the SqlServer database provider.
    /// </summary>
    /// <param name="services"></param>
    /// <param name="connectionString">Set to override the default.</param>
    /// <returns>An IServiceCollection that can be used to add more services.</returns>
    public static IServiceCollection AddTravelCompanionContext(
    this IServiceCollection services, string connectionString =
    "Data Source=.;Initial Catalog=TravelCompanion;"
    + "Integrated Security=true;MultipleActiveResultsets=true;Trust Server Certificate=true;")
    {
        services.AddDbContext<TravelCompanionContext>(options =>
        options.UseSqlServer(connectionString));
        return services;
    }
}