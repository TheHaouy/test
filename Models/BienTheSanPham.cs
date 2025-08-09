using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class BienTheSanPham
    {
        [Key]
        public int ID_BienThe { get; set; }

        public int ID_SanPham { get; set; }

        [StringLength(50)]
        public string SKU { get; set; }

        public int SoLuongTonKho { get; set; } = 0;

        [Column(TypeName = "decimal(18,2)")]
        public decimal? GiaBan { get; set; }

        // Navigation properties
        [ForeignKey("ID_SanPham")]
        public virtual SanPham SanPham { get; set; }

        public virtual ICollection<ChiTietBienThe> ChiTietBienThes { get; set; }
        public virtual ICollection<ChiTietGioHang> ChiTietGioHangs { get; set; }
        public virtual ICollection<ChiTietDonHang> ChiTietDonHangs { get; set; }
    }
}
