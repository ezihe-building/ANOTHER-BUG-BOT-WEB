import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Zap, Shield, Terminal, Music, Disc3 } from "lucide-react";
import { useAudio } from "@/lib/audioContext";

export function Nav() {
  const [location] = useLocation();
  const { isPlaying, activeTrack, playIntro, playMd, stop } = useAudio();

  const handleNullClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Double-click or secret click behavior: also toggles intro song
    if (location === '/') {
      e.preventDefault();
      activeTrack === 'intro' && isPlaying ? stop() : playIntro();
    }
  };

  const handleMdClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location === '/barry-x-md') {
      e.preventDefault();
      activeTrack === 'md' && isPlaying ? stop() : playMd();
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleNullClick}
          className="group relative flex items-center gap-3"
        >
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

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <Disc3 className={`w-4 h-4 text-primary ${isPlaying ? 'animate-spin' : ''}`} />
            <span className="font-mono text-xs text-primary/80 hidden sm:inline">
              {isPlaying ? activeTrack?.toUpperCase() : 'STANDBY'}
            </span>
          </div>
        </div>

        <Link
          href="/barry-x-md"
          onClick={handleMdClick}
          className="group relative flex items-center gap-3"
        >
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
