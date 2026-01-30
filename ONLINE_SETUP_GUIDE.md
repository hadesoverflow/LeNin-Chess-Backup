# Hướng Dẫn Cấu Hình Database Online (Bolt.new / Vercel)

Để chơi Online nhiều người, game cần một nơi để lưu trạng thái bàn cờ và đồng bộ giữa các người chơi. Code hiện tại sử dụng **Upstash Redis** vì nó cực kỳ nhanh và phù hợp cho game realtime.

Bạn **KHÔNG CẦN** tạo database SQL phức tạp trên Bolt. Chỉ cần làm theo các bước đơn giản sau:

## 1. Tạo Database Redis (Miễn phí 100%)

1. Truy cập [-> Upstash Console <-](https://console.upstash.com/).
2. Đăng nhập (bằng GitHub hoặc Google).
3. Bấm nút xanh **Create Database**.
4. Đặt tên (ví dụ: `lenin-chess-db`), chọn Region gần Việt Nam nhất (Singapore hoặc Japan) để game nhanh.
5. Bấm **Create**.

## 2. Lấy Key Kết Nối

Sau khi tạo xong, cuộn xuống phần **REST API**:
1. Tìm nút **.env**.
2. Copy 2 dòng trông như sau:
   ```env
   UPSTASH_REDIS_REST_URL="https://crazy-donkey-45678.upstash.io"
   UPSTASH_REDIS_REST_TOKEN="AyQbASQgND..."
   ```

## 3. Cấu Hình Vào Bolt.new (Hoặc Local)

1. Quay lại trang Bolt.new của bạn, mở phần **Settings** -> **Environment Variables**.
2. Thêm 2 biến này vào (nhớ thêm tiền tố `VITE_`):

   - **Name**: `VITE_UPSTASH_REDIS_REST_URL`
   - **Value**: (Dán URL của bạn vào)

   - **Name**: `VITE_UPSTASH_REDIS_REST_TOKEN`
   - **Value**: (Dán Token dài ngoằng vào)

3. Lưu lại và Restart Server (nếu làm local thì chạy lại `npm run dev`).

## 4. Kiểm Tra

1. Mở game, chọn **"Tạo Phòng Online"**.
2. Nếu vào được sảnh chờ (Lobby) mà không báo lỗi -> **Thành công!** 🎉
3. Bạn có thể copy mã phòng gửi cho bạn bè để test cùng lúc.
