import type { Room } from '../types';

/**
 * Abstract storage service that can work with both in-memory and Redis
 */
export class StorageService {
  private rooms: Map<string, Room> = new Map();
  private useRedis: boolean = false;
  private redisService: any = null;

  constructor() {
    // Check if Redis is available (using Vite env variables)
    const hasRedisUrl = import.meta.env.VITE_UPSTASH_REDIS_REST_URL;
    const hasRedisToken = import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN;
    
    this.useRedis = !!(hasRedisUrl && hasRedisToken);

    if (this.useRedis) {
      try {
        const { redisService } = require('./redisService');
        this.redisService = redisService;
        console.log('[Storage] Using Redis backend');
      } catch (error) {
        console.warn('[Storage] Redis not available, falling back to in-memory');
        this.useRedis = false;
      }
    } else {
      console.log('[Storage] Using in-memory backend');
    }
  }

  /**
   * Save a room
   */
  async saveRoom(room: Room): Promise<void> {
    if (this.useRedis && this.redisService) {
      await this.redisService.saveRoom(room.id, room);
    } else {
      this.rooms.set(room.id, room);
    }
  }

  /**
   * Get a room
   */
  async getRoom(roomId: string): Promise<Room | null> {
    if (this.useRedis && this.redisService) {
      return await this.redisService.getRoom(roomId);
    } else {
      return this.rooms.get(roomId) || null;
    }
  }

  /**
   * Delete a room
   */
  async deleteRoom(roomId: string): Promise<void> {
    if (this.useRedis && this.redisService) {
      await this.redisService.deleteRoom(roomId);
    } else {
      this.rooms.delete(roomId);
    }
  }

  /**
   * Check if room exists
   */
  async roomExists(roomId: string): Promise<boolean> {
    if (this.useRedis && this.redisService) {
      return await this.redisService.roomExists(roomId);
    } else {
      return this.rooms.has(roomId);
    }
  }

  /**
   * Update a room
   */
  async updateRoom(roomId: string, updates: Partial<Room>): Promise<Room> {
    const room = await this.getRoom(roomId);
    if (!room) {
      throw new Error('Room not found');
    }

    const updated = { ...room, ...updates };
    await this.saveRoom(updated);
    return updated;
  }
}

export const storageService = new StorageService();
