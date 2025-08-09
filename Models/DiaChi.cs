using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class DiaChi
    {
        [Key]
        public int ID_DiaChi { get; set; }

        public int ID_TaiKhoan { get; set; }

        [StringLength(100)]
        public string HoTenNguoiNhan { get; set; }

        [StringLength(20)]
        public string SoDienThoai { get; set; }

        [StringLength(255)]
        public string DiaChiChiTiet { get; set; }

        public bool MacDinh { get; set; } = false;

        // Navigation properties
        [ForeignKey("ID_TaiKhoan")]
        public virtual TaiKhoan TaiKhoan { get; set; }

        public virtual ICollection<DonHang> DonHangs { get; set; }
    }
}
