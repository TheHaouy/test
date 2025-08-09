using Microsoft.AspNetCore.Mvc;

namespace Areas_Cart.Areas.AreasCart.Controllers
{
[Area("AreasCart")]
public class PayController : Controller
{
public IActionResult ThanhToan()
{
return View(); // trỏ đến Views/Pay/thanhtoan.cshtml
}
}
}