using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class DanhMuc
    {
        [Key]
        public int ID_DanhMuc { get; set; }

        [StringLength(100)]
        public string TenDanhMuc { get; set; }

        [StringLength(255)]
        public string MoTa { get; set; }

        [StringLength(255)]
        public string AnhDaiDien { get; set; }

        public int? ID_DanhMucCha { get; set; }

        [StringLength(255)]
        public string DuongDanSEO { get; set; }

        public int ThuTuHienThi { get; set; } = 0;

        // Navigation properties
        [ForeignKey("ID_DanhMucCha")]
        public virtual DanhMuc DanhMucCha { get; set; }

        public virtual ICollection<DanhMuc> DanhMucCons { get; set; }
        public virtual ICollection<SanPham> SanPhams { get; set; }
    }
}
