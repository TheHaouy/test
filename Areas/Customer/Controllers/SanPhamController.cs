using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LittleFishBeauty.Data;
using LittleFishBeauty.Models;

namespace LittleFishBeauty.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class SanPhamController : Controller
    {
        private readonly ApplicationDbContext _context;

        public SanPhamController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index(string search, string category, decimal? minPrice, decimal? maxPrice, string sortBy, int page = 1)
        {
            const int pageSize = 12; // 12 sản phẩm mỗi trang
            
            var query = _context.SanPham
                .Include(s => s.AnhSanPhams)
                .Include(s => s.DanhGias)
                .Include(s => s.DanhMuc)
                .Where(s => s.TrangThai == true);

            // Tìm kiếm theo từ khóa
            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(s => s.TenSanPham.Contains(search) || s.MoTa.Contains(search));
                ViewBag.SearchQuery = search;
            }

            // Lọc theo danh mục
            DanhMuc selectedCategory = null;
            if (!string.IsNullOrEmpty(category))
            {
                selectedCategory = await _context.DanhMuc.FirstOrDefaultAsync(d => d.DuongDanSEO == category);
                if (selectedCategory != null)
                {
                    query = query.Where(s => s.ID_DanhMuc == selectedCategory.ID_DanhMuc);
                    ViewBag.CurrentCategory = selectedCategory;
                }
            }

            // Lọc theo giá
            if (minPrice.HasValue)
            {
                query = query.Where(s => s.GiaBan >= minPrice.Value);
                ViewBag.MinPrice = minPrice;
            }
            if (maxPrice.HasValue)
            {
                query = query.Where(s => s.GiaBan <= maxPrice.Value);
                ViewBag.MaxPrice = maxPrice;
            }

            // Sắp xếp
            switch (sortBy?.ToLower())
            {
                case "popular":
                    query = query.OrderByDescending(s => s.DanhGias.Count()).ThenByDescending(s => s.NgayTao);
                    break;
                case "newest":
                    query = query.OrderByDescending(s => s.NgayTao);
                    break;
                case "price-asc":
                    query = query.OrderBy(s => s.GiaBan);
                    break;
                case "price-desc":
                    query = query.OrderByDescending(s => s.GiaBan);
                    break;
                case "rating":
                    query = query.OrderByDescending(s => s.DanhGias.Any() ? s.DanhGias.Average(d => d.SoSao) : 0).ThenByDescending(s => s.NgayTao);
                    break;
                default:
                    query = query.OrderByDescending(s => s.NgayTao);
                    break;
            }

            // Đếm tổng số sản phẩm trước khi phân trang
            var totalProducts = query.Count();
            
            // Tính toán phân trang
            var totalPages = (int)Math.Ceiling((double)totalProducts / pageSize);
            var skip = (page - 1) * pageSize;
            
            // Lấy sản phẩm theo trang
            var sanPhams = await query.Skip(skip).Take(pageSize).ToListAsync();

            // Lấy danh sách danh mục cho sidebar
            var danhMucs = await _context.DanhMuc
                .Where(d => d.ID_DanhMucCha == null)
                .OrderBy(d => d.ThuTuHienThi)
                .ToListAsync();

            ViewBag.DanhMucs = danhMucs;
            ViewBag.SortBy = sortBy;
            
            // Thông tin phân trang
            ViewBag.CurrentPage = page;
            ViewBag.TotalPages = totalPages;
            ViewBag.TotalProducts = totalProducts;
            ViewBag.PageSize = pageSize;
            
            // Giữ lại các tham số filter cho phân trang
            ViewBag.CurrentSearch = search;
            ViewBag.CurrentCategoryString = category; // string version for pagination
            ViewBag.CurrentMinPrice = minPrice;
            ViewBag.CurrentMaxPrice = maxPrice;
            ViewBag.CurrentSortBy = sortBy;

            return View(sanPhams);
        }

        public IActionResult TimKiem(string searchTerm)
        {
            return RedirectToAction("Index", new { search = searchTerm });
        }

        public IActionResult DanhMuc(string category)
        {
            return RedirectToAction("Index", new { category = category });
        }

        public IActionResult LuocGia(decimal? minPrice, decimal? maxPrice)
        {
            return RedirectToAction("Index", new { minPrice = minPrice, maxPrice = maxPrice });
        }

        public IActionResult SapXep(string sortBy)
        {
            return RedirectToAction("Index", new { sortBy = sortBy });
        }
    }
}
