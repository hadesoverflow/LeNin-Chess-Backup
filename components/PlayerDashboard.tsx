import React from 'react';
import type { Player } from '../types';

interface PlayerDashboardProps {
    players: Player[];
    currentPlayerId: number;
    kpChanges: { [key: number]: number | null };
}

const PlayerDashboard: React.FC<PlayerDashboardProps> = ({ players, currentPlayerId, kpChanges }) => {
    return (
        <div className="glass-panel p-4 flex flex-col gap-4 max-h-full overflow-y-auto">
            <h3 className="text-xl font-display font-bold text-center text-soviet-gold border-b border-stone-600 pb-2 mb-2 uppercase tracking-wider">
                Các Nhà Lý Luận
            </h3>

            {players.map((player) => {
                const isCurrent = player.id === currentPlayerId;
                const kpChange = kpChanges[player.id];
                const rankColor = player.isEliminated ? 'grayscale opacity-50' : '';

                return (
                    <div
                        key={player.id}
                        className={`
              relative
              flex items-center gap-3 p-3 rounded-lg border transition-all duration-300
              ${isCurrent
                                ? 'bg-soviet-red/20 border-soviet-gold shadow-[0_0_15px_rgba(185,28,28,0.3)] scale-105 z-10'
                                : 'bg-stone-800/40 border-stone-700/50 hover:bg-stone-700/50'
                            }
              ${rankColor}
            `}
                    >
                        {/* Avatar Circle */}
                        <div className={`
              w-12 h-12 rounded-full overflow-hidden border-2 shadow-sm shrink-0
              ${isCurrent ? 'border-soviet-gold' : 'border-stone-500'}
            `}>
                            <img src={player.characterImg} alt={player.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Info */}
                        <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-center mb-1">
                                <span className={`font-bold truncate ${isCurrent ? 'text-soviet-gold' : 'text-stone-300'}`}>
                                    {player.name}
                                </span>
                                {player.isBot && <span className="text-[10px] bg-stone-600 text-stone-300 px-1.5 py-0.5 rounded uppercase">Bot</span>}
                            </div>

                            <div className="flex items-center gap-2">
                                {/* KP Counter */}
                                <div className="flex items-center gap-1 bg-black/30 px-2 py-0.5 rounded text-xs font-mono text-yellow-500/90 border border-yellow-900/30">
                                    <span>★</span>
                                    <span>{player.kp} KP</span>
                                </div>
                            </div>
                        </div>

                        {/* Status Indicators */}
                        {player.isEliminated && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg backdrop-blur-[1px]">
                                <span className="text-red-500 font-bold uppercase rotate-12 border-2 border-red-500 px-2 py-1 mask-grunge">Đã Loại</span>
                            </div>
                        )}

                        {/* KP Change Floating Text */}
                        {kpChange !== undefined && kpChange !== 0 && (
                            <div
                                key={Date.now()} // Force re-render for animation
                                className={`
                  absolute right-2 top-0 font-bold text-lg animate-kp-feedback pointer-events-none
                  ${kpChange > 0 ? 'text-green-400' : 'text-red-400'}
                `}
                                style={{ textShadow: '0 1px 2px black' }}
                            >
                                {kpChange > 0 ? '+' : ''}{kpChange}
                            </div>
                        )}

                        {player.cards && player.cards.length > 0 && !player.isEliminated && (
                            <div className="absolute -bottom-2 right-2 flex -space-x-2">
                                {player.cards.map(card => (
                                    <div key={card.id} className="w-6 h-6 rounded-full bg-stone-800 border border-stone-600 flex items-center justify-center text-[10px] shadow-sm" title={card.description}>
                                        {/* Assuming card icons or initials could go here, treating as small dot for now */}
                                        <span className="text-stone-300">🃏</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default PlayerDashboard;