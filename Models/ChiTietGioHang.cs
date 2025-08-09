using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class ChiTietGioHang
    {
        [Key]
        public int ID_ChiTiet { get; set; }

        public int ID_GioHang { get; set; }

        public int ID_BienThe { get; set; }

        public int SoLuong { get; set; } = 1;

        // Navigation properties
        [ForeignKey("ID_GioHang")]
        public virtual GioHang GioHang { get; set; }

        [ForeignKey("ID_BienThe")]
        public virtual BienTheSanPham BienTheSanPham { get; set; }
    }
}
