using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class ThuocTinh
    {
        [Key]
        public int ID_ThuocTinh { get; set; }

        [StringLength(100)]
        public string TenThuocTinh { get; set; }

        // Navigation properties
        public virtual ICollection<GiaTriThuocTinh> GiaTriThuocTinhs { get; set; }
    }
}
