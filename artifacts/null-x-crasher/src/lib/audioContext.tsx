import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

type AudioTrack = 'intro' | 'md' | null;

interface AudioContextValue {
  isPlaying: boolean;
  activeTrack: AudioTrack;
  playIntro: () => void;
  playMd: () => void;
  stop: () => void;
  toggleIntro: () => void;
  toggleMd: () => void;
}

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [activeTrack, setActiveTrack] = useState<AudioTrack>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const introRef = useRef<HTMLAudioElement | null>(null);
  const mdRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const intro = new Audio('/audio/MONTAGEM GAME.mp3');
    intro.loop = true;
    intro.volume = 0.6;
    intro.onplay = () => setIsPlaying(true);
    intro.onpause = () => setIsPlaying(false);
    intro.onended = () => setIsPlaying(false);

    const md = new Audio('/audio/MONTAGEM OCTUS.mp3');
    md.loop = true;
    md.volume = 0.6;
    md.onplay = () => setIsPlaying(true);
    md.onpause = () => setIsPlaying(false);
    md.onended = () => setIsPlaying(false);

    introRef.current = intro;
    mdRef.current = md;

    return () => {
      intro.pause();
      md.pause();
      introRef.current = null;
      mdRef.current = null;
    };
  }, []);

  const stop = () => {
    introRef.current?.pause();
    mdRef.current?.pause();
    setActiveTrack(null);
    setIsPlaying(false);
  };

  const playIntro = () => {
    mdRef.current?.pause();
    const intro = introRef.current;
    if (!intro) return;
    intro.currentTime = 0;
    setActiveTrack('intro');
    intro.play().catch(() => setIsPlaying(false));
  };

  const playMd = () => {
    introRef.current?.pause();
    const md = mdRef.current;
    if (!md) return;
    md.currentTime = 0;
    setActiveTrack('md');
    md.play().catch(() => setIsPlaying(false));
  };

  const toggleIntro = () => {
    if (activeTrack === 'intro' && isPlaying) {
      stop();
    } else {
      playIntro();
    }
  };

  const toggleMd = () => {
    if (activeTrack === 'md' && isPlaying) {
      stop();
    } else {
      playMd();
    }
  };

  return (
    <AudioContext.Provider
      value={{ isPlaying, activeTrack, playIntro, playMd, stop, toggleIntro, toggleMd }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
}
