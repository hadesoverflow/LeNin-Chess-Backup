import React from 'react';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose, footer }) => {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-parchment rounded-xl shadow-2xl overflow-hidden max-w-md w-full border-[6px] border-wood-light relative transform transition-all scale-100">
                {/* Decorative Corner Ornaments */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-soviet-red pointer-events-none z-20"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-soviet-red pointer-events-none z-20"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-soviet-red pointer-events-none z-20"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-soviet-red pointer-events-none z-20"></div>

                {/* Header */}
                <div className="bg-wood-dark p-4 border-b-4 border-soviet-gold text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-50"></div>
                    <h2 className="relative z-10 font-display text-3xl text-soviet-gold uppercase tracking-widest text-shadow-gold">{title}</h2>
                </div>

                {/* Body */}
                <div className="p-8 text-center bg-[#fdf6e3]">
                    <div className="text-lg text-stone-800 leading-relaxed font-medium">
                        {children}
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-[#ede4d1] p-4 border-t-2 border-[#d3c3a7] flex justify-center gap-4">
                    {footer ? footer : (
                        <button
                            onClick={onClose}
                            className="bg-soviet-red text-white font-bold py-2 px-8 rounded-lg shadow-md hover:bg-red-700 transition-all active:scale-95 border-b-4 border-red-900"
                        >
                            Đóng
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;