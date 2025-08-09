using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LittleFishBeauty.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DanhMuc",
                columns: table => new
                {
                    ID_DanhMuc = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenDanhMuc = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    MoTa = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    AnhDaiDien = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    ID_DanhMucCha = table.Column<int>(type: "int", nullable: true),
                    DuongDanSEO = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    ThuTuHienThi = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DanhMuc", x => x.ID_DanhMuc);
                    table.ForeignKey(
                        name: "FK_DanhMuc_DanhMuc_ID_DanhMucCha",
                        column: x => x.ID_DanhMucCha,
                        principalTable: "DanhMuc",
                        principalColumn: "ID_DanhMuc",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TaiKhoan",
                columns: table => new
                {
                    ID_TaiKhoan = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    MatKhau = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    VaiTro = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    HoTen = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    NgaySinh = table.Column<DateTime>(type: "datetime2", nullable: true),
                    GioiTinh = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    AnhDaiDien = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    TrangThai = table.Column<bool>(type: "bit", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaiKhoan", x => x.ID_TaiKhoan);
                    table.CheckConstraint("CK_TaiKhoan_VaiTro", "VaiTro IN ('admin', 'khach')");
                });

            migrationBuilder.CreateTable(
                name: "ThuocTinh",
                columns: table => new
                {
                    ID_ThuocTinh = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenThuocTinh = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThuocTinh", x => x.ID_ThuocTinh);
                });

            migrationBuilder.CreateTable(
                name: "SanPham",
                columns: table => new
                {
                    ID_SanPham = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenSanPham = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    MoTa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GiaBan = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false),
                    TrangThai = table.Column<bool>(type: "bit", nullable: false),
                    ID_DanhMuc = table.Column<int>(type: "int", nullable: false),
                    NgayTao = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SanPham", x => x.ID_SanPham);
                    table.ForeignKey(
                        name: "FK_SanPham_DanhMuc_ID_DanhMuc",
                        column: x => x.ID_DanhMuc,
                        principalTable: "DanhMuc",
                        principalColumn: "ID_DanhMuc",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DiaChi",
                columns: table => new
                {
                    ID_DiaChi = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_TaiKhoan = table.Column<int>(type: "int", nullable: false),
                    HoTenNguoiNhan = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    SoDienThoai = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    DiaChiChiTiet = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    MacDinh = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiaChi", x => x.ID_DiaChi);
                    table.ForeignKey(
                        name: "FK_DiaChi_TaiKhoan_ID_TaiKhoan",
                        column: x => x.ID_TaiKhoan,
                        principalTable: "TaiKhoan",
                        principalColumn: "ID_TaiKhoan",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GioHang",
                columns: table => new
                {
                    ID_GioHang = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_TaiKhoan = table.Column<int>(type: "int", nullable: false),
                    NgayCapNhat = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GioHang", x => x.ID_GioHang);
                    table.ForeignKey(
                        name: "FK_GioHang_TaiKhoan_ID_TaiKhoan",
                        column: x => x.ID_TaiKhoan,
                        principalTable: "TaiKhoan",
                        principalColumn: "ID_TaiKhoan",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GiaTriThuocTinh",
                columns: table => new
                {
                    ID_GiaTri = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_ThuocTinh = table.Column<int>(type: "int", nullable: false),
                    GiaTri = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GiaTriThuocTinh", x => x.ID_GiaTri);
                    table.ForeignKey(
                        name: "FK_GiaTriThuocTinh_ThuocTinh_ID_ThuocTinh",
                        column: x => x.ID_ThuocTinh,
                        principalTable: "ThuocTinh",
                        principalColumn: "ID_ThuocTinh",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AnhSanPham",
                columns: table => new
                {
                    ID_Anh = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_SanPham = table.Column<int>(type: "int", nullable: false),
                    DuongDan = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    LoaiAnh = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnhSanPham", x => x.ID_Anh);
                    table.CheckConstraint("CK_AnhSanPham_LoaiAnh", "LoaiAnh IN ('chinh', 'phu', '360')");
                    table.ForeignKey(
                        name: "FK_AnhSanPham_SanPham_ID_SanPham",
                        column: x => x.ID_SanPham,
                        principalTable: "SanPham",
                        principalColumn: "ID_SanPham",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BienTheSanPham",
                columns: table => new
                {
                    ID_BienThe = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_SanPham = table.Column<int>(type: "int", nullable: false),
                    SKU = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    SoLuongTonKho = table.Column<int>(type: "int", nullable: false),
                    GiaBan = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BienTheSanPham", x => x.ID_BienThe);
                    table.ForeignKey(
                        name: "FK_BienTheSanPham_SanPham_ID_SanPham",
                        column: x => x.ID_SanPham,
                        principalTable: "SanPham",
                        principalColumn: "ID_SanPham",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DanhGia",
                columns: table => new
                {
                    ID_DanhGia = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_TaiKhoan = table.Column<int>(type: "int", nullable: false),
                    ID_SanPham = table.Column<int>(type: "int", nullable: false),
                    SoSao = table.Column<int>(type: "int", nullable: false),
                    BinhLuan = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true),
                    AnhDanhGia = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    NgayDanhGia = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DanhGia", x => x.ID_DanhGia);
                    table.ForeignKey(
                        name: "FK_DanhGia_SanPham_ID_SanPham",
                        column: x => x.ID_SanPham,
                        principalTable: "SanPham",
                        principalColumn: "ID_SanPham",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DanhGia_TaiKhoan_ID_TaiKhoan",
                        column: x => x.ID_TaiKhoan,
                        principalTable: "TaiKhoan",
                        principalColumn: "ID_TaiKhoan",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DonHang",
                columns: table => new
                {
                    ID_DonHang = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_TaiKhoan = table.Column<int>(type: "int", nullable: false),
                    TongTien = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false),
                    NgayDat = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TrangThai = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ID_DiaChi = table.Column<int>(type: "int", nullable: false),
                    PhuongThucThanhToan = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    DiaChiID_DiaChi = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonHang", x => x.ID_DonHang);
                    table.ForeignKey(
                        name: "FK_DonHang_DiaChi_DiaChiID_DiaChi",
                        column: x => x.DiaChiID_DiaChi,
                        principalTable: "DiaChi",
                        principalColumn: "ID_DiaChi");
                    table.ForeignKey(
                        name: "FK_DonHang_DiaChi_ID_DiaChi",
                        column: x => x.ID_DiaChi,
                        principalTable: "DiaChi",
                        principalColumn: "ID_DiaChi");
                    table.ForeignKey(
                        name: "FK_DonHang_TaiKhoan_ID_TaiKhoan",
                        column: x => x.ID_TaiKhoan,
                        principalTable: "TaiKhoan",
                        principalColumn: "ID_TaiKhoan");
                });

            migrationBuilder.CreateTable(
                name: "ChiTietBienThe",
                columns: table => new
                {
                    ID_BienThe = table.Column<int>(type: "int", nullable: false),
                    ID_GiaTri = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietBienThe", x => new { x.ID_BienThe, x.ID_GiaTri });
                    table.ForeignKey(
                        name: "FK_ChiTietBienThe_BienTheSanPham_ID_BienThe",
                        column: x => x.ID_BienThe,
                        principalTable: "BienTheSanPham",
                        principalColumn: "ID_BienThe",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChiTietBienThe_GiaTriThuocTinh_ID_GiaTri",
                        column: x => x.ID_GiaTri,
                        principalTable: "GiaTriThuocTinh",
                        principalColumn: "ID_GiaTri",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ChiTietGioHang",
                columns: table => new
                {
                    ID_ChiTiet = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_GioHang = table.Column<int>(type: "int", nullable: false),
                    ID_BienThe = table.Column<int>(type: "int", nullable: false),
                    SoLuong = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietGioHang", x => x.ID_ChiTiet);
                    table.ForeignKey(
                        name: "FK_ChiTietGioHang_BienTheSanPham_ID_BienThe",
                        column: x => x.ID_BienThe,
                        principalTable: "BienTheSanPham",
                        principalColumn: "ID_BienThe",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChiTietGioHang_GioHang_ID_GioHang",
                        column: x => x.ID_GioHang,
                        principalTable: "GioHang",
                        principalColumn: "ID_GioHang",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ChiTietDonHang",
                columns: table => new
                {
                    ID_ChiTiet = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_DonHang = table.Column<int>(type: "int", nullable: false),
                    ID_BienThe = table.Column<int>(type: "int", nullable: false),
                    SoLuong = table.Column<int>(type: "int", nullable: false),
                    GiaLucDat = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietDonHang", x => x.ID_ChiTiet);
                    table.ForeignKey(
                        name: "FK_ChiTietDonHang_BienTheSanPham_ID_BienThe",
                        column: x => x.ID_BienThe,
                        principalTable: "BienTheSanPham",
                        principalColumn: "ID_BienThe",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChiTietDonHang_DonHang_ID_DonHang",
                        column: x => x.ID_DonHang,
                        principalTable: "DonHang",
                        principalColumn: "ID_DonHang",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnhSanPham_ID_SanPham",
                table: "AnhSanPham",
                column: "ID_SanPham");

            migrationBuilder.CreateIndex(
                name: "IX_BienTheSanPham_ID_SanPham",
                table: "BienTheSanPham",
                column: "ID_SanPham");

            migrationBuilder.CreateIndex(
                name: "IX_BienTheSanPham_SKU",
                table: "BienTheSanPham",
                column: "SKU",
                unique: true,
                filter: "[SKU] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietBienThe_ID_GiaTri",
                table: "ChiTietBienThe",
                column: "ID_GiaTri");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietDonHang_ID_BienThe",
                table: "ChiTietDonHang",
                column: "ID_BienThe");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietDonHang_ID_DonHang",
                table: "ChiTietDonHang",
                column: "ID_DonHang");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietGioHang_ID_BienThe",
                table: "ChiTietGioHang",
                column: "ID_BienThe");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietGioHang_ID_GioHang",
                table: "ChiTietGioHang",
                column: "ID_GioHang");

            migrationBuilder.CreateIndex(
                name: "IX_DanhGia_ID_SanPham",
                table: "DanhGia",
                column: "ID_SanPham");

            migrationBuilder.CreateIndex(
                name: "IX_DanhGia_ID_TaiKhoan",
                table: "DanhGia",
                column: "ID_TaiKhoan");

            migrationBuilder.CreateIndex(
                name: "IX_DanhMuc_ID_DanhMucCha",
                table: "DanhMuc",
                column: "ID_DanhMucCha");

            migrationBuilder.CreateIndex(
                name: "IX_DiaChi_ID_TaiKhoan",
                table: "DiaChi",
                column: "ID_TaiKhoan");

            migrationBuilder.CreateIndex(
                name: "IX_DonHang_DiaChiID_DiaChi",
                table: "DonHang",
                column: "DiaChiID_DiaChi");

            migrationBuilder.CreateIndex(
                name: "IX_DonHang_ID_DiaChi",
                table: "DonHang",
                column: "ID_DiaChi");

            migrationBuilder.CreateIndex(
                name: "IX_DonHang_ID_TaiKhoan",
                table: "DonHang",
                column: "ID_TaiKhoan");

            migrationBuilder.CreateIndex(
                name: "IX_GiaTriThuocTinh_ID_ThuocTinh",
                table: "GiaTriThuocTinh",
                column: "ID_ThuocTinh");

            migrationBuilder.CreateIndex(
                name: "IX_GioHang_ID_TaiKhoan",
                table: "GioHang",
                column: "ID_TaiKhoan");

            migrationBuilder.CreateIndex(
                name: "IX_SanPham_ID_DanhMuc",
                table: "SanPham",
                column: "ID_DanhMuc");

            migrationBuilder.CreateIndex(
                name: "IX_TaiKhoan_Email",
                table: "TaiKhoan",
                column: "Email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnhSanPham");

            migrationBuilder.DropTable(
                name: "ChiTietBienThe");

            migrationBuilder.DropTable(
                name: "ChiTietDonHang");

            migrationBuilder.DropTable(
                name: "ChiTietGioHang");

            migrationBuilder.DropTable(
                name: "DanhGia");

            migrationBuilder.DropTable(
                name: "GiaTriThuocTinh");

            migrationBuilder.DropTable(
                name: "DonHang");

            migrationBuilder.DropTable(
                name: "BienTheSanPham");

            migrationBuilder.DropTable(
                name: "GioHang");

            migrationBuilder.DropTable(
                name: "ThuocTinh");

            migrationBuilder.DropTable(
                name: "DiaChi");

            migrationBuilder.DropTable(
                name: "SanPham");

            migrationBuilder.DropTable(
                name: "TaiKhoan");

            migrationBuilder.DropTable(
                name: "DanhMuc");
        }
    }
}
