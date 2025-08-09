using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class AnhSanPham
    {
        [Key]
        public int ID_Anh { get; set; }

        public int ID_SanPham { get; set; }

        [StringLength(255)]
        public string DuongDan { get; set; }

        [StringLength(20)]
        public string LoaiAnh { get; set; } // chinh, phu, 360

        // Navigation properties
        [ForeignKey("ID_SanPham")]
        public virtual SanPham SanPham { get; set; }
    }
}
