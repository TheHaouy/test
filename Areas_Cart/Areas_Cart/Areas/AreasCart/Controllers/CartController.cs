using Microsoft.AspNetCore.Mvc;

namespace Areas_Cart.Areas.AreasCart.Controllers
{
[Area("AreasCart")] // ✅ Rất quan trọng để định danh Area
public class CartController : Controller
{
public IActionResult GioHang()
{
return View(); // Mặc định tìm tại: Areas/AreasCart/Views/Cart/GioHang.cshtml
}
}
}