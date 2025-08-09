using Microsoft.AspNetCore.Mvc;

namespace LittleFishBeauty.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            // Redirect to Customer Area
            return RedirectToAction("Index", "TrangChu", new { area = "Customer" });
        }
    }
}
