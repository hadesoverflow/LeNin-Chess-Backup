import React from 'react';

interface PlayerPieceProps {
    characterImg: string;
    top: number;
    left: number;
    width: number;
    height: number;
    isCurrent: boolean;
    offsetIndex: number;
    totalOnTile: number;
    isBeingAttacked?: boolean;
    animationDuration?: number;
}

const PlayerPiece: React.FC<PlayerPieceProps> = ({ characterImg, top, left, width, height, isCurrent, offsetIndex, totalOnTile, isBeingAttacked, animationDuration = 300 }) => {

    // Calculate center position of the tile
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate offset if multiple pieces are on the same tile
    let offsetX = 0;
    let offsetY = 0;
    if (totalOnTile > 1) {
        const columns = totalOnTile <= 2 ? totalOnTile : 2;
        const col = offsetIndex % columns;
        const row = Math.floor(offsetIndex / columns);
        const spacing = 24; // spacing between pieces
        offsetX = (col - (columns - 1) / 2) * spacing;
        offsetY = (row - (Math.ceil(totalOnTile / columns) - 1) / 2) * spacing;
    }

    return (
        <div
            className={`absolute w-12 h-12 ease-in-out z-10 transition-all duration-300 ${isCurrent ? 'animate-pulse-glow z-20 scale-110' : ''}`}
            style={{
                // Position at center of tile, then offset by half of piece size to truly center it
                top: `${centerY + offsetY}px`,
                left: `${centerX + offsetX}px`,
                transform: 'translate(-50%, -50%)',
                transition: `all ${animationDuration}ms`,
            }}
        >
            <div className={`
                ${isBeingAttacked ? 'animate-shake' : ''} 
                rounded-full border-2 border-white/80 shadow-[0_4px_6px_rgba(0,0,0,0.5)] overflow-hidden
            `}>
                <img src={characterImg} alt="Player piece" className="w-full h-full object-cover" />
            </div>
            {/* Small indicator triangle for current player */}
            {isCurrent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-vn-gold animate-bounce"></div>
            )}
        </div>
    );
};

export default PlayerPiece;