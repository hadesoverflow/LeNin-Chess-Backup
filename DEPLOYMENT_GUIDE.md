# 📱 Hướng Dẫn Deploy LeNin Chess với Upstash Redis

## 🎯 Tổng Quan

Ứng dụng chess của bạn đã được cập nhật để hoạt động online với tối đa 4 người chơi. Để deploy lên Vercel, bạn cần:

1. **Redis Database** (Upstash) - lưu trữ phòng chơi
2. **GitHub Repository** - kết nối với Vercel
3. **Vercel Account** - để deploy

## 📋 Các Bước Deploy

### Step 1: Chuẩn Bị Redis (5 phút)

1. Truy cập [upstash.com](https://upstash.com)
2. Đăng ký account (miễn phí)
3. Tạo Redis Database:
   - Chọn "Create Database"
   - Chọn region gần bạn
   - Nhấn "Create"
4. Vào tab "REST API" và copy:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### Step 2: Setup Local (5 phút)

```bash
# 1. Clone hoặc thêm .env.local
cp .env.example .env.local

# 2. Dán credentials vào .env.local
VITE_UPSTASH_REDIS_REST_URL=your_url
VITE_UPSTASH_REDIS_REST_TOKEN=your_token

# 3. Cài dependencies
npm install

# 4. Chạy local để test
npm run dev
```

### Step 3: Push lên GitHub

```bash
git add .
git commit -m "Add Redis support for online multiplayer"
git push origin master
```

### Step 4: Deploy lên Vercel

**Cách 1: Dashboard Vercel (dễ nhất)**
1. Truy cập [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Điền Environment Variables:
   ```
   VITE_UPSTASH_REDIS_REST_URL=your_url
   VITE_UPSTASH_REDIS_REST_TOKEN=your_token
   ```
4. Nhấn "Deploy"

**Cách 2: Vercel CLI**
```bash
npm i -g vercel
vercel env add VITE_UPSTASH_REDIS_REST_URL
vercel env add VITE_UPSTASH_REDIS_REST_TOKEN
vercel deploy --prod
```

## 🎮 Test Online Play

Sau khi deploy:

1. **Người chủ phòng**:
   - Truy cập app trên Vercel
   - Chọn "Tạo Phòng"
   - Copy mã phòng (6 ký tự)
   - Gửi mã cho bạn bè

2. **Bạn bè tham gia**:
   - Truy cập cùng link Vercel
   - Chọn "Tham Gia Phòng"
   - Nhập mã phòng
   - Nhấn "Vào Phòng"

3. **Chủ phòng bắt đầu**:
   - Nhấn nút "Bắt Đầu!" khi tất cả sẵn sàng

## ✨ Các Tính Năng Mới

### Redis Storage
- ✅ Dữ liệu phòng được lưu trên Redis (không mất khi refresh)
- ✅ Hỗ trợ multiple users cùng lúc
- ✅ Phòng tự động xóa sau 1 giờ

### Enhanced UI
- ✅ Hiển thị trạng thái phòng rõ ràng
- ✅ Thông báo khi sao chép mã phòng
- ✅ Gợi ý số người cần thiết
- ✅ Error messages rõ ràng hơn

### Backward Compatible
- ✅ Local game vẫn hoạt động như cũ (không cần Redis)
- ✅ Nếu Redis không có, tự động fallback sang in-memory

## 🔧 Technical Details

### Thay Đổi Architecture

**Trước (In-Memory)**:
```
User 1 → Memory Map (Process 1) ✗ User 2 không thấy
User 2 → Memory Map (Process 2)
```

**Sau (Redis)**:
```
User 1 → Redis ← → User 2
User 3 → Redis ← → User 4
```

### Files Thêm Mới
- `/services/redisService.ts` - Redis client & operations
- `/services/storageService.ts` - Abstract storage layer
- `/REDIS_SETUP.md` - Setup guide
- `/DEPLOYMENT_GUIDE.md` - Deployment guide

### Files Sửa
- `/services/gameService.ts` - Async room operations
- `/App.tsx` - Async handlers
- `/package.json` - Added @upstash/redis

## 💾 Data Structure

Mỗi phòng được lưu như:
```json
{
  "id": "ABC123",
  "hostId": "session-uuid",
  "sessions": [
    { "id": "uuid1", "name": "Player 1", "characterImg": "...", "isBot": false },
    { "id": "uuid2", "name": "Player 2", "characterImg": "...", "isBot": false }
  ],
  "gameState": null
}
```

**TTL**: 3600 giây (1 giờ) - tự động xóa phòng

## 🚨 Troubleshooting

### "Phòng không tồn tại"
- Kiểm tra mã phòng có đúng không
- Phòng có thể đã hết hạn (>1 giờ)
- Redis token có thể hết hạn

### "Cannot read properties of undefined"
- Kiểm tra VITE_ prefix trong env variables
- Verify Vercel env variables đã được set

### "Redis connection failed"
- Kiểm tra Redis URL & token có đúng không
- Verify Upstash Redis database vẫn active

### Dữ liệu mất khi chuyển sang game
- Dữ liệu được lưu tự động khi bắt đầu game
- Kiểm tra Redis logs trên Upstash dashboard

## 📊 Pricing & Limits

**Upstash Free Tier**:
- 10,000 commands/day (đủ cho ~100 games/day)
- Unlimited databases
- 30-day data retention

**Vercel Free Tier**:
- Unlimited deployments
- 100GB bandwidth/month

## ❓ FAQ

**Q: Có cần thay đổi code không?**  
A: Không! Tất cả async operations đã được handle.

**Q: Local game vẫn hoạt động không?**  
A: Có! Nó sẽ sử dụng in-memory nếu Redis không có.

**Q: Bao nhiêu người có thể chơi cùng lúc?**  
A: Tối đa 4 người/phòng, số phòng không giới hạn.

**Q: Phòng tồn tại bao lâu?**  
A: 1 giờ từ lần cuối update. Hết hạn tự động xóa.

## 🎉 Ready to Deploy!

Bây giờ bạn đã sẵn sàng để:
1. Setup Redis
2. Push code lên GitHub
3. Deploy lên Vercel
4. Chơi cùng bạn bè online!

Happy gaming! 🎮
