using Microsoft.AspNetCore.Mvc;

namespace Areas_Cart.Areas.AreasCart.Controllers
{
[Area("AreasCart")]
public class ProductController : Controller
{
public IActionResult SanPham()
{
return View(); // trỏ đến Views/Product/sanpham.cshtml
}
}
}

