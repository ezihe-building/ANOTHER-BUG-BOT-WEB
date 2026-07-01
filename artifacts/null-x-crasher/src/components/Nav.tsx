import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Terminal, Music, Pause, Disc3 } from "lucide-react";
import { createAudioUrl, getDefaultSong, StoredSong } from "@/lib/audioDb";

export function Nav() {
  const [location] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSong, setActiveSong] = useState<StoredSong | null>(null);
  const [hasSong, setHasSong] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let mounted = true;
    getDefaultSong().then((song) => {
      if (!mounted) return;
      setHasSong(!!song);
      if (song) setActiveSong(song);
    });
    return () => {
      mounted = false;
    };
  }, [location]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsPlaying(false);
    }
    if (activeSong) {
      const audio = new Audio(createAudioUrl(activeSong));
      audio.loop = true;
      audio.volume = 0.6;
      audio.onplay = () => setIsPlaying(true);
      audio.onpause = () => setIsPlaying(false);
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => setIsPlaying(false);
      audioRef.current = audio;
    }
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [activeSong]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group relative flex items-center gap-3">
          <Terminal className={`w-6 h-6 ${location === '/' ? 'text-primary' : 'text-zinc-500'} group-hover:text-primary transition-colors`} />
          <span className={`font-display font-bold tracking-widest text-lg ${location === '/' ? 'text-white' : 'text-zinc-400'}`}>
            NULL X
          </span>
          {location === '/' && (
            <motion.div layoutId="nav-indicator" className="absolute -bottom-[26px] left-0 right-0 h-1 bg-primary shadow-glow" />
          )}
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <Link
            href="/songs"
            className="group flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors"
          >
            <Music className="w-4 h-4" />
            <span className="hidden sm:inline font-mono text-xs tracking-widest">SONGS</span>
          </Link>

          <button
            onClick={togglePlay}
            className={`group relative flex items-center gap-2 px-5 py-2 rounded-full font-display font-bold text-xs tracking-[0.2em] border transition-all duration-300 ${
              hasSong
                ? 'border-primary bg-primary/10 text-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(123,0,255,0.5)]'
                : 'border-zinc-700 text-zinc-500 cursor-not-allowed'
            }`}
            disabled={!hasSong}
            title={hasSong ? 'Play active song' : 'Upload a song first'}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.span
                  key="playing"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-2"
                >
                  <Disc3 className="w-4 h-4 animate-spin" />
                  ENTER
                </motion.span>
              ) : (
                <motion.span
                  key="paused"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-2"
                >
                  {hasSong ? <Zap className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  ENTER
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <Link href="/barry-x-md" className="group relative flex items-center gap-3">
          <span className={`font-display font-bold tracking-widest text-lg ${location === '/barry-x-md' ? 'text-white text-shadow-glow-white' : 'text-zinc-400'}`}>
            BARRY X
          </span>
          <Shield className={`w-6 h-6 ${location === '/barry-x-md' ? 'text-white' : 'text-zinc-500'} group-hover:text-white transition-colors`} />
          {location === '/barry-x-md' && (
            <motion.div layoutId="nav-indicator" className="absolute -bottom-[26px] left-0 right-0 h-1 bg-white shadow-glow-white" />
          )}
        </Link>
      </div>
    </nav>
  );
}
