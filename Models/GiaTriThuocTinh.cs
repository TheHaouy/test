using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LittleFishBeauty.Models
{
    public class GiaTriThuocTinh
    {
        [Key]
        public int ID_GiaTri { get; set; }

        public int ID_ThuocTinh { get; set; }

        [StringLength(100)]
        public string GiaTri { get; set; }

        // Navigation properties
        [ForeignKey("ID_ThuocTinh")]
        public virtual ThuocTinh ThuocTinh { get; set; }

        public virtual ICollection<ChiTietBienThe> ChiTietBienThes { get; set; }
    }
}
