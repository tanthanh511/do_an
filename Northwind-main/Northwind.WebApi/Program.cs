using Microsoft.AspNetCore.HttpLogging;
using Microsoft.AspNetCore.Mvc.Formatters;
using Northwind.Common.DataContext.SqlServer;
using Northwind.WebApi.Repositories;
using Northwind.Shared;
using Swashbuckle.AspNetCore.SwaggerUI;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

using static System.Console;
using System.Text;
using Northwind.WebApi.Authorization;
using Northwind.WebApi.Helpers;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("https://localhost:5002/");
//custumer token
//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//    .AddJwtBearer(options =>
//    {
//        options.TokenValidationParameters = new TokenValidationParameters
//        {
//            ValidateIssuer = true,
//            ValidateAudience = true,
//            ValidateLifetime = true,
//            ValidIssuer = builder.Configuration["Jwt:Issuer"],
//            ValidAudience = builder.Configuration["Jwt:Audience"],
//            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
//        };
//    });

// token
// configure strongly typed settings object
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

// configure DI for application services
builder.Services.AddScoped<IJwtUtils, JwtUtils>();
///



// Add services to the container.
builder.Services.AddTravelCompanionContext();
builder.Services
    .AddControllers(options =>
    {
        WriteLine("Default output formatters:");
        foreach (IOutputFormatter formatter in options.OutputFormatters)
        {
            OutputFormatter? mediaFormatter = formatter as OutputFormatter;
            if (mediaFormatter == null)
            {
                WriteLine($"  {formatter.GetType().Name}");
            }
            else
            {
                // OutputFormatter class has SupportedMediaTypes
                WriteLine("  {0}, Media types: {1}",
                    arg0: mediaFormatter.GetType().Name,
                    arg1: string.Join(", ", mediaFormatter.SupportedMediaTypes));
            }
        }
    })
    .AddXmlDataContractSerializerFormatters()
    .AddXmlSerializerFormatters();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "Travel companion Service API", Version = "v1" });
});

builder.Services.AddScoped<IAccountRepository, AccountRepository>();
builder.Services.AddScoped<IWardRepository, WardRepository>();
builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<IPlaceRepository, PlaceRepository>();
builder.Services.AddScoped<ILoginRepository, LoginRepository>();


builder.Services.AddHttpLogging(options =>
{
    options.LoggingFields = HttpLoggingFields.All;
    options.RequestBodyLogLimit = 4096; // Default is 32k
    options.ResponseBodyLogLimit = 4096; // Default is 32k
});

builder.Services
    .AddHealthChecks()
    .AddDbContextCheck<TravelCompanionContext>();

builder.Services.AddCors();

var app = builder.Build();  

app.UseHttpLogging();

app.UseCors(options =>
{
    options.AllowAnyOrigin();
    options.AllowAnyHeader();
    options.AllowAnyMethod();
});
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Travel companion Service API Version 1");
        c.SupportedSubmitMethods(new[] {
            SubmitMethod.Get,
            SubmitMethod.Post,
            SubmitMethod.Put,
            SubmitMethod.Delete });
    });
}

// token
app.UseAuthentication();
//

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseHealthChecks(path: "/howdoyoufeel");

app.UseMiddleware<JwtMiddleware>();
//app.UseMiddleware<SecurityHeaders>();

app.MapControllers();

app.Run();




//builder.WebHost.ConfigureKestrel(serverOptions =>
//{
//    serverOptions.Limits.MaxResponseBufferSize = null;
//});
//var cors = (builder.Configuration["Cors"] + "").Split(",").ToList().ToArray();
//builder.Services.AddCors(p =>
//{
//    p.AddPolicy("T", b =>
//    {
//        b.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
//    });
//});

//builder.Services.AddTravelCompanionContext();
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//            .AddJwtBearer(options =>
//            {
//                options.SaveToken = true;
//                options.RequireHttpsMetadata = false;
//                options.TokenValidationParameters = new TokenValidationParameters()
//                {
//                    ValidateIssuer = true,
//                    ValidateAudience = true,
//                    ValidAudience = builder.Configuration["JWTKey:ValidAudience"],
//                    ValidIssuer = builder.Configuration["JWTKey:ValidIssuer"],
//                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWTKey:Secret"]))
//                };
//            });
//var app = builder.Build();
//app.UseSwagger();
//app.UseSwaggerUI();
//app.UseHttpsRedirection();

//app.UseAuthentication();
//app.UseAuthorization();

//app.MapControllers();
//app.UseCors("T");
//app.Run();
