import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Zap, Shield, Terminal } from "lucide-react";

export function Nav() {
  const [location] = useLocation();

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
        
        <div className="flex items-center gap-2 text-zinc-600 font-mono text-sm hidden md:flex">
          <span>//</span>
          <span>SYSTEM.SELECT</span>
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
