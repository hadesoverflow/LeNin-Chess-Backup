import React, { useRef, useEffect } from 'react';

interface GameLogProps {
    log: { turn: number, message: string, id: number, timestamp?: string }[];
    onClearLog: () => void;
}

const GameLog: React.FC<GameLogProps> = ({ log, onClearLog }) => {
    const logEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [log]);

    return (
        <div className="glass-panel p-4 h-[300px] flex flex-col border border-stone-600/50 bg-[#1c1917]/80">
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-stone-700">
                <h3 className="font-display font-bold text-stone-200 tracking-wider">Nhật Ký Hành Trình</h3>
                <button
                    onClick={onClearLog}
                    className="text-xs text-stone-400 hover:text-red-400 hover:underline transition-colors"
                >
                    Xóa nhật ký
                </button>
            </div>

            <div className="flex-grow overflow-y-auto pr-2 font-mono text-sm space-y-2 custom-scrollbar">
                {log.length === 0 ? (
                    <p className="text-stone-600 italic text-center mt-10">Chưa có sự kiện nào...</p>
                ) : (
                    log.map((entry, index) => (
                        <div key={index} className="text-stone-300 border-b border-stone-800/50 pb-1 last:border-0 animate-pulse-glow">
                            {entry.timestamp && <span className="text-stone-500 text-[10px] mr-2">[{entry.timestamp}]</span>}
                            <span dangerouslySetInnerHTML={{ __html: entry.message }} />
                        </div>
                    ))
                )}
                <div ref={logEndRef} />
            </div>
        </div>
    );
};

export default GameLog;