import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '@/lib/audioContext';
import { ChevronRight } from 'lucide-react';

const bootLines = [
  'Initializing...',
  'Loading Neural Core...',
  'Connecting to the ZENITH LAB...',
];

const revealLines = [
  'In a world ruled by automation...',
  'Only one intelligence stands above the rest.',
  '',
  'Not just another bot.',
  'A digital empire.',
  '',
  'Welcome to',
];

export function Intro({ onEnter }: { onEnter: () => void }) {
  const [bootIndex, setBootIndex] = useState(0);
  const [showReveal, setShowReveal] = useState(false);
  const [revealIndex, setRevealIndex] = useState(0);
  const { playIntro } = useAudio();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (bootIndex < bootLines.length) {
      timer = setTimeout(() => setBootIndex((i) => i + 1), 1200);
    } else {
      timer = setTimeout(() => setShowReveal(true), 600);
    }
    return () => clearTimeout(timer);
  }, [bootIndex]);

  useEffect(() => {
    if (!showReveal) return;
    if (revealIndex >= revealLines.length) return;
    const timer = setTimeout(() => setRevealIndex((i) => i + 1), 900);
    return () => clearTimeout(timer);
  }, [showReveal, revealIndex]);

  const handleEnter = () => {
    playIntro();
    onEnter();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,0,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black opacity-50" />

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Boot sequence */}
        <div className="min-h-[80px] mb-10 text-left font-mono text-sm md:text-base text-primary/80 space-y-1">
          {bootLines.slice(0, bootIndex).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-primary">&gt;</span>
              {line}
              {i === bootIndex - 1 && (
                <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Reveal text */}
        <AnimatePresence>
          {showReveal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              {revealLines.slice(0, revealIndex).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6 }}
                  className={`${
                    line === ''
                      ? 'h-4'
                      : 'text-lg md:text-2xl font-sans text-zinc-300 tracking-wide'
                  }`}
                >
                  {line}
                </motion.p>
              ))}

              {revealIndex >= revealLines.length && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="pt-6"
                >
                  <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-tight uppercase mb-12 drop-shadow-[0_0_30px_rgba(123,0,255,0.4)]">
                    BARRY DEE <span className="text-primary">BUGBOTS</span>
                  </h1>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnter}
                    className="group relative inline-flex items-center gap-3 px-12 py-5 bg-transparent border-2 border-primary text-primary font-display font-bold text-xl tracking-[0.3em] uppercase overflow-hidden hover:text-black transition-colors duration-300"
                  >
                    <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-3">
                      [ ENTER ]
                      <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
