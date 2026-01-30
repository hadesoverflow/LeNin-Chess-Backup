import React from 'react';
import type { TileData } from '../types';
import { getGroupColors } from '../utils';

type TileOrientation = 'corner' | 'top' | 'bottom' | 'left' | 'right';

interface TileProps {
  tileData: TileData;
  orientation: TileOrientation;
}

/* --------- Corner --------- */
const CornerTile: React.FC<{ tileData: TileData }> = ({ tileData }) => {
  const nameParts = tileData.name.split(' ');
  const icon = nameParts.pop();
  const name = nameParts.join(' ');

  // Custom styling for specific corners
  const bg = tileData.type === 'start' ? 'bg-[#eecfa1]' :
    tileData.type === 'jail' ? 'bg-stone-300' :
      tileData.type === 'prison' ? 'bg-stone-800 text-white' :
        tileData.type === 'parking' ? 'bg-blue-100' : 'bg-[#e0cdaf]';

  return (
    <div className={`w-full h-full ${bg} border-[3px] border-stone-700 relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] group transition-colors duration-300`}>
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center -rotate-45 p-2">
        {tileData.type === 'start' ? (
          <>
            <span className="font-display font-bold uppercase text-sm leading-tight text-red-800 drop-shadow-sm tracking-widest mb-1">BẮT ĐẦU</span>
            <div className="text-5xl text-red-600 animate-pulse">🚩</div>
            <span className="font-bold text-red-900 text-[11px] mt-1">NHẬN 200 KP</span>
          </>
        ) : (
          <>
            <span className={`font-bold uppercase text-[11px] leading-tight whitespace-normal break-words tracking-wide ${tileData.type === 'prison' ? 'text-stone-300' : 'text-stone-800'}`}>
              {name}
            </span>
            <span className="text-4xl my-1 leading-none drop-shadow-md filter transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
          </>
        )}
      </div>
    </div>
  );
};

/* --------- Jail --------- */
const JailTile: React.FC<{ tileData: TileData }> = ({ tileData }) => {
  const nameParts = tileData.name.split(' ');
  const icon = nameParts.pop();
  return (
    <div className="w-full h-full bg-stone-900 border-[3px] border-stone-600 flex flex-col items-center justify-between p-1 text-red-100 relative overflow-hidden shadow-inner">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>

      {/* Bars texture */}
      <div className="absolute inset-0 flex space-x-2 justify-center opacity-40 pointer-events-none">
        {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-full bg-stone-500 shadow-xl" />)}
      </div>

      <span className="font-bold text-[9px] uppercase text-center leading-tight z-10 text-red-500 mt-1 tracking-widest drop-shadow-md">VÙNG LÃNG QUÊN</span>
      <span className="text-4xl leading-none z-10 text-stone-300 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">{icon}</span>
    </div>
  );
};

/* --------- Standard --------- */
const StandardTile: React.FC<{
  tileData: TileData;
  orientation: 'top' | 'bottom' | 'left' | 'right';
}> = ({ tileData, orientation }) => {
  const nameParts = tileData.name.split(' ');
  const icon = nameParts.pop();
  const name = nameParts.join(' ');
  const colors = getGroupColors(tileData.group);

  // Consider all non-corner/special tiles as having a "property" strip for uniformity, 
  // or distinguish Action vs Property tiles.
  // Let's give ALL standard tiles a color strip for visual consistency in the grid.
  const hasColorStrip = true;

  const Content = () => (
    <div className={`w-full h-full flex flex-col relative bg-[#fdfaf5] overflow-hidden`}>
      {/* Property Color Header */}
      {hasColorStrip && (
        <div className={`
            h-[24px] w-full flex-shrink-0 relative border-b border-black/10 shadow-sm
            ${colors.tagBg}
        `}></div>
      )}

      {/* Main Body */}
      <div className={`flex-grow flex flex-col items-center justify-between p-1.5 relative z-10`}>

        {/* Name */}
        <div className="w-full text-center h-[32px] flex items-center justify-center">
          <span className={`font-bold uppercase text-[9.5px] leading-[1.1] ${colors.name} line-clamp-3 px-0.5 tracking-tight`}>
            {name}
          </span>
        </div>

        {/* Icon */}
        <div className="flex-grow flex items-center justify-center -mt-1">
          {icon && (
            <span className={`text-3xl ${colors.icon} transform transition-transform duration-300 group-hover:scale-110 drop-shadow-sm`}>
              {icon}
            </span>
          )}
        </div>

        {/* Footer/Price (Placeholder) */}
        <div className="w-full text-center mt-auto">
          {tileData.cost ? (
            <span className="text-[9px] font-mono font-bold text-stone-600 bg-stone-200/50 px-1.5 py-0.5 rounded-sm border border-stone-300/50">
              {tileData.cost} KP
            </span>
          ) : (
            <span className="text-[8px] font-bold text-stone-300 select-none">---</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`
        w-full h-full 
        border-[1px] border-stone-300
        outline outline-1 outline-stone-200/50 -outline-offset-1
        shadow-[1px_1px_2px_rgba(0,0,0,0.1)] 
        transition-all duration-200 
        hover:brightness-105 hover:-translate-y-[2px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:z-20 hover:border-stone-400
        group overflow-hidden relative
    `}>
      <Content />
    </div>
  );
};

const Tile: React.FC<TileProps> = ({ tileData, orientation }) => {
  if (orientation === 'corner') return <CornerTile tileData={tileData} />;

  // Handle Jail/Prison types correctly
  if (tileData.type === 'prison' || tileData.name.includes("Trại Cải Tạo")) return <JailTile tileData={tileData} />;

  return <StandardTile tileData={tileData} orientation={orientation} />;
};
export default Tile;
