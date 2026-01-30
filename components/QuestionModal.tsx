import React, { useState, useEffect, useRef } from 'react';
import type { Question, QuizState, Player, GameState } from '../types';

interface QuestionModalProps {
  question: Question;
  quizState: QuizState | null;
  onAnswer: (answerIndex: number) => void;
  onUseLifeline: (type: 'eliminate' | 'ai_help') => void;
  onCloseAiHelp: () => void;
  lifelineStatus: GameState['lifelineStatus'];
  currentPlayer: Player;
}

const TIMER_DURATION = 30;

const QuestionModal: React.FC<QuestionModalProps> = ({ question, quizState, onAnswer, onUseLifeline, onCloseAiHelp, lifelineStatus, currentPlayer }) => {
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const timerRef = useRef<number | null>(null);

  const hasFreeEliminate = currentPlayer.knowledgeFundBuffTurns > 0;

  useEffect(() => {
    setTimeLeft(TIMER_DURATION);

    timerRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          onAnswer(-1); // Automatically submit -1 for timeout
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.content, onAnswer]);


  const handleAnswerClick = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    onAnswer(index);
  };

  const handleEliminateClick = () => {
    if (lifelineStatus.eliminate) return;
    onUseLifeline('eliminate');
  };

  const handleAiHelpClick = () => {
    if (lifelineStatus.ai_help) return;
    onUseLifeline('ai_help');
  };


  const timerProgress = (timeLeft / TIMER_DURATION) * 100;
  const isQuiz = quizState !== null;
  const quizProgressText = isQuiz ? `(Câu ${quizState.currentIndex + 1}/${quizState.questions.length})` : '';
  const eliminatedAnswers = lifelineStatus.eliminate || [];

  return (
    <div className="fixed inset-0 bg-lacquer-black/90 flex items-center justify-center z-50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-parchment rounded-md shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 max-w-3xl w-full border-[8px] border-double border-vn-bronze relative overflow-hidden transform transition-all scale-100">

        {/* Decorative Corner Ornaments - Vietnamese Style */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-[4px] border-l-[4px] border-vn-red opacity-70"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-[4px] border-r-[4px] border-vn-red opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[4px] border-l-[4px] border-vn-red opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[4px] border-r-[4px] border-vn-red opacity-70"></div>

        {/* Timer Bar - Vietnamese colors */}
        <div className="absolute top-0 left-0 h-1.5 bg-stone-300 w-full z-10">
          <div className="h-full bg-gradient-to-r from-vn-red to-vn-gold shadow-[0_0_10px_rgba(196,30,58,0.6)]" style={{ width: `${timerProgress}%`, transition: 'width 1s linear' }}></div>
        </div>

        {/* Header Section */}
        <div className="relative text-center mb-8 pt-4">
          {/* Lifeline Buttons - Absolute Positioned */}
          <div className="absolute top-2 right-0 flex gap-3 z-20">
            <button
              title={hasFreeEliminate ? `Loại trừ (còn ${currentPlayer.knowledgeFundBuffTurns} lượt miễn phí)` : "Loại trừ hai đáp án sai (200 KP)"}
              onClick={handleEliminateClick}
              disabled={!!lifelineStatus.eliminate || currentPlayer.isBot}
              className="relative p-2.5 rounded-full bg-lacquer-black hover:bg-stone-800 disabled:bg-stone-400 disabled:cursor-not-allowed transition-all text-white shadow-lg border-2 border-vn-bronze hover:border-vn-gold group active:scale-95"
            >
              {hasFreeEliminate && <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-vn-red text-[9px] font-bold text-white border border-white shadow-sm animate-bounce">FREE</span>}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-vn-gold group-hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" stroke="none"></polygon></svg>
            </button>
            <button
              title="Hỏi AI Bot (300 KP)"
              onClick={handleAiHelpClick}
              disabled={!!lifelineStatus.ai_help || currentPlayer.isBot}
              className="relative p-2.5 rounded-full bg-lacquer-black hover:bg-stone-800 disabled:bg-stone-400 disabled:cursor-not-allowed transition-all text-white shadow-lg border-2 border-vn-bronze hover:border-blue-400 group active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-blue-300 group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]"><path fill="currentColor" d="M19,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6Z" /><circle fill="#22d3ee" cx="8.5" cy="11.5" r="1.5" /><circle fill="#22d3ee" cx="15.5" cy="11.5" r="1.5" /></svg>
            </button>

            {/* AI Chat Bubble */}
            {lifelineStatus.ai_help && (
              <div className="absolute top-12 right-0 w-72 bg-white p-4 z-30 rounded-lg border-l-4 border-vn-gold shadow-2xl skew-y-1">
                <button onClick={onCloseAiHelp} className="absolute top-1 right-2 text-stone-400 hover:text-vn-red text-lg font-bold">&times;</button>
                <p className="font-bold text-xs text-vn-bronze uppercase tracking-widest mb-1">🤖 AI Gợi Ý</p>
                <p className="text-base text-stone-900 leading-snug font-serif">
                  {lifelineStatus.ai_help.answer}
                </p>
                <p className="text-xs text-stone-500 mt-2 italic border-t pt-2 border-stone-200">
                  {lifelineStatus.ai_help.explanation}
                </p>
              </div>
            )}
          </div>

          <h2 className="font-display text-4xl text-vn-red mb-2 uppercase tracking-tight drop-shadow-md">
            {isQuiz ? 'Bài Kiểm Tra' : 'Thử Thách'}
          </h2>
          {isQuiz ? (
            <p className="text-vn-bronze font-bold text-xs tracking-[0.2em] uppercase">Câu hỏi {quizState.currentIndex + 1} / {quizState.questions.length}</p>
          ) : (
            <div className="h-px w-24 bg-vn-red mx-auto opacity-30"></div>
          )}

          <div className={`mt-4 inline-flex items-center justify-center px-6 py-2 rounded-full font-mono text-4xl font-bold border-[3px] shadow-inner transition-colors duration-300 ${timeLeft <= 5 ? 'bg-red-50 text-vn-red border-vn-red animate-pulse' : 'bg-stone-200 text-stone-700 border-vn-bronze'}`}>
            {timeLeft}<span className="text-sm ml-1 opacity-50 self-end mb-1">s</span>
          </div>
        </div>

        {/* Question Box */}
        <div className="bg-white p-6 md:p-8 rounded-sm mb-8 relative border border-stone-300 shadow-sm mx-2">
          {/* Bot Indicator */}
          {currentPlayer.isBot && (
            <div className="absolute top-0 inset-x-0 bg-yellow-500/20 py-1 text-center font-bold text-yellow-600 uppercase tracking-widest text-xs animate-pulse z-20">
              Bot đang suy nghĩ...
            </div>
          )}

          {/* Folder tab look */}
          <div className="absolute -top-3 left-4 bg-stone-300 px-4 py-1 rounded-t-md text-[10px] font-bold text-stone-600 uppercase tracking-wider border border-b-0 border-stone-400">
            Nội dung câu hỏi
          </div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-50 pointer-events-none"></div>
          <p className="text-xl md:text-3xl text-stone-900 font-serif text-center leading-normal relative z-10 selection:bg-yellow-200">
            {question.content}
          </p>
        </div>

        {/* Answers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
          {question.answers.map((answer, index) => {
            const isEliminated = eliminatedAnswers.includes(index);
            const isBot = currentPlayer.isBot;
            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={isEliminated || isBot}
                className={`
                    w-full py-5 px-6 rounded-lg transition-all duration-200 text-left border-l-4 relative overflow-hidden group
                    shadow-[0_2px_5px_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-[2px]
                    ${isEliminated
                    ? 'opacity-40 bg-stone-300 border-vn-bronze cursor-not-allowed'
                    : 'bg-white hover:bg-stone-50 border-vn-bronze hover:border-vn-red'
                  }
                `}
              >
                {/* Numbering Circle */}
                <div className={`
                    absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors
                    ${isEliminated ? 'border-vn-bronze text-vn-bronze' : 'border-vn-bronze text-vn-bronze group-hover:border-vn-red group-hover:text-vn-red'}
                `}>
                  {String.fromCharCode(65 + index)}
                </div>

                {isEliminated && <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 transform rotate-12 bg-vn-red text-white font-black text-xs px-2 py-0.5 rounded shadow-sm">LOẠI</div>}

                <span className={`text-lg block pl-10 ${isEliminated ? 'text-stone-400 line-through decoration-2 decoration-vn-red' : 'text-stone-800 font-medium'}`}>
                  {answer.content}
                </span>

                {/* Hover Indicator */}
                {!isEliminated && <div className="absolute right-0 top-0 bottom-0 w-1 bg-vn-red transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>}
              </button>
            )
          })}
        </div>

        {isQuiz && quizState.currentIndex >= quizState.questions.length && (
          <div className="absolute inset-0 bg-stone-900/95 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-parchment p-10 rounded-sm border-[4px] border-double border-wood-light text-center shadow-2xl max-w-sm">
              <div className="text-6xl mb-4 animate-bounce">🏁</div>
              <p className="font-display text-2xl text-stone-800 mb-2 font-bold uppercase tracking-widest">Hoàn Thành!</p>
              <p className="text-stone-600 italic">Hệ thống đang tổng kết điểm số...</p>
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default QuestionModal;