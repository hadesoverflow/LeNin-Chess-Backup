/**
 * Debug helper to check storage configuration
 */
export function debugStorageSetup() {
  const hasRedisUrl = import.meta.env.VITE_UPSTASH_REDIS_REST_URL;
  const hasRedisToken = import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN;

  console.log('[DEBUG] Storage Setup Check:');
  console.log('[DEBUG] Redis URL exists:', !!hasRedisUrl);
  console.log('[DEBUG] Redis Token exists:', !!hasRedisToken);
  console.log('[DEBUG] Redis URL:', hasRedisUrl ? hasRedisUrl.substring(0, 20) + '...' : 'NOT SET');
  
  if (!hasRedisUrl || !hasRedisToken) {
    console.warn('[DEBUG] Redis is NOT configured. Using in-memory storage.');
    console.warn('[DEBUG] To use Redis on Vercel, add these env vars:');
    console.warn('[DEBUG] - VITE_UPSTASH_REDIS_REST_URL');
    console.warn('[DEBUG] - VITE_UPSTASH_REDIS_REST_TOKEN');
    return false;
  }
  
  console.log('[DEBUG] Redis is properly configured');
  return true;
}
