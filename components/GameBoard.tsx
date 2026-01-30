import React from 'react';
import { TILES } from '../constants';
import Tile from './Tile';
import type { Player, TileData, GameState } from '../types';
import PlayerPiece from './PlayerPiece';

interface GameBoardProps {
  children: React.ReactNode;
  highlightedTile: number | null;
  players: Player[];
  tilePositions: { [key: number]: { top: number; left: number; width: number; height: number; } };
  currentPlayerId: number;
  onTileClick: (tileData: TileData) => void;
  attackAnimation: GameState['attackAnimation'];
}

const TILE_POSITIONS: { [key: number]: { row: number; col: number } } = {
  1: { row: 11, col: 11 }, 2: { row: 11, col: 10 }, 3: { row: 11, col: 9 }, 4: { row: 11, col: 8 }, 5: { row: 11, col: 7 }, 6: { row: 11, col: 6 }, 7: { row: 11, col: 5 }, 8: { row: 11, col: 4 }, 9: { row: 11, col: 3 }, 10: { row: 11, col: 2 }, 11: { row: 11, col: 1 },
  12: { row: 10, col: 1 }, 13: { row: 9, col: 1 }, 14: { row: 8, col: 1 }, 15: { row: 7, col: 1 }, 16: { row: 6, col: 1 }, 17: { row: 5, col: 1 }, 18: { row: 4, col: 1 }, 19: { row: 3, col: 1 }, 20: { row: 2, col: 1 }, 21: { row: 1, col: 1 },
  22: { row: 1, col: 2 }, 23: { row: 1, col: 3 }, 24: { row: 1, col: 4 }, 25: { row: 1, col: 5 }, 26: { row: 1, col: 6 }, 27: { row: 1, col: 7 }, 28: { row: 1, col: 8 }, 29: { row: 1, col: 9 }, 30: { row: 1, col: 10 }, 31: { row: 1, col: 11 },
  32: { row: 2, col: 11 }, 33: { row: 3, col: 11 }, 34: { row: 4, col: 11 }, 35: { row: 5, col: 11 }, 36: { row: 6, col: 11 }, 37: { row: 7, col: 11 }, 38: { row: 8, col: 11 }, 39: { row: 9, col: 11 }, 40: { row: 10, col: 11 },
};

type TileOrientation = 'corner' | 'top' | 'bottom' | 'left' | 'right';

const getTileOrientation = (id: number): TileOrientation => {
  if ([1, 11, 21, 31].includes(id)) return 'corner';
  if (id > 1 && id < 11) return 'bottom';
  if (id > 11 && id < 21) return 'left';
  if (id > 21 && id < 31) return 'top';
  if (id > 31 && id <= 40) return 'right';
  return 'bottom'; // Default
};


