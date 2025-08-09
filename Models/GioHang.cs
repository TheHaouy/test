using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class GioHang
    {
        [Key]
        public int ID_GioHang { get; set; }

        public int ID_TaiKhoan { get; set; }

        public DateTime NgayCapNhat { get; set; } = DateTime.Now;

        // Navigation properties
        [ForeignKey("ID_TaiKhoan")]
        public virtual TaiKhoan TaiKhoan { get; set; }

        public virtual ICollection<ChiTietGioHang> ChiTietGioHangs { get; set; }
    }
}
