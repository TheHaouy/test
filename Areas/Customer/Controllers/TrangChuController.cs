using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LittleFishBeauty.Data;
using LittleFishBeauty.Models;

namespace LittleFishBeauty.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class TrangChuController : Controller
    {
        private readonly ApplicationDbContext _context;

        public TrangChuController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            // Lấy danh mục nổi bật
            var danhMucs = await _context.DanhMuc
                .Where(d => d.ID_DanhMucCha == null) // Chỉ lấy danh mục cha
                .OrderBy(d => d.ThuTuHienThi)
                .Take(6)
                .ToListAsync();

            // Tính số sản phẩm cho từng danh mục
            var danhMucVoiSoLuong = new List<dynamic>();
            foreach (var dm in danhMucs)
            {
                var soLuongSanPham = await _context.SanPham
                    .Where(s => s.ID_DanhMuc == dm.ID_DanhMuc && s.TrangThai == true)
                    .CountAsync();
                
                Console.WriteLine($"Danh mục: {dm.TenDanhMuc}, ID: {dm.ID_DanhMuc}, Số sản phẩm: {soLuongSanPham}");
                
                danhMucVoiSoLuong.Add(new { 
                    ID_DanhMuc = dm.ID_DanhMuc,
                    TenDanhMuc = dm.TenDanhMuc,
                    SoLuongSanPham = soLuongSanPham 
                });
            }

            // Lấy sản phẩm bán chạy theo lượt bán thật
            // Bước 1: Lấy ID các sản phẩm có lượt bán cao nhất
            var topProductIds = await _context.Database.SqlQueryRaw<int>(@"
                SELECT TOP 4 sp.ID_SanPham
                FROM SanPham sp
                INNER JOIN BienTheSanPham bt ON sp.ID_SanPham = bt.ID_SanPham
                INNER JOIN ChiTietDonHang ctdh ON bt.ID_BienThe = ctdh.ID_BienThe
                WHERE sp.TrangThai = 1
                GROUP BY sp.ID_SanPham
                ORDER BY SUM(ctdh.SoLuong) DESC
            ").ToListAsync();

            Console.WriteLine($"TopProductIds count: {topProductIds.Count}");
            foreach(var id in topProductIds)
            {
                Console.WriteLine($"Product ID: {id}");
            }
            
            if (topProductIds.Any())
            {
                // Bước 2: Lấy thông tin chi tiết của các sản phẩm đó
                var sanPhamBanChay = await _context.SanPham
                    .Include(s => s.AnhSanPhams)
                    .Include(s => s.DanhMuc)
                    .Where(s => topProductIds.Contains(s.ID_SanPham))
                    .ToListAsync();
                
                Console.WriteLine($"SanPhamBanChay count: {sanPhamBanChay.Count}");
                foreach(var sp in sanPhamBanChay)
                {
                    Console.WriteLine($"Product: {sp.TenSanPham}, Price: {sp.GiaBan}");
                }
                
                ViewBag.SanPhamBanChay = sanPhamBanChay;
            }
            else
            {
                Console.WriteLine("No products with sales found, getting newest products");
                // Nếu không có sản phẩm nào có lượt bán, lấy sản phẩm mới nhất
                var sanPhamMoi = await _context.SanPham
                    .Include(s => s.AnhSanPhams)
                    .Include(s => s.DanhMuc)
                    .Where(s => s.TrangThai == true)
                    .OrderByDescending(s => s.NgayTao)
                    .Take(4)
                    .ToListAsync();
                
                ViewBag.SanPhamBanChay = sanPhamMoi;
            }

            ViewBag.DanhMucs = danhMucVoiSoLuong;

            return View();
        }

        [HttpPost]
        public IActionResult TimKiem(string searchQuery)
        {
            // Logic tìm kiếm sản phẩm
            // Redirect hoặc return partial view với kết quả
            return RedirectToAction("Index", "SanPham", new { search = searchQuery });
        }

        public IActionResult DanhMuc(string category)
        {
            // Logic lọc theo danh mục
            return RedirectToAction("Index", "SanPham", new { category = category });
        }
    }
}
