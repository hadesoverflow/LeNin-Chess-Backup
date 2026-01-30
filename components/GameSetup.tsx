import React, { useState } from 'react';
import { CHARACTERS_LIST } from '../constants';

export interface GameSetupConfig {
  name: string;
  characterImg: string;
  numBots: number;
}

interface GameSetupProps {
  mode: 'local' | 'online';
  onStart: (config: GameSetupConfig) => void;
  onBack: () => void;
}

const GameSetup: React.FC<GameSetupProps> = ({ mode, onStart, onBack }) => {
  const [name, setName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(CHARACTERS_LIST[0]);
  const [numBots, setNumBots] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart({
        name: name.trim(),
        characterImg: selectedCharacter.img,
        numBots,
      });
    }
  };

  const title = mode === 'local' ? 'Chế Độ Chơi Đơn' : 'Tạo Phòng Chơi Online';
  const submitButtonText = mode === 'local' ? 'Bắt Đầu' : 'Tạo Phòng';
  const submitButtonColor = mode === 'local' ? 'bg-[#b95c5c] hover:bg-[#a94c4c]' : 'bg-green-600 hover:bg-green-700';

  const inputClass =
    'w-full p-3 border border-yellow-800/20 rounded-lg bg-[#fff9e6] focus:ring-yellow-500 focus:border-yellow-500 shadow-inner placeholder-stone-500 text-stone-900';
  const buttonBaseClass =
    'flex-1 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed';

  const CharacterCard: React.FC<{ char: typeof CHARACTERS_LIST[0], isSelected: boolean, onSelect: () => void }> = ({ char, isSelected, onSelect }) => (
    <button
      type="button"
      onClick={onSelect}
      className={`cursor-pointer rounded-xl transition-all duration-300 border-2 p-1 group relative ${isSelected ? 'border-soviet-gold bg-soviet-red/20 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105' : 'border-stone-600 bg-stone-800/40 hover:border-stone-400'
        }`}
    >
      <div className="bg-stone-200 rounded-lg p-2 shadow-inner h-full flex flex-col justify-between relative overflow-hidden">
        {/* Card texture overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')] opacity-30 pointer-events-none"></div>

        <div className="bg-stone-300 rounded-md aspect-square flex items-center justify-center overflow-hidden shadow-inner border border-stone-400">
          <img
            src={char.img}
            alt={char.name}
            className="w-full h-full object-contain p-1 transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <p className="text-center font-bold text-xs text-stone-800 pt-2 leading-snug break-words z-10 font-mono uppercase tracking-tighter">
          {char.name}
        </p>
      </div>

      {isSelected && (
        <div className="absolute -top-2 -right-2 bg-soviet-gold text-red-900 rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md z-20">✓</div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      <div className="glass-panel p-8 w-full max-w-2xl border-4 border-soviet-gold/30">
        <h1 className="font-display text-5xl md:text-6xl text-soviet-gold text-center mb-8 text-shadow-gold">
          {title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label htmlFor="playerName" className="block text-xl font-bold text-stone-300">
              Tên Nhà Thám Hiểm:
            </label>
            <input
              type="text"
              id="playerName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border-2 border-stone-600 rounded-xl bg-stone-900/50 text-stone-100 placeholder-stone-600 focus:border-soviet-gold focus:ring-1 focus:ring-soviet-gold focus:outline-none transition-all font-mono text-lg shadow-inner"
              placeholder="Nhập tên của bạn..."
              maxLength={20}
              required
              autoComplete="off"
            />
          </div>

          <div className="space-y-3">
            <h2 className="block text-xl font-bold text-stone-300">Chọn Nhân Vật:</h2>
            <div className="grid grid-cols-4 gap-4">
              {CHARACTERS_LIST.map((char) => (
                <CharacterCard
                  key={char.name}
                  char={char}
                  isSelected={selectedCharacter.name === char.name}
                  onSelect={() => setSelectedCharacter(char)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="block text-xl font-bold text-stone-300">
              Số Lượng Đối Thủ (Bot):
            </h2>
            <div className="flex w-full bg-stone-900/50 rounded-xl p-1 shadow-inner border border-stone-700">
              {[0, 1, 2, 3].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setNumBots(count)}
                  className={`flex-1 text-center font-bold py-3 rounded-lg transition-all duration-200 ${numBots === count
                    ? 'bg-gradient-to-br from-soviet-gold to-yellow-600 text-stone-900 shadow-lg'
                    : 'text-stone-400 hover:bg-stone-800'
                    }`}
                >
                  {count === 0 ? 'Không' : `${count} Bot`}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-stone-700/50 mt-8">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 bg-stone-600 hover:bg-stone-500 text-stone-100 font-bold py-4 px-6 rounded-xl shadow-lg border-2 border-stone-500 transition-all active:scale-95 text-xl uppercase tracking-wider"
            >
              Quay Lại
            </button>
            <button
              type="submit"
              disabled={!name.trim()}
              className={`flex-1 font-bold py-4 px-6 rounded-xl shadow-[0_0_15px_rgba(234,179,8,0.4)] border-2 transition-all active:scale-95 text-xl uppercase tracking-wider ${!name.trim()
                ? 'bg-stone-800 text-stone-600 border-stone-700 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-red-950 border-yellow-400 hover:border-yellow-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] transform hover:-translate-y-1'
                }`}
            >
              {submitButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameSetup;