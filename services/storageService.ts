import type { Room } from '../types';
import { redisService } from './redisService';

/**
 * Abstract storage service that can work with both in-memory and Redis
 */
export class StorageService {
  private rooms: Map<string, Room> = new Map();
  private useRedis: boolean = false;

  constructor() {
    // Check if Redis is available (using Vite env variables)
    const hasRedisUrl = import.meta.env.VITE_UPSTASH_REDIS_REST_URL;
    const hasRedisToken = import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN;
    
    this.useRedis = !!(hasRedisUrl && hasRedisToken);

    if (this.useRedis) {
      console.log('[Storage] Using Redis backend');
    } else {
      console.log('[Storage] Using in-memory backend');
    }
  }

  /**
   * Save a room
   */
  async saveRoom(room: Room): Promise<void> {
    if (this.useRedis) {
      try {
        await redisService.saveRoom(room.id, room);
      } catch (error) {
        console.error('[Storage] Failed to save to Redis, using in-memory:', error);
        this.rooms.set(room.id, room);
      }
    } else {
      this.rooms.set(room.id, room);
    }
  }

  /**
   * Get a room
   */
  async getRoom(roomId: string): Promise<Room | null> {
    if (this.useRedis) {
      try {
        const room = await redisService.getRoom(roomId);
        if (room) {
          return room;
        }
      } catch (error) {
        console.error('[Storage] Failed to get from Redis, checking in-memory:', error);
      }
    }
    return this.rooms.get(roomId) || null;
  }

  /**
   * Delete a room
   */
  async deleteRoom(roomId: string): Promise<void> {
    if (this.useRedis) {
      try {
        await redisService.deleteRoom(roomId);
      } catch (error) {
        console.error('[Storage] Failed to delete from Redis:', error);
        this.rooms.delete(roomId);
      }
    } else {
      this.rooms.delete(roomId);
    }
  }

  /**
   * Check if room exists
   */
  async roomExists(roomId: string): Promise<boolean> {
    if (this.useRedis) {
      try {
        return await redisService.roomExists(roomId);
      } catch (error) {
        console.error('[Storage] Failed to check Redis, checking in-memory:', error);
      }
    }
    return this.rooms.has(roomId);
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
