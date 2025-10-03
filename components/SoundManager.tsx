import React, { useEffect, useRef, useState } from 'react';
import type { AppState } from '../types';

interface SoundManagerProps {
  appState: AppState;
  isQuestionVisible: boolean;
  volume: number; // 0..1
}

const MENU_MUSIC_SRC = "/audio/Soundtrack1.mp3";     // nhạc nền (menu/lobby)
const GAME_MUSIC_SRC = "/audio/Soundtrack2.mp3";     // nhạc trong trận
const QUESTION_MUSIC_SRC = "/audio/Soundtrack3.mp3"; // nhạc khi làm quiz

const SoundManager: React.FC<SoundManagerProps> = ({ appState, isQuestionVisible, volume }) => {
  const menuAudioRef = useRef<HTMLAudioElement>(null);
  const gameAudioRef = useRef<HTMLAudioElement>(null);
  const questionAudioRef = useRef<HTMLAudioElement>(null);

  // Autoplay state
  const [didTryAutoplay, setDidTryAutoplay] = useState(false);
  const [autoplayAllowed, setAutoplayAllowed] = useState<boolean | null>(null); // null: đang thử

  // Helper
  const safePlay = async (audio?: HTMLAudioElement | null) => {
    if (!audio) return;
    try {
      if (audio.paused) await audio.play();
    } catch {
      /* bị chặn autoplay → sẽ unlock khi có gesture */
    }
  };
  const safePause = (audio?: HTMLAudioElement | null) => {
    if (audio && !audio.paused) audio.pause();
  };

  // Thiết lập loop & playsInline ngay khi mount
  useEffect(() => {
    const audios = [menuAudioRef.current, gameAudioRef.current, questionAudioRef.current];
    audios.forEach(a => {
      if (!a) return;
      a.loop = true;
      (a as any).playsInline = true; // iOS Safari
    });
  }, []);

  // Thử autoplay khi mount: phát MENU muted → rồi unmute nếu thành công
  useEffect(() => {
    if (didTryAutoplay) return;
    setDidTryAutoplay(true);

    const menu = menuAudioRef.current;
    if (!menu) return;

    // thử phát ở trạng thái muted để thỏa policy
    menu.muted = true;
    safePlay(menu)
      .then(() => {
        setAutoplayAllowed(true);
        // bỏ mute ở tick tiếp theo (tránh 1 số browser tự pause)
        setTimeout(() => {
          if (menuAudioRef.current) menuAudioRef.current.muted = false;
        }, 0);
      })
      .catch(() => {
        setAutoplayAllowed(false);
      });
  }, [didTryAutoplay]);

  // Nếu autoplay bị chặn: unlock bằng gesture đầu tiên
  useEffect(() => {
    if (autoplayAllowed !== false) return;

    const resumeOnGesture = async () => {
      // Unmute + play track đang cần phát (menu/game/quiz tùy UI hiện tại)
      const menu = menuAudioRef.current;
      const game = gameAudioRef.current;
      const quiz = questionAudioRef.current;

      const isGameScreen = appState === 'playing' || appState === 'gameover';
      const target =
        isQuestionVisible ? quiz : (isGameScreen ? game : menu);

      if (target) {
        try {
          // iOS/safari yêu cầu set muted=false ngay trước play trong gesture
          target.muted = false;
          await target.play();
          setAutoplayAllowed(true);
          cleanup();
        } catch {
          // nếu vẫn bị chặn, tiếp tục chờ gesture sau
        }
      }
    };

    const cleanup = () => {
      window.removeEventListener('pointerdown', resumeOnGesture);
      window.removeEventListener('keydown', resumeOnGesture);
    };

    window.addEventListener('pointerdown', resumeOnGesture);
    window.addEventListener('keydown', resumeOnGesture);
    return cleanup;
  }, [autoplayAllowed, appState, isQuestionVisible]);

  // Volume + ducking
  useEffect(() => {
    const menu = menuAudioRef.current;
    const game = gameAudioRef.current;
    const quiz = questionAudioRef.current;

    if (menu) menu.volume = 0.5 * volume;
    if (quiz) quiz.volume  = 0.7 * volume;
    if (game) game.volume  = (isQuestionVisible ? 0.1 : 0.5) * volume;
  }, [volume, isQuestionVisible]);

  // Điều khiển phát/dừng theo UI state
  useEffect(() => {
    const menu = menuAudioRef.current;
    const game = gameAudioRef.current;
    const quiz = questionAudioRef.current;

    // Nếu volume = 0 → dừng hết (tránh tốn CPU)
    if (volume === 0) {
      safePause(menu); safePause(game); safePause(quiz);
      return;
    }

    if (isQuestionVisible) {
      // Quiz mở: phát quiz + (giữ game chạy nhỏ)
      safePlay(quiz);
      safePause(menu);
      safePlay(game);
    } else {
      safePause(quiz);
      const isGameScreen = appState === 'playing' || appState === 'gameover';
      if (isGameScreen) {
        safePlay(game);
        safePause(menu);
      } else {
        safePlay(menu);
        safePause(game);
      }
    }
  }, [appState, isQuestionVisible, volume]);

  return (
    <>
      {/* src cần dấu / đầu vì file nằm trong public/ */}
      <audio ref={menuAudioRef}     src={MENU_MUSIC_SRC}     preload="auto" />
      <audio ref={gameAudioRef}     src={GAME_MUSIC_SRC}     preload="auto" />
      <audio ref={questionAudioRef} src={QUESTION_MUSIC_SRC} preload="auto" />
    </>
  );
};

export default SoundManager;
