using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class ChiTietBienThe
    {
        public int ID_BienThe { get; set; }

        public int ID_GiaTri { get; set; }

        // Navigation properties
        [ForeignKey("ID_BienThe")]
        public virtual BienTheSanPham BienTheSanPham { get; set; }

        [ForeignKey("ID_GiaTri")]
        public virtual GiaTriThuocTinh GiaTriThuocTinh { get; set; }
    }
}
