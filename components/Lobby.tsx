import React, { useState } from 'react';
import type { Room, Session } from '../types';
import { PLAYER_COLORS } from '../constants';
import { gameService } from '../services/gameService';

interface LobbyProps {
  room: Room;
  session: Session;
  onStartGame: () => void;
  onBack: () => void;
}

const Lobby: React.FC<LobbyProps> = ({ room, session, onStartGame, onBack }) => {
    const isHost = session.id === room.hostId;
    const canStart = room.sessions.length >= 1;
    const [copied, setCopied] = useState(false);

    const handleCopyCode = () => {
        navigator.clipboard.writeText(room.id);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    
    const handleAddBot = async () => {
        if (isHost) {
            await gameService.addBot(room.id, session.id);
        }
    }

    const handleRemoveBot = async (botSessionId: string) => {
        if (isHost) {
            await gameService.removeBot(room.id, session.id, botSessionId);
        }
    }

    const roomFullness = room.sessions.length;
    const slotsLeft = 4 - roomFullness;
    const roomStatusMessage = roomFullness === 4 
        ? '🔒 Phòng đầy - Chỉ chủ phòng có thể bắt đầu'
        : roomFullness === 1
        ? '👥 Cần thêm 3 người để chơi với 4 người'
        : `👥 Cần thêm ${slotsLeft} người để đầy phòng`;

    return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-[#e0cdaf]/80 p-8 rounded-xl shadow-2xl border-2 border-yellow-700/60 backdrop-blur-sm w-full max-w-md">
        <h1 className="font-display text-5xl text-[#8B4513] text-center mb-4" style={{ textShadow: '1px 1px #fdf6e3' }}>
          Phòng Chờ
        </h1>
        
        <div className="text-center mb-6">
            <p className="text-stone-700 text-lg font-semibold">Mã phòng của bạn:</p>
            <div className="bg-white/50 my-3 p-4 rounded-lg flex items-center justify-center gap-3 border-2 border-yellow-600/50">
                <p className="font-mono text-4xl tracking-widest text-blue-800">{room.id}</p>
                <button 
                    onClick={handleCopyCode} 
                    className={`text-sm font-bold px-3 py-2 rounded transition-all ${
                        copied 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                    }`}
                >
                    {copied ? '✓ Đã sao chép' : 'Sao chép'}
                </button>
            </div>
            <p className="text-sm text-stone-700 font-medium">Gửi mã phòng này cho bạn bè để họ tham gia!</p>
        </div>

        {/* Room Status */}
        <div className="mb-6 p-3 bg-blue-100 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 font-semibold">{roomStatusMessage}</p>
        </div>

        <div className="mb-6">
            <h2 className="text-2xl font-bold text-stone-800 mb-3 text-center border-t-2 border-b-2 py-2 border-yellow-700/50">
                Người chơi ({room.sessions.length}/4)
            </h2>
            <ul className="space-y-3">
                {room.sessions.map((player, index) => (
                    <li key={player.id} className="bg-white/60 p-3 rounded-lg text-lg font-semibold flex items-center shadow" style={{ borderLeft: `6px solid ${PLAYER_COLORS[index]}`}}>
                        <img 
                            src={player.characterImg} 
                            alt={player.name} 
                            className="w-12 h-12 rounded-full mr-4 bg-yellow-100 border-2 border-yellow-700/50 object-cover" 
                            loading="lazy"
                            onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src =
                                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="100%" height="100%" fill="%23fef3c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24">?</text></svg>';
                            }}
                        />
                        <span className="text-stone-800">{player.name}</span>
                        <div className="ml-auto flex items-center gap-3">
                            {player.isBot && <span className="text-xs font-bold bg-blue-500 text-white px-2 py-1 rounded">BOT</span>}
                            {player.id === room.hostId && <span className="text-xs font-bold bg-yellow-500 text-white px-2 py-1 rounded">👑 Chủ phòng</span>}
                            {isHost && player.isBot && (
                                <button 
                                    onClick={() => handleRemoveBot(player.id)} 
                                    className="text-xs font-bold bg-red-500 text-white w-6 h-6 rounded-full hover:bg-red-600 transition-colors"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
             {isHost && room.sessions.length < 4 && (
                <button 
                    onClick={handleAddBot} 
                    className="w-full mt-4 bg-green-600 text-white font-semibold py-3 px-4 rounded-lg shadow hover:bg-green-700 transition-all transform hover:scale-105"
                >
                    + Thêm Bot
                </button>
            )}
        </div>
        
        <div className="mt-6 space-y-4">
            {isHost && (
                <button
                    onClick={onStartGame}
                    disabled={!canStart}
                    className="w-full bg-red-700 text-white font-bold py-4 px-4 rounded-lg shadow-lg hover:bg-red-800 transition-all text-xl transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {canStart ? '🎮 Bắt Đầu!' : '⏳ Chờ người chơi...'}
                </button>
            )}
            {!isHost && (
                <div className="text-center p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-stone-700 font-semibold text-lg">⏱️ Đang chờ chủ phòng bắt đầu ván đấu...</p>
                </div>
            )}
            <button
                onClick={onBack}
                className="w-full bg-gray-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all text-lg transform hover:scale-105"
            >
                ← Quay Lại
            </button>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
