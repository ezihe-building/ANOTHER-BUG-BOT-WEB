import { ExternalLink, Github, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-primary/20 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-black to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h2 className="font-display font-bold text-2xl text-white tracking-widest mb-2">SYSTEM<span className="text-primary">.CORE</span></h2>
          <p className="font-mono text-zinc-500 text-sm">© 2025 ALL RIGHTS RESERVED.</p>
        </div>

        <div className="flex flex-col gap-4 text-center md:text-right">
          <a 
            href="https://t.me/MR_BARRY_DEE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Send className="w-4 h-4 text-primary group-hover:shadow-glow rounded-full" />
            <span className="font-mono text-sm">Created by @MR_BARRY_DEE</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href="https://t.me/Olivia8885" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Terminal className="w-4 h-4 text-primary group-hover:shadow-glow rounded-full" />
            <span className="font-mono text-sm">Web Developer: @Olivia8885</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// Inline Terminal icon for footer
function Terminal(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  )
}