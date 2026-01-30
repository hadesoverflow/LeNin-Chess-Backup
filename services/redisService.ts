import { Redis } from '@upstash/redis';

// Initialize Redis client from Upstash
// Use import.meta.env for Vite
const redisUrl = import.meta.env.VITE_UPSTASH_REDIS_REST_URL;
const redisToken = import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN;

const redis = new Redis({
  url: redisUrl || '',
  token: redisToken || '',
});

console.log('[RedisService] Initialized with URL:', !!redisUrl, 'Token:', !!redisToken);

export class RedisService {
  private static instance: RedisService;
  
  private constructor() {}

  static getInstance(): RedisService {
    if (!RedisService.instance) {
      RedisService.instance = new RedisService();
    }
    return RedisService.instance;
  }

  /**
   * Save a room to Redis
   * Key format: room:{roomId}
   * Expires after 1 hour (3600 seconds)
   */
  async saveRoom(roomId: string, roomData: any): Promise<void> {
    try {
      await redis.setex(
        `room:${roomId}`,
        3600, // 1 hour expiration
        JSON.stringify(roomData)
      );
    } catch (error) {
      console.error('[Redis] Error saving room:', error);
      throw error;
    }
  }

  /**
   * Get a room from Redis
   */
  async getRoom(roomId: string): Promise<any | null> {
    try {
      const data = await redis.get(`room:${roomId}`);
      return data ? JSON.parse(data as string) : null;
    } catch (error) {
      console.error('[Redis] Error getting room:', error);
      throw error;
    }
  }

  /**
   * Delete a room from Redis
   */
  async deleteRoom(roomId: string): Promise<void> {
    try {
      await redis.del(`room:${roomId}`);
    } catch (error) {
      console.error('[Redis] Error deleting room:', error);
      throw error;
    }
  }

  /**
   * Check if a room exists
   */
  async roomExists(roomId: string): Promise<boolean> {
    try {
      const exists = await redis.exists(`room:${roomId}`);
      return exists === 1;
    } catch (error) {
      console.error('[Redis] Error checking room existence:', error);
      throw error;
    }
  }

  /**
   * Update a room (merge with existing data)
   */
  async updateRoom(roomId: string, updates: any): Promise<any> {
    try {
      const existing = await this.getRoom(roomId);
      if (!existing) {
        throw new Error('Room not found');
      }
      
      const updated = { ...existing, ...updates };
      await this.saveRoom(roomId, updated);
      return updated;
    } catch (error) {
      console.error('[Redis] Error updating room:', error);
      throw error;
    }
  }

  /**
   * Add a session to a room
   */
  async addSessionToRoom(roomId: string, session: any): Promise<any> {
    try {
      const room = await this.getRoom(roomId);
      if (!room) {
        throw new Error('Room not found');
      }
      
      // Check if room is full (max 6 players)
      if (room.sessions.length >= 6) {
        throw new Error('Room is full');
      }
      
      // Check if game already started
      if (room.gameState) {
        throw new Error('Game already started');
      }
      
      room.sessions.push(session);
      await this.saveRoom(roomId, room);
      return room;
    } catch (error) {
      console.error('[Redis] Error adding session to room:', error);
      throw error;
    }
  }

  /**
   * Remove a bot from a room
   */
  async removeBotFromRoom(roomId: string, botSessionId: string): Promise<any> {
    try {
      const room = await this.getRoom(roomId);
      if (!room) {
        throw new Error('Room not found');
      }
      
      const botIndex = room.sessions.findIndex(
        (s: any) => s.id === botSessionId && s.isBot
      );
      
      if (botIndex > -1) {
        room.sessions.splice(botIndex, 1);
        await this.saveRoom(roomId, room);
      }
      
      return room;
    } catch (error) {
      console.error('[Redis] Error removing bot from room:', error);
      throw error;
    }
  }

  /**
   * Add a bot to a room
   */
  async addBotToRoom(roomId: string, botSession: any): Promise<any> {
    try {
      const room = await this.getRoom(roomId);
      if (!room) {
        throw new Error('Room not found');
      }
      
      if (room.sessions.length >= 6) {
        throw new Error('Room is full');
      }
      
      room.sessions.push(botSession);
      await this.saveRoom(roomId, room);
      return room;
    } catch (error) {
      console.error('[Redis] Error adding bot to room:', error);
      throw error;
    }
  }

  /**
   * Update game state for a room
   */
  async updateGameState(roomId: string, gameState: any): Promise<void> {
    try {
      const room = await this.getRoom(roomId);
      if (!room) {
        throw new Error('Room not found');
      }
      
      room.gameState = gameState;
      await this.saveRoom(roomId, room);
    } catch (error) {
      console.error('[Redis] Error updating game state:', error);
      throw error;
    }
  }

  /**
   * Cleanup expired rooms (manual trigger, usually not needed with TTL)
   */
  async cleanupExpiredRooms(): Promise<void> {
    try {
      console.log('[Redis] Cleanup triggered (TTL handles expiration automatically)');
    } catch (error) {
      console.error('[Redis] Error during cleanup:', error);
      throw error;
    }
  }
}

export const redisService = RedisService.getInstance();
