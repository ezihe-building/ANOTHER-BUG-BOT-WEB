import { motion, Variants } from "framer-motion";
import { Terminal, Cpu, Network, Shield, ChevronRight } from "lucide-react";
import nullLogo from "@assets/IMG_20260630_141750_188_1782826901655.jpg";
import nullAltLogo from "@assets/IMG-20260630-WA0110_1782826901670.jpg";
import nullTgScreenshot from "@assets/Screenshot_20260630-143517_1782826901575.png";
import { Link } from "wouter";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function NullXCrasher() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
          <div className="scan-line" />
          {/* Grid background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyMywgMCwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-30 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-start space-y-6"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-3 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-sm text-primary font-bold tracking-wider">TG BOT — SYSTEM ONLINE</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-8xl font-display font-black leading-none tracking-tighter uppercase"
            >
              <span className="block text-zinc-300">NULL X</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary glitch" data-text="CRASHER">
                CRASHER
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-zinc-400 font-sans max-w-lg leading-relaxed">
              The ultimate Telegram automation protocol. Engineered for absolute control, speed, and precision in digital environments.
            </motion.p>
            
            <motion.div variants={fadeIn} className="pt-4 flex flex-wrap gap-4">
              <a 
                href="https://t.me/null_invader_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-display font-bold tracking-widest uppercase overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">Deploy Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 rounded-full border border-primary/30 pulse-ring" />
              <div className="absolute inset-4 rounded-full border border-primary/20 border-dashed animate-[spin_20s_linear_infinite]" />
              <img 
                src={nullLogo} 
                alt="NULL X CRASHER Logo" 
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-glow-lg border-2 border-primary/50 mix-blend-screen"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terminal & Data Section */}
      <section className="py-24 px-6 relative border-t border-primary/10 bg-black">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Bot Info Panel */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-4 glass-card rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Network className="w-24 h-24 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-white border-b border-primary/20 pb-4">SYSTEM.INFO</h3>
              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">USER</span>
                  <span className="text-white">Olivia</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">PLATFORM</span>
                  <span className="text-primary font-bold">TELEGRAM</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">DEVELOPER</span>
                  <span className="text-white">BARRY DEE</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">PREFIX</span>
                  <span className="bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/30">[ / ]</span>
                </div>
              </div>

              <div className="mt-8 bg-black/50 border border-primary/20 rounded p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  <span className="font-display font-bold text-sm tracking-widest text-zinc-300">ENGINE STATUS</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-500">v1.0.0</span>
                  <span className="text-green-400 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> ONLINE</span>
                </div>
              </div>
            </motion.div>

            {/* Control Panel / Commands */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-8 glass-card rounded-xl p-0 relative overflow-hidden flex flex-col"
            >
              <div className="bg-zinc-900/80 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 font-mono text-xs text-zinc-500 flex-1 text-center">root@null-x:~</span>
              </div>
              
              <div className="p-6 font-mono text-sm md:text-base flex-1 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMTIzLCAwLCAyNTUsIDAuMSkiLz4KPC9zdmc+')] opacity-50" />
                
                <div className="space-y-4 relative z-10">
                  <motion.div variants={fadeIn} className="flex gap-4">
                    <span className="text-primary select-none">&gt;</span>
                    <span className="text-zinc-300">Executing pairing protocol...</span>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="flex gap-4 group">
                    <span className="text-primary opacity-50 group-hover:opacity-100 transition-opacity select-none">$</span>
                    <span className="text-white hover:text-primary transition-colors cursor-crosshair">/pair 94xxxxxxxxx</span>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="flex gap-4 group">
                    <span className="text-primary opacity-50 group-hover:opacity-100 transition-opacity select-none">$</span>
                    <span className="text-white hover:text-primary transition-colors cursor-crosshair">/delpair 94xxxxxxxxx</span>
                  </motion.div>

                  <motion.div variants={fadeIn} className="flex gap-4 group">
                    <span className="text-primary opacity-50 group-hover:opacity-100 transition-opacity select-none">$</span>
                    <span className="text-white hover:text-primary transition-colors cursor-crosshair">/listpair</span>
                  </motion.div>

                  <motion.div variants={fadeIn} className="flex gap-4 group">
                    <span className="text-primary opacity-50 group-hover:opacity-100 transition-opacity select-none">$</span>
                    <span className="text-white hover:text-primary transition-colors cursor-crosshair">/listmode</span>
                  </motion.div>

                  <motion.div variants={fadeIn} className="flex gap-4 group">
                    <span className="text-primary opacity-50 group-hover:opacity-100 transition-opacity select-none">$</span>
                    <span className="text-white hover:text-primary transition-colors cursor-crosshair">/runtime</span>
                  </motion.div>

                  <motion.div variants={fadeIn} className="pt-4 flex gap-4">
                    <span className="text-primary select-none">&gt;</span>
                    <span className="text-green-400">All modules loaded. Awaiting input<span className="animate-pulse">_</span></span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-24 px-6 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
         <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
         
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display font-bold text-4xl mb-6">DOMINATE THE <br/><span className="text-primary">CHATSPACE</span></h2>
                <p className="text-zinc-400 font-sans text-lg mb-8 leading-relaxed">
                  NULL X operates with zero latency. Its architecture is designed for immediate response, deep integration with the Telegram API, and uncompromising reliability under load.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-mono text-white font-bold mb-1">ANTI-BAN</h4>
                    <p className="text-sm text-zinc-500">Advanced proxy routing</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-mono text-white font-bold mb-1">MULTI-CORE</h4>
                    <p className="text-sm text-zinc-500">Parallel task execution</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative perspective-1000"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
                <div className="relative rounded-2xl border border-zinc-800 bg-black/50 p-2 shadow-2xl backdrop-blur-sm overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                  <img 
                    src={nullTgScreenshot} 
                    alt="Telegram Interface" 
                    className="rounded-xl w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            </div>
         </div>
      </section>

      {/* Cross-Sell Section */}
      <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto flex flex-col items-center"
        >
          <Shield className="w-12 h-12 text-zinc-500 mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 text-zinc-300">EXPLORE THE MONOCHROME</h2>
          <p className="font-mono text-zinc-500 mb-10">DISCOVER BARRY X MD — MULTI-DEVICE ARCHITECTURE</p>
          
          <Link href="/barry-x-md" className="group relative px-8 py-4 border border-zinc-700 bg-zinc-900/50 hover:bg-white text-zinc-300 hover:text-black font-display font-bold tracking-widest uppercase transition-all duration-300 backdrop-blur-sm overflow-hidden flex items-center gap-3">
            <span className="relative z-10">INITIALIZE BARRY X</span>
            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
