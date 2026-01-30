# Debug Guide - Redis Storage Issues

## Problem
When trying to join a room created on Vercel, you get "Phòng không tồn tại!" (Room does not exist).

## Root Causes Fixed

### 1. **Redis Service Initialization Bug** (NOW FIXED)
- **Issue**: `storageService.ts` was trying to import `module.redisService` but `redisService.ts` exports the **class**, not an instance
- **Fix**: Changed to directly import `redisService` instance which is exported as: `export const redisService = RedisService.getInstance();`

### 2. **Async Import Problem** (NOW FIXED)
- **Issue**: Dynamic import was asynchronous, but `saveRoom()` and `getRoom()` were called immediately
- **Fix**: Changed to synchronous import at the top of the file

### 3. **Missing Error Handling** (NOW FIXED)
- **Issue**: No fallback when Redis fails
- **Fix**: Added try-catch blocks that fall back to in-memory storage if Redis has issues

## How to Debug Now

### Step 1: Open Browser DevTools
Press `F12` in your browser and go to the **Console** tab.

### Step 2: Watch These Debug Logs

When you **Create a Room**:
```
[v0] Creating room: AB12CD
[Storage] Using Redis backend
[RedisService] Initialized with URL: true Token: true
[v0] Saving room to storage: AB12CD
[v0] Room created successfully: AB12CD
```

When you **Join a Room**:
```
[v0] Attempting to join room: AB12CD
[v0] Room lookup result: Found
```

### Step 3: If Join Fails
You'll see:
```
[v0] Attempting to join room: AB12CD
[v0] Room lookup result: Not found
[v0] Room not found in Redis or local storage
```

This means:
- Redis credentials are NOT set (check environment variables)
- Room expired (TTL is 1 hour)
- Room ID was typed incorrectly

## Setup Checklist

### ✅ For Local Development
1. Copy `.env.example` to `.env.local`
2. Add your Upstash Redis credentials:
   ```
   VITE_UPSTASH_REDIS_REST_URL=https://...
   VITE_UPSTASH_REDIS_REST_TOKEN=...
   ```
3. Run `npm run dev`

### ✅ For Vercel Deployment
1. Go to Vercel Project Settings → Environment Variables
2. Add these two variables:
   - `VITE_UPSTASH_REDIS_REST_URL`
   - `VITE_UPSTASH_REDIS_REST_TOKEN`
3. Redeploy

## Expected Behavior

### If Redis is Configured
- Rooms are saved to Redis with 1-hour TTL
- Multiple browsers/devices can join the same room
- Rooms persist across page refreshes

### If Redis is NOT Configured
- Uses in-memory storage (same browser only)
- Rooms are lost on page refresh
- Can't join from different devices

## Console Output Key

- `[DEBUG]` - App startup configuration check
- `[Storage]` - Storage backend selection
- `[RedisService]` - Redis client initialization
- `[v0]` - Game flow (create/join room, save room)
- `[Redis]` - Redis operation details
