using Microsoft.EntityFrameworkCore;
using LittleFishBeauty.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Add Entity Framework
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// Configure routing for Areas
app.MapControllerRoute(
    name: "areas",
    pattern: "{area:exists}/{controller=TrangChu}/{action=Index}/{id?}");

// Default route to Customer Area TrangChu Controller  
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=TrangChu}/{action=Index}/{id?}",
    defaults: new { area = "Customer" });

app.Run();
