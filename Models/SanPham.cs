using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class SanPham
    {
        [Key]
        public int ID_SanPham { get; set; }

        [StringLength(100)]
        public string TenSanPham { get; set; }

        public string MoTa { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal GiaBan { get; set; }

        public bool TrangThai { get; set; } = true;

        public int ID_DanhMuc { get; set; }

        public DateTime NgayTao { get; set; } = DateTime.Now;

        // Navigation properties
        [ForeignKey("ID_DanhMuc")]
        public virtual DanhMuc DanhMuc { get; set; }

        public virtual ICollection<AnhSanPham> AnhSanPhams { get; set; }
        public virtual ICollection<BienTheSanPham> BienTheSanPhams { get; set; }
        public virtual ICollection<DanhGia> DanhGias { get; set; }

        // Computed properties for display
        [NotMapped]
        public string AnhChinh => AnhSanPhams?.FirstOrDefault(x => x.LoaiAnh == "chinh")?.DuongDan;

        [NotMapped]
        public double DiemDanhGia => DanhGias?.Any() == true ? DanhGias.Average(x => x.SoSao) : 0;

        [NotMapped]
        public int SoLuongDanhGia => DanhGias?.Count() ?? 0;
    }
}
