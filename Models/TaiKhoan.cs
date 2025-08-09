using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class TaiKhoan
    {
        [Key]
        public int ID_TaiKhoan { get; set; }

        [Required]
        [StringLength(100)]
        public string Email { get; set; }

        [Required]
        [StringLength(255)]
        public string MatKhau { get; set; }

        [StringLength(20)]
        public string VaiTro { get; set; }

        [StringLength(100)]
        public string HoTen { get; set; }

        public DateTime? NgaySinh { get; set; }

        [StringLength(10)]
        public string GioiTinh { get; set; }

        [StringLength(255)]
        public string AnhDaiDien { get; set; }

        public bool TrangThai { get; set; } = true;

        public DateTime NgayTao { get; set; } = DateTime.Now;

        // Navigation properties
        public virtual ICollection<DiaChi> DiaChis { get; set; }
        public virtual ICollection<GioHang> GioHangs { get; set; }
        public virtual ICollection<DonHang> DonHangs { get; set; }
        public virtual ICollection<DanhGia> DanhGias { get; set; }
    }
}
