# Hướng Dẫn Setup Upstash Redis cho LeNin Chess

Để chơi cùng bạn bè online (deploy lên Vercel), bạn cần setup **Upstash Redis** để lưu trữ dữ liệu phòng chơi.

## 🚀 Các Bước Setup

### 1. Tạo Upstash Redis Database

1. Truy cập [https://console.upstash.com](https://console.upstash.com)
2. Đăng ký tài khoản (miễn phí)
3. Tạo một **Redis database** mới:
   - Nhấn "Create Database"
   - Chọn region (chọn gần khu vực của bạn)
   - Nhấn "Create"

### 2. Lấy Credentials

1. Mở database vừa tạo
2. Tìm tab **"REST API"**
3. Copy 2 thông tin này:
   - `UPSTASH_REDIS_REST_URL` - URL của Redis
   - `UPSTASH_REDIS_REST_TOKEN` - Access token

### 3. Setup Local Development

1. Tạo file `.env.local` ở root project:
```bash
VITE_UPSTASH_REDIS_REST_URL=your_url_here
VITE_UPSTASH_REDIS_REST_TOKEN=your_token_here
```

2. Chạy local:
```bash
npm install
npm run dev
```

### 4. Deploy lên Vercel

1. **Kết nối GitHub repository** với Vercel
2. **Thêm Environment Variables** trong Vercel Project Settings:
   - `VITE_UPSTASH_REDIS_REST_URL` = your_url_here
   - `VITE_UPSTASH_REDIS_REST_TOKEN` = your_token_here
3. **Deploy** - Vercel sẽ tự động build và deploy

## ✅ Kiểm Tra Xem Có Hoạt Động Không

Khi bạn deploy lên Vercel:

1. **Người 1 (Chủ phòng)**: 
   - Truy cập app
   - Chọn "Tạo Phòng"
   - Copy mã phòng (VD: ABC123)

2. **Người 2-4 (Bạn bè)**:
   - Truy cập cùng URL
   - Chọn "Tham Gia Phòng"
   - Nhập mã phòng
   - Tham gia được = Redis hoạt động! ✅

## 🆓 Pricing

Upstash Redis có **tier miễn phí**:
- 10,000 commands/ngày
- Đủ cho 4 người chơi cùng lúc

## 📝 Ghi Chú

- **Local Development**: Nếu không setup Redis, app sẽ sử dụng in-memory storage (chỉ chơi local được)
- **Production (Vercel)**: Bắt buộc phải có Redis để multiple users có thể chơi cùng nhau
- **TTL**: Phòng chơi sẽ tự động xoá sau 1 giờ không hoạt động

## ❓ Troubleshooting

### Lỗi "Phòng không tồn tại"
- Kiểm tra mã phòng (phải chính xác)
- Chắc chắn mã phòng được copy đúng
- Phòng có thể đã hết hạn (>1 giờ)

### Dữ liệu mất khi refresh
- Chắc chắn Redis URL và token đã được thêm vào Vercel env
- Kiểm tra trong Vercel Deployment Logs

### Still not working?
- Đọc Vercel deployment logs
- Kiểm tra Redis dashboard trên Upstash để xem request có được gửi không
