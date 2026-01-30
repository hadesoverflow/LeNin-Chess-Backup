# Hướng dẫn Setup Upstash Redis cho LeNin Chess

## Vấn đề: "Phòng không tồn tại!"

Nếu bạn gặp lỗi "Phòng không tồn tại!" khi cố gắng join phòng, điều đó có nghĩa là:
- **Redis chưa được setup** hoặc
- **Environment variables chưa được thêm vào Vercel**

## Giải pháp

### 1. Tạo Upstash Redis Database

1. Truy cập [upstash.com](https://upstash.com)
2. Đăng nhập hoặc tạo tài khoản mới
3. Click **"Create Database"**
4. Chọn:
   - **Name**: `lenin-chess` (hoặc bất kỳ tên nào)
   - **Region**: Chọn region gần bạn nhất
   - Click **"Create"**

### 2. Lấy Credentials

Sau khi database được tạo:
1. Click vào database mới tạo
2. Tìm tab **"REST API"**
3. Copy các giá trị:
   - **UPSTASH_REDIS_REST_URL** (dòng URL)
   - **UPSTASH_REDIS_REST_TOKEN** (dòng Token)

### 3. Local Development Setup

```bash
# 1. Copy file env template
cp .env.example .env.local

# 2. Mở .env.local và dán credentials:
VITE_UPSTASH_REDIS_REST_URL=https://...
VITE_UPSTASH_REDIS_REST_TOKEN=...

# 3. Cài dependencies
npm install

# 4. Chạy dev server
npm run dev
```

### 4. Deploy trên Vercel

#### Option A: Sử dụng Vercel CLI
```bash
vercel env add VITE_UPSTASH_REDIS_REST_URL
# Dán: https://...

vercel env add VITE_UPSTASH_REDIS_REST_TOKEN
# Dán: ...

vercel deploy
```

#### Option B: Thông qua Vercel Dashboard
1. Vào project settings trên vercel.com
2. Tab **"Environment Variables"**
3. Thêm 2 biến:
   - `VITE_UPSTASH_REDIS_REST_URL` = `https://...`
   - `VITE_UPSTASH_REDIS_REST_TOKEN` = `...`
4. Redeploy project

### 5. Test Kết Nối

Khi app mở, mở **Console** (F12) và xem:
- Nếu thấy `[Storage] Using Redis backend` → ✅ Redis đang chạy
- Nếu thấy `[Storage] Using in-memory backend` → ⚠️ Redis không được setup

## Troubleshooting

### Lỗi: "Phòng không tồn tại" trên Vercel nhưng hoạt động local?
- Kiểm tra Environment Variables trên Vercel có đúng không
- Redeploy sau khi thêm env vars
- Chờ 1 phút cho Vercel cập nhật

### Redis Free Tier Giới Hạn?
- **10,000 commands/day** (miễn phí)
- Mỗi game ~ 50-100 commands
- Đủ cho ~100 games/ngày

### Phòng Tự Động Xóa?
- Redis có **TTL 1 giờ** cho mỗi phòng
- Phòng sẽ tự động xóa nếu không được cập nhật trong 1 giờ

## Tối Đa 6 Người Chơi

App hiện hỗ trợ **6 người chơi** (bạn + 5 bạn bè):
- Tạo phòng với 0-5 Bot
- Bạn bè join và replace Bot
- Max players: 6

## Local Game (Không Cần Redis)

Nếu chỉ chơi **Single Player** hoặc **Local Game**:
- Không cần setup Redis
- Chơi offline hoàn toàn bình thường
- Dữ liệu chỉ lưu trong memory

---

**Cần giúp?** Check console logs (F12) để xem storage backend nào đang được dùng.