const GameBoard = React.forwardRef<HTMLDivElement, GameBoardProps>(
  ({ children, highlightedTile, players, tilePositions, currentPlayerId, onTileClick, attackAnimation }, ref) => {

    const animatedPlayers = React.useMemo(() => {
      if (!attackAnimation || Object.keys(tilePositions).length === 0) {
        return players;
      }

      const { stage, attackerId, targetId, attackerOriginalPosition } = attackAnimation;
      const targetPlayer = players.find(p => p.id === targetId);

      if (stage === 'moving_to_target' || stage === 'impacting') {
        return players.map(p => {
          if (p.id === attackerId && targetPlayer) {
            // Temporarily move attacker to target's position
            return { ...p, position: targetPlayer.position };
          }
          return p;
        });
      }

      if (stage === 'attacker_returning') {
        return players.map(p => {
          if (p.id === attackerId) {
            // Temporarily move attacker back to original position for the animation
            return { ...p, position: attackerOriginalPosition };
          }
          return p;
        });
      }

      return players;

    }, [players, attackAnimation, tilePositions]);

    const activePlayers = React.useMemo(() => animatedPlayers.filter(p => !p.isEliminated), [animatedPlayers]);

    const playersByPosition = React.useMemo(() => {
      const groups: { [key: number]: Player[] } = {};
      activePlayers.forEach(p => {
        if (!groups[p.position]) {
          groups[p.position] = [];
        }
        groups[p.position].push(p);
      });
      return groups;
    }, [activePlayers]);

    const styleVars: React.CSSProperties = {
      ['--gap' as any]: '2px',
      ['--pad' as any]: '8px',
      ['--border' as any]: '4px',
      ['--boardH' as any]: 'min(98vw, 98vh, 1400px)',
      // Kích thước board vuông, chiều rộng bằng chiều cao
      width: 'var(--boardH)',
      height: 'var(--boardH)',
      // Chia layout thành 11 cột/dòng. 
      // Cột/dòng ngoài cùng (1.5fr) lớn hơn các cột/dòng bên trong (1fr)
      // để ô góc to hơn, ô cạnh thành hình chữ nhật.
      gridTemplateColumns: '1.5fr repeat(9, 1fr) 1.5fr',
      gridTemplateRows: '1.5fr repeat(9, 1fr) 1.5fr',
    };

    return (
      <div
        ref={ref}
        className="
          relative
          grid
          bg-wood-dark
          rounded-xl shadow-2xl
          border-[16px] border-wood-light
          transform-gpu
          mx-auto
          overflow-hidden
        "
        style={{
          ...styleVars,
          padding: 'var(--pad)',
          gap: 'var(--gap)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 0 100px rgba(0,0,0,0.5)',
          backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')"
        }}
      >
        {/* Decorative Corner Ornaments - Vietnamese Style */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-vn-gold rounded-tl-xl pointer-events-none z-20 opacity-70"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-vn-gold rounded-tr-xl pointer-events-none z-20 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-vn-gold rounded-bl-xl pointer-events-none z-20 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-vn-gold rounded-br-xl pointer-events-none z-20 opacity-70"></div>

        {TILES.map((tile) => {
          const pos = TILE_POSITIONS[tile.id];
          return (
            <div
              key={tile.id}
              data-tile-id={tile.id}
              className={`relative cursor-pointer transition-all duration-200 hover:brightness-110 group ${highlightedTile === tile.id ? 'animate-tile-highlight z-30' : 'z-10'}`}
              style={{ gridRow: pos.row, gridColumn: pos.col }}
              onClick={() => onTileClick(tile)}
            >
              <div className="absolute inset-0 group-hover:z-50">
                <Tile tileData={tile} orientation={getTileOrientation(tile.id)} />
              </div>
            </div>
          );
        })}

        {/* Trung tâm bàn cờ - Vietnamese Lacquer Style */}
        <div
          className="absolute flex items-center justify-center bg-lacquer-black rounded-xl border-4 border-vn-gold/60 shadow-inner"
          style={{
            inset: '13.5%',
            backgroundImage: `
              radial-gradient(circle at center, rgba(196, 30, 58, 0.15) 0%, transparent 60%),
              radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 80%)
            `,
            boxShadow: 'inset 0 0 80px rgba(0,0,0,0.9), 0 5px 20px rgba(0,0,0,0.5)'
          }}
        >
          {/* Bronze Drum Pattern - Center */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
            <svg width="70%" height="70%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              {/* Outer circle */}
              <circle cx="100" cy="100" r="95" fill="none" stroke="#D4AF37" strokeWidth="3" />
              {/* Inner concentric circles */}
              <circle cx="100" cy="100" r="75" fill="none" stroke="#D4AF37" strokeWidth="2" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="35" fill="none" stroke="#D4AF37" strokeWidth="1" />
              {/* Center sun */}
              <circle cx="100" cy="100" r="18" fill="#D4AF37" opacity="0.8" />
              {/* Sun rays */}
              {[...Array(16)].map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 30 * Math.cos((i * 22.5 * Math.PI) / 180)}
                  y2={100 + 30 * Math.sin((i * 22.5 * Math.PI) / 180)}
                  stroke="#D4AF37"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          {/* Center Pattern Border */}
          <div className="absolute inset-0 border-2 border-dashed border-vn-gold/20 rounded-lg m-4 pointer-events-none"></div>

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>

        {/* Quân cờ giữ theo tọa độ tuyệt đối */}
        <div className="absolute inset-0 pointer-events-none z-40">
          {Object.keys(tilePositions).length > 0 &&
            activePlayers.map((player) => {
              const pos = tilePositions[player.position];
              // Only render if we have valid position data
              if (!pos || pos.width === 0 || pos.height === 0) return null;

              const playersOnSameTile = playersByPosition[player.position] || [];
              const offsetIndex = playersOnSameTile.findIndex(p => p.id === player.id);
              const totalOnTile = playersOnSameTile.length;

              const isTargetBeingImpacted = attackAnimation?.stage === 'impacting' && player.id === attackAnimation.targetId;
              const isAttackerAnimating = attackAnimation && player.id === attackAnimation.attackerId && (attackAnimation.stage === 'moving_to_target' || attackAnimation.stage === 'attacker_returning');

              return (
                <PlayerPiece
                  key={player.id}
                  characterImg={player.characterImg}
                  top={pos.top}
                  left={pos.left}
                  width={pos.width}
                  height={pos.height}
                  isCurrent={player.id === currentPlayerId}
                  offsetIndex={offsetIndex}
                  totalOnTile={totalOnTile}
                  isBeingAttacked={isTargetBeingImpacted}
                  animationDuration={isAttackerAnimating ? 800 : 300}
                />
              );
            })}
        </div>
      </div>
    );
  }
);

export default GameBoard;