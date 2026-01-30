import React, { useState, useEffect, useRef } from 'react';
import type { Player } from '../types';

interface ControlPanelProps {
    currentPlayer: Player;
    onRollDice: () => void;
    dice: number;
    canRoll: boolean;
    isRolling: boolean;
}

const Dice: React.FC<{ value: number; isRolling: boolean }> = ({ value, isRolling }) => {
    // Defines the six faces of a standard die, mapping face value to CSS position class.
    // Opposite faces sum to 7 (1-6, 2-5, 3-4).
    const faces = [
        { faceValue: 1, positionClass: 'face-1' }, // Front
        { faceValue: 6, positionClass: 'face-6' }, // Back
        { faceValue: 2, positionClass: 'face-2' }, // Right
        { faceValue: 5, positionClass: 'face-5' }, // Left
        { faceValue: 3, positionClass: 'face-3' }, // Top
        { faceValue: 4, positionClass: 'face-4' }, // Bottom
    ];

    // A sub-component to render the pips on a given face value.
    const Face: React.FC<{ faceValue: number }> = ({ faceValue }) => {
        // A dot component for reuse
        const Dot = () => <div className="w-3 h-3 bg-gray-800 rounded-full"></div>;

        // Use a CSS grid to position the dots.
        let dots = [];
        switch (faceValue) {
            case 1:
                dots = [<div key="c" style={{ gridArea: '2 / 2' }}><Dot /></div>];
                break;
            case 2:
                dots = [
                    <div key="tl" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="br" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            case 3:
                dots = [
                    <div key="tl" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="c" style={{ gridArea: '2 / 2' }}><Dot /></div>,
                    <div key="br" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            case 4:
                dots = [
                    <div key="tl" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="tr" style={{ gridArea: '1 / 3' }}><Dot /></div>,
                    <div key="bl" style={{ gridArea: '3 / 1' }}><Dot /></div>,
                    <div key="br" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            case 5:
                dots = [
                    <div key="tl" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="tr" style={{ gridArea: '1 / 3' }}><Dot /></div>,
                    <div key="c" style={{ gridArea: '2 / 2' }}><Dot /></div>,
                    <div key="bl" style={{ gridArea: '3 / 1' }}><Dot /></div>,
                    <div key="br" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            case 6:
                dots = [
                    <div key="t1" style={{ gridArea: '1 / 1' }}><Dot /></div>,
                    <div key="m1" style={{ gridArea: '2 / 1' }}><Dot /></div>,
                    <div key="b1" style={{ gridArea: '3 / 1' }}><Dot /></div>,
                    <div key="t3" style={{ gridArea: '1 / 3' }}><Dot /></div>,
                    <div key="m3" style={{ gridArea: '2 / 3' }}><Dot /></div>,
                    <div key="b3" style={{ gridArea: '3 / 3' }}><Dot /></div>
                ];
                break;
            default:
                dots = [];
        }

        return (
            <div className="w-full h-full p-2 grid grid-cols-3 grid-rows-3 justify-items-center items-center">
                {dots}
            </div>
        );
    };

    // By changing the key, we force React to re-mount the element, which guarantees the animation re-triggers.
    const [animationKey, setAnimationKey] = useState(0);
    const prevIsRolling = useRef(isRolling);

    useEffect(() => {
        // A new roll starts when `isRolling` transitions from false to true.
        if (isRolling && !prevIsRolling.current) {
            setAnimationKey(k => k + 1);
        }
        prevIsRolling.current = isRolling;
    }, [isRolling]);

    // Always apply the final state class `show-X` for stability.
    // The `animate-roll-to-X` class is added during the roll to play the animation.
    // Because the animation has `forwards`, it holds its final state until the class is removed.
    // When `isRolling` becomes false, the animation class is removed, but `show-X` remains,
    // ensuring a seamless transition without any flicker.
    const animationClass = isRolling ? `animate-roll-to-${value}` : '';
    const finalStateClass = `show-${value}`;

    return (
        <div className="dice-container">
            <div
                key={animationKey}
                className={`dice-cube transform-gpu ${finalStateClass} ${animationClass}`}
            >
                {faces.map(({ faceValue, positionClass }) => (
                    <div key={faceValue} className={`dice-face ${positionClass}`}>
                        <Face faceValue={faceValue} />
                    </div>
                ))}
            </div>
        </div>
    );
};


const ControlPanel: React.FC<ControlPanelProps> = ({ currentPlayer, onRollDice, dice, canRoll, isRolling }) => {

    return (
        <div className="w-full h-full flex flex-col items-center justify-between py-6 px-4 relative z-20 pointer-events-none">
            {/* Pointer events set to none for container so clicks pass through to board if needed, 
                but children need pointer-events-auto */}

            {/* Top: Player Info Banner - Vietnamese Scroll Style */}
            <div className="pointer-events-auto relative mt-4">
                <div className="absolute inset-0 bg-vn-red transform -skew-x-12 shadow-lg border-2 border-vn-gold opacity-95"></div>
                <div className="relative px-8 py-3 text-center min-w-[200px]">
                    <div className="text-[10px] font-bold text-vn-gold uppercase tracking-widest mb-0.5 opacity-90">
                        Lượt Hiện Tại
                    </div>
                    <div className="font-display font-bold text-2xl uppercase text-white drop-shadow-md tracking-wider">
                        {currentPlayer.name}
                    </div>
                </div>
                {/* Decorative elements - Vietnamese style */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 text-vn-gold text-lg drop-shadow-md">◆</div>
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 text-vn-gold text-lg drop-shadow-md">◆</div>
            </div>

            {/* Center: Dice (Floating) */}
            <div className="pointer-events-auto relative -mt-4 group perspective-container">
                {/* Dice platform/glow - Vietnamese gold */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-vn-gold/20 rounded-full blur-2xl animate-pulse"></div>

                <div className="transform scale-150 transition-transform duration-300 group-hover:scale-[1.6]">
                    <Dice value={dice} isRolling={isRolling} />
                </div>

                {/* Result display just below dice */}
                {!isRolling && !canRoll && (
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-max text-center animate-kp-feedback">
                        <span className="bg-lacquer-black/90 text-vn-gold border border-vn-gold px-4 py-1.5 rounded-full text-xl font-bold font-mono shadow-lg block backdrop-blur-sm">
                            Kết quả: {dice}
                        </span>
                    </div>
                )}
            </div>

            {/* Bottom: Action Button */}
            <div className="pointer-events-auto w-full max-w-[220px] mb-4">
                <button
                    onClick={onRollDice}
                    disabled={!canRoll || isRolling || currentPlayer.isBot}
                    className={`
                        w-full py-4 text-xl font-display font-bold uppercase tracking-widest relative overflow-hidden transition-all duration-300 group
                        bg-gradient-to-b from-vn-red to-red-900 
                        border-2 border-vn-gold shadow-[0_6px_0_#4a1a1a] hover:shadow-[0_3px_0_#4a1a1a] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px]
                        rounded-lg
                        ${(!canRoll || currentPlayer.isBot) ? 'grayscale opacity-70 cursor-not-allowed shadow-none translate-y-[6px]' : 'hover:brightness-110'}
                    `}
                    style={{
                        textShadow: '0 2px 0 rgba(0,0,0,0.5)'
                    }}
                >
                    {/* Button inner texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20"></div>

                    <span className="relative z-10 text-white group-hover:text-yellow-100 flex items-center justify-center gap-2">
                        {isRolling ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Đang Gieo...</span>
                            </>
                        ) : (
                            currentPlayer.isBot ? 'Bot Đang Chơi...' : 'Gieo Xúc Xắc'
                        )}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ControlPanel;