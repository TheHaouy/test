using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class DonHang
    {
        [Key]
        public int ID_DonHang { get; set; }

        public int ID_TaiKhoan { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal TongTien { get; set; }

        public DateTime NgayDat { get; set; } = DateTime.Now;

        [StringLength(50)]
        public string TrangThai { get; set; }

        public int ID_DiaChi { get; set; }

        [StringLength(50)]
        public string PhuongThucThanhToan { get; set; }

        // Navigation properties
        [ForeignKey("ID_TaiKhoan")]
        public virtual TaiKhoan TaiKhoan { get; set; }

        [ForeignKey("ID_DiaChi")]
        public virtual DiaChi DiaChi { get; set; }

        public virtual ICollection<ChiTietDonHang> ChiTietDonHangs { get; set; }
    }
}
