using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class ChiTietDonHang
    {
        [Key]
        public int ID_ChiTiet { get; set; }

        public int ID_DonHang { get; set; }

        public int ID_BienThe { get; set; }

        public int SoLuong { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal GiaLucDat { get; set; }

        // Navigation properties
        [ForeignKey("ID_DonHang")]
        public virtual DonHang DonHang { get; set; }

        [ForeignKey("ID_BienThe")]
        public virtual BienTheSanPham BienTheSanPham { get; set; }
    }
}
