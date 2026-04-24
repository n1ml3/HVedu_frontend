# HVedu - HV Education

Website chính thức của HV Education - Trường đào tạo nghề với phương châm "Học Thật - Làm Giỏi".

## Giới thiệu dự án

HVedu là một nền tảng website giới thiệu về các chương trình đào tạo, tầm nhìn, sứ mệnh và các hoạt động ngoại khóa của HV Education. Website được thiết kế hiện đại, tối ưu trải nghiệm người dùng trên nhiều thiết bị (Responsive Design) và cung cấp công cụ đăng ký tuyển sinh trực tuyến nhanh chóng.

## Các tính năng chính

1. Trang chủ: Cung cấp cái nhìn tổng quan về nhà trường, các thống kê nổi bật và lý do sinh viên nên chọn HVedu.
2. Giới thiệu: Trình bày chi tiết về lịch sử hình thành, tầm nhìn đến năm 2028 và sứ mệnh giáo dục của nhà trường.
3. Chương trình đào tạo: Danh sách các ngành nghề đào tạo hiện đại, tích hợp giữa lý thuyết và thực hành.
4. Tin hoạt động: Cập nhật các tin tức, sự kiện và hoạt động ngoại khóa mới nhất.
5. Đăng ký tuyển sinh: Form đăng ký trực tuyến cho phép thí sinh gửi thông tin tư vấn một cách dễ dàng.
6. Liên hệ: Thông tin liên lạc chi tiết và hình ảnh về cơ sở vật chất.

## Cấu trúc thư mục

- assets: Lưu trữ các tệp tin đa phương tiện như hình ảnh, icons và logos sử dụng trong toàn bộ website.
- components: Chứa các thành phần HTML tái sử dụng như Header (Navbar) và Footer.
- pages: Chứa các tệp tin HTML cho từng trang nội dung chi tiết (Giới thiệu, Đào tạo, Tin tức, Tuyển dụng, Liên hệ).
- styles: Hệ thống các tệp tin CSS được tổ chức theo từng trang và thành phần để dễ dàng quản lý và bảo trì.
- index.html: Trang chủ chính của website.

## Công nghệ sử dụng

- HTML5: Cấu trúc nội dung website.
- CSS3: Định dạng giao diện với Vanilla CSS và CSS Variables để quản lý hệ thống màu sắc, font chữ.
- Bootstrap 5: Khung CSS hỗ trợ thiết kế layout và các thành phần responsive.
- jQuery: Hỗ trợ tương tác người dùng và đọc dữ liệu cho các thành phần dùng chung (Navbar, Footer).

## Hướng dẫn sử dụng

Website này là một project frontend tĩnh. Để xem website, bạn chỉ cần mở tệp tin index.html bằng bất kỳ trình duyệt hiện đại nào.

Lưu ý: Do website sử dụng jQuery để load các thành phần từ thư mục components, bạn nên chạy website thông qua một local server (như Live Server trong VS Code) để tránh các lỗi về Cross-Origin (CORS) khi mở tệp tin trực tiếp từ ổ đĩa.
