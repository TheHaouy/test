using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class DanhGia
    {
        [Key]
        public int ID_DanhGia { get; set; }

        public int ID_TaiKhoan { get; set; }

        public int ID_SanPham { get; set; }

        [Range(1, 5)]
        public int SoSao { get; set; }

        [StringLength(1000)]
        public string BinhLuan { get; set; }

        [StringLength(255)]
        public string AnhDanhGia { get; set; }

        public DateTime NgayDanhGia { get; set; } = DateTime.Now;

        // Navigation properties
        [ForeignKey("ID_TaiKhoan")]
        public virtual TaiKhoan TaiKhoan { get; set; }

        [ForeignKey("ID_SanPham")]
        public virtual SanPham SanPham { get; set; }
    }
}
