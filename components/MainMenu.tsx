import React from 'react';

interface MainMenuProps {
  onNavigate: (target: 'local_setup' | 'create_room' | 'join_room') => void;
}

// Bronze Drum SVG Pattern Component
const BronzeDrumPattern: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {/* Outer circle */}
    <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    {/* Inner concentric circles */}
    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* Center sun */}
    <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.7" />
    {/* Sun rays */}
    {[...Array(16)].map((_, i) => (
      <line
        key={i}
        x1="100"
        y1="100"
        x2={100 + 35 * Math.cos((i * 22.5 * Math.PI) / 180)}
        y2={100 + 35 * Math.sin((i * 22.5 * Math.PI) / 180)}
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
    ))}
    {/* Decorative birds (chim Lạc) - simplified */}
    {[0, 90, 180, 270].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 100 100)`}>
        <path
          d="M100 30 Q110 35 115 30 Q110 40 100 45 Q90 40 85 30 Q90 35 100 30"
          fill="currentColor"
          opacity="0.6"
        />
      </g>
    ))}
  </svg>
);

const MainMenu: React.FC<MainMenuProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      {/* Decorative Bronze Drum Patterns - Background */}
      <div className="absolute top-10 left-10 w-32 h-32 text-vn-gold opacity-20 pointer-events-none animate-pulse">
        <BronzeDrumPattern />
      </div>
      <div className="absolute bottom-10 right-10 w-40 h-40 text-vn-gold opacity-15 pointer-events-none">
        <BronzeDrumPattern />
      </div>
      <div className="absolute top-1/4 right-20 w-24 h-24 text-vn-red opacity-10 pointer-events-none">
        <BronzeDrumPattern />
      </div>

      {/* Main Panel - Vietnamese Lacquer Style */}
      <div className="relative p-10 w-full max-w-4xl text-center border-4 border-vn-gold/40 rounded-lg bg-gradient-to-b from-lacquer-black/90 to-wood-dark/90 backdrop-blur-md shadow-2xl">
        {/* Decorative corner ornaments - Vietnamese style */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-vn-gold rounded-tl-lg opacity-80"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-vn-gold rounded-tr-lg opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-vn-gold rounded-bl-lg opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-vn-gold rounded-br-lg opacity-80"></div>

        {/* Small Bronze Drum Center Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-vn-gold opacity-[0.03] pointer-events-none">
          <BronzeDrumPattern />
        </div>

        {/* Title */}
        <h1 className="font-display text-7xl md:text-8xl text-vn-gold mb-2 tracking-widest uppercase relative z-10"
          style={{ textShadow: '2px 2px 0px #8B4513, 4px 4px 8px rgba(0,0,0,0.5)' }}>
          Hội Nhập Văn Hoá
        </h1>

        <p className="text-lg md:text-xl text-vn-gold/80 font-light tracking-wide mb-10 drop-shadow-md font-display italic">
          "Vươn Mình Phát Triển"
        </p>

        {/* Menu Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Solo Play */}
          <button
            onClick={() => onNavigate('local_setup')}
            className="group relative p-6 bg-gradient-to-br from-vn-red to-red-900 rounded-lg border-2 border-vn-gold/50 shadow-lg hover:shadow-vn-gold/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <BronzeDrumPattern className="w-full h-full text-vn-gold" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="text-6xl mb-2 filter drop-shadow-md group-hover:scale-110 transition-transform">👤</div>
              <h3 className="text-2xl font-display font-bold text-vn-gold">Chơi Đơn</h3>
              <p className="text-sm text-yellow-200/80">Luyện tập tư duy một mình</p>
            </div>
          </button>

          {/* Create Room */}
          <button
            onClick={() => onNavigate('create_room')}
            className="group relative p-6 bg-gradient-to-br from-vn-bronze to-amber-900 rounded-lg border-2 border-vn-gold/50 shadow-lg hover:shadow-vn-gold/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <BronzeDrumPattern className="w-full h-full text-bamboo" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="text-6xl mb-2 filter drop-shadow-md group-hover:scale-110 transition-transform">🏘️</div>
              <h3 className="text-2xl font-display font-bold text-vn-gold">Tạo Phòng</h3>
              <p className="text-sm text-yellow-200/80">Mở hội nghị với đồng đội</p>
            </div>
          </button>

          {/* Join Room */}
          <button
            onClick={() => onNavigate('join_room')}
            className="group relative p-6 bg-gradient-to-br from-stone-700 to-stone-900 rounded-lg border-2 border-bamboo/50 shadow-lg hover:shadow-bamboo/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <BronzeDrumPattern className="w-full h-full text-bamboo" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="text-6xl mb-2 filter drop-shadow-md group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-2xl font-display font-bold text-bamboo">Tham Gia</h3>
              <p className="text-sm text-stone-300/80">Gia nhập cuộc đấu trí</p>
            </div>
          </button>
        </div>

        <div className="mt-12 text-bamboo/60 text-sm relative z-10">
          Phiên bản Cổ Điển Việt Nam v1.0 • Họa tiết Trống Đồng Đông Sơn
        </div>
      </div>
    </div>
  );
};

export default MainMenu;