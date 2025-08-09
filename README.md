# LittleFish Beauty - Website Mỹ Phẩm Thiên Nhiên

## Mô tả
Website thương mại điện tử bán mỹ phẩm thiên nhiên với giao diện đẹp mắt và thân thiện với người dùng.

## Cấu trúc thư mục
```
giaodien/
├── css/
│   ├── trangchu.css        # CSS cho trang chủ
│   ├── sanpham.css         # CSS cho trang sản phẩm
│   └── chitiet-sanpham.css # CSS cho trang chi tiết sản phẩm
├── js/
│   ├── trangchu.js         # JavaScript cho trang chủ
│   ├── sanpham.js          # JavaScript cho trang sản phẩm
│   ├── chitiet-sanpham.js  # JavaScript cho trang chi tiết sản phẩm
│   └── common.js           # JavaScript chung
├── images/
│   └── logomoi (2).png     # Logo website
├── trangchu.html           # Trang chủ
├── sanpham.html            # Trang danh sách sản phẩm
├── chitiet-sanpham.html    # Trang chi tiết sản phẩm
├── header.html             # Header (chưa sử dụng)
└── footer.html             # Footer (chưa sử dụng)
```

## Tính năng hiện có

### Trang chủ (trangchu.html)
- Banner khuyến mãi với hiệu ứng gradient
- Danh mục sản phẩm nổi bật với icon Font Awesome
- Carousel sản phẩm bán chạy
- Khu vực đánh giá khách hàng
- Footer với thông tin liên hệ

### Trang sản phẩm (sanpham.html)
- Sidebar lọc theo danh mục và giá
- Grid hiển thị sản phẩm với hover effects
- Phân trang
- Sắp xếp sản phẩm
- Tìm kiếm sản phẩm

### Trang chi tiết sản phẩm (chitiet-sanpham.html)
- Gallery ảnh sản phẩm
- Thông tin chi tiết sản phẩm
- Đánh giá và nhận xét
- Sản phẩm liên quan
- Thêm vào giỏ hàng / yêu thích

### Tính năng JavaScript
- Tìm kiếm với gợi ý và lịch sử
- Thêm sản phẩm vào giỏ hàng (simulation)
- Yêu thích sản phẩm
- Thông báo toast
- Hiệu ứng hover và animation
- Responsive cho mobile

## Cách chạy website

### 1. Chạy trực tiếp với file HTML
- Mở file `trangchu.html` bằng trình duyệt web
- Hoặc click đúp vào file `trangchu.html`

### 2. Chạy với Live Server (Khuyến nghị)
Nếu bạn sử dụng Visual Studio Code:
1. Cài đặt extension "Live Server"
2. Right-click vào file `trangchu.html`
3. Chọn "Open with Live Server"

### 3. Chạy với Python HTTP Server
```bash
cd path/to/giaodien
python -m http.server 8000
```
Sau đó mở trình duyệt và truy cập: http://localhost:8000

### 4. Chạy với Node.js HTTP Server
```bash
npx http-server
```

## Sản phẩm mẫu đã thêm

Trang web hiện có 6 sản phẩm mẫu:

1. **Kem dưỡng ẩm thiên nhiên** - 350.000₫ (Best Seller)
2. **Son môi organic** - 280.000₫ (Mới)
3. **Serum vitamin C** - 420.000₫
4. **Kem chống nắng SPF 50** - 320.000₫ (Best Seller)
5. **Tinh dầu trà tràm** - 180.000₫
6. **Mặt nạ đất sét** - 250.000₫ (Mới)

## Danh mục sản phẩm

- Chăm sóc da (15 sản phẩm)
- Trang điểm (12 sản phẩm)
- Dưỡng tóc (8 sản phẩm)
- Chống nắng (6 sản phẩm)
- Tinh dầu (10 sản phẩm)
- Chăm sóc cơ thể (9 sản phẩm)

## Framework và thư viện sử dụng

- **Bootstrap 5.3.0** - CSS Framework
- **Font Awesome 6.0.0** - Icons
- **Google Fonts (Lobster)** - Typography
- **Vanilla JavaScript** - Functionality

## Tính năng cần phát triển thêm

- [ ] Hệ thống đăng nhập/đăng ký
- [ ] Giỏ hàng thực tế
- [ ] Thanh toán online
- [ ] Quản lý đơn hàng
- [ ] Admin panel
- [ ] Backend API
- [ ] Database integration
- [ ] Email notifications
- [ ] Reviews và ratings thực tế

## Responsive Design

Website được thiết kế responsive cho:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Liên hệ

- Email: mr.nghiaenglish2230@littlefish.com
- Phone: 038 844 2230
- Address: 90 Đ.13, Tân Quy, Quận 7, TP.HCM
