using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LittleFishBeauty.Data;
using LittleFishBeauty.Models;

namespace LittleFishBeauty.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class ChiTietController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ChiTietController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index(int id)
        {
            var sanPham = await _context.SanPham
                .Include(s => s.AnhSanPhams)
                .Include(s => s.DanhGias)
                    .ThenInclude(d => d.TaiKhoan)
                .Include(s => s.DanhMuc)
                .Include(s => s.BienTheSanPhams)
                .FirstOrDefaultAsync(s => s.ID_SanPham == id && s.TrangThai == true);

            if (sanPham == null)
            {
                return NotFound();
            }

            // Tính tổng số lượng tồn kho từ các biến thể
            var tongSoLuongTonKho = sanPham.BienTheSanPhams?.Sum(bt => bt.SoLuongTonKho) ?? 0;
            ViewBag.TongSoLuongTonKho = tongSoLuongTonKho;

            // Tính thống kê đánh giá
            var danhGias = sanPham.DanhGias?.Where(d => d.SoSao > 0).ToList() ?? new List<DanhGia>();
            ViewBag.TongSoDanhGia = danhGias.Count;
            ViewBag.DiemTrungBinh = danhGias.Any() ? Math.Round(danhGias.Average(d => d.SoSao), 1) : 0;
            
            // Thống kê theo từng mức sao
            ViewBag.ThongKeSao = new Dictionary<int, int>
            {
                { 5, danhGias.Count(d => d.SoSao == 5) },
                { 4, danhGias.Count(d => d.SoSao == 4) },
                { 3, danhGias.Count(d => d.SoSao == 3) },
                { 2, danhGias.Count(d => d.SoSao == 2) },
                { 1, danhGias.Count(d => d.SoSao == 1) }
            };

            // Lấy sản phẩm gợi ý (cùng danh mục)
            var sanPhamGoiY = await _context.SanPham
                .Include(s => s.AnhSanPhams)
                .Include(s => s.DanhGias)
                .Where(s => s.ID_DanhMuc == sanPham.ID_DanhMuc && 
                           s.ID_SanPham != id && 
                           s.TrangThai == true)
                .Take(4)
                .ToListAsync();

            ViewBag.SanPhamGoiY = sanPhamGoiY;
            ViewBag.ProductId = id;

            return View(sanPham);
        }

        [HttpPost]
        public async Task<IActionResult> ThemVaoGioHang(int productId, int quantity)
        {
            try
            {
                var sanPham = await _context.SanPham.FindAsync(productId);
                if (sanPham == null)
                {
                    return Json(new { success = false, message = "Sản phẩm không tồn tại" });
                }

                // TODO: Implement add to cart logic
                // For now, just return success
                return Json(new { success = true, message = "Đã thêm vào giỏ hàng" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Có lỗi xảy ra: " + ex.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> MuaNgay(int productId, int quantity)
        {
            try
            {
                var sanPham = await _context.SanPham.FindAsync(productId);
                if (sanPham == null)
                {
                    return Json(new { success = false, message = "Sản phẩm không tồn tại" });
                }

                // TODO: Implement buy now logic
                return RedirectToAction("Index", "GioHang", new { area = "Customer" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Có lỗi xảy ra: " + ex.Message });
            }
        }

        /*
        [HttpPost]
        public async Task<IActionResult> ThemDanhGia(int productId, int rating, string comment)
        {
            try
            {
                var sanPham = await _context.SanPham.FindAsync(productId);
                if (sanPham == null)
                {
                    return Json(new { success = false, message = "Sản phẩm không tồn tại" });
                }

                // TODO: Get current user ID from authentication
                // For now, we'll skip adding the review
                var danhGia = new DanhGia
                {
                    ID_SanPham = productId,
                    ID_TaiKhoan = currentUserId,
                    SoSao = rating,
                    BinhLuan = comment,
                    NgayDanhGia = DateTime.Now
                };

                _context.DanhGias.Add(danhGia);
                await _context.SaveChangesAsync();

                return Json(new { success = true, message = "Đã thêm đánh giá" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Có lỗi xảy ra: " + ex.Message });
            }
        }

        public async Task<IActionResult> LayDanhGia(int productId, int page = 1)
        {
            try
            {
                const int pageSize = 5;
                var danhGias = await _context.DanhGias
                    .Include(d => d.TaiKhoan)
                    .Where(d => d.ID_SanPham == productId)
                    .OrderByDescending(d => d.NgayDanhGia)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .Select(d => new
                    {
                        d.ID_DanhGia,
                        d.SoSao,
                        d.BinhLuan,
                        d.NgayDanhGia,
                        TenNguoiDung = d.TaiKhoan.HoTen ?? d.TaiKhoan.Email,
                        d.AnhDanhGia
                    })
                    .ToListAsync();

                return Json(new { success = true, reviews = danhGias });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Có lỗi xảy ra: " + ex.Message });
            }
        }
        */

        public async Task<IActionResult> LaySanPhamGoiY(int productId)
        {
            try
            {
                var sanPham = await _context.SanPham.FindAsync(productId);
                if (sanPham == null)
                {
                    return Json(new { success = false, message = "Sản phẩm không tồn tại" });
                }

                var sanPhamGoiY = await _context.SanPham
                    .Include(s => s.AnhSanPhams)
                    // Tạm comment vì chưa có bảng DanhGia
                    // .Include(s => s.DanhGias)
                    .Where(s => s.ID_DanhMuc == sanPham.ID_DanhMuc && 
                               s.ID_SanPham != productId && 
                               s.TrangThai == true)
                    .Take(4)
                    .Select(s => new
                    {
                        s.ID_SanPham,
                        s.TenSanPham,
                        s.GiaBan,
                        AnhChinh = s.AnhSanPhams.FirstOrDefault(a => a.LoaiAnh == "chinh").DuongDan,
                        // Tạm thời set giá trị mặc định
                        DiemDanhGia = 0, // s.DanhGias.Any() ? s.DanhGias.Average(d => d.SoSao) : 0,
                        SoLuongDanhGia = 0 // s.DanhGias.Count()
                    })
                    .ToListAsync();

                return Json(new { success = true, products = sanPhamGoiY });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = "Có lỗi xảy ra: " + ex.Message });
            }
        }
    }
}
