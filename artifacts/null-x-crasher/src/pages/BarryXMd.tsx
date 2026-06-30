import { motion, Variants } from "framer-motion";
import { Shield, Zap, Terminal, Settings, ChevronLeft, Power, Box, Cpu } from "lucide-react";
import barryTgScreenshot from "@assets/Screenshot_20260630-143240_1782826901617.png";
import ownerScreenshot from "@assets/Screenshot_20260630-143008_1782826901633.png";
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
      staggerChildren: 0.15
    }
  }
};

export default function BarryXMd() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/30 pt-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-10 pb-20 px-6 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black" />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9Im5vbmUiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9zdmc+')] opacity-40" />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeIn} className="mb-8 relative group">
            <div className="absolute inset-0 bg-white/20 blur-[30px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
            <Shield className="w-20 h-20 md:w-24 md:h-24 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          </motion.div>

          <motion.div variants={fadeIn} className="flex items-center gap-3 border border-white/20 bg-white/5 px-5 py-2 rounded-full backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
            <span className="font-mono text-sm text-zinc-300 font-bold tracking-[0.2em]">SYSTEM ONLINE</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-8xl font-display font-black leading-none tracking-tight uppercase mb-6"
          >
            <span className="block text-zinc-500 mb-2">BARRY DEE</span>
            <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              X-MD
            </span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-zinc-400 font-sans max-w-2xl leading-relaxed mb-10 border-x border-white/10 px-6">
            CONNECTED TO BARRY DEE MULTI-DEVICE SYSTEM
          </motion.p>
          
          <motion.div variants={fadeIn}>
            <a 
              href="https://t.me/heisbarry_xmdbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-display font-bold text-lg tracking-widest uppercase overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-3">
                <Power className="w-5 h-5" />
                Connect Now
              </span>
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-zinc-600 tracking-widest">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative border-t border-white/10 bg-[#020202]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
            <div>
              <h2 className="font-display font-bold text-3xl text-white">CORE MODULES</h2>
              <p className="font-mono text-zinc-500 mt-2">BARRY_X_MD // ARCHITECTURE</p>
            </div>
            <div className="hidden md:flex gap-2">
              <div className="w-2 h-2 bg-white/20" />
              <div className="w-2 h-2 bg-white/50" />
              <div className="w-2 h-2 bg-white" />
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeIn} className="glass-card-silver p-8 group hover:bg-white/5 transition-colors">
              <Shield className="w-10 h-10 text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-display font-bold text-xl text-white mb-3 tracking-wide">GROUP PROTECTION</h3>
              <p className="text-zinc-400 font-sans leading-relaxed mb-6">
                Fortify your community with uncompromising security protocols.
              </p>
              <ul className="space-y-2 font-mono text-sm text-zinc-500">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white" /> Anti-kick mechanism</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white" /> Advanced Anti-spam</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white" /> Smart Admin Control</li>
              </ul>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeIn} className="glass-card-silver p-8 group hover:bg-white/5 transition-colors">
              <Cpu className="w-10 h-10 text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-display font-bold text-xl text-white mb-3 tracking-wide">AI MODULE</h3>
              <p className="text-zinc-400 font-sans leading-relaxed mb-6">
                Next-generation cognitive processing for natural interactions.
              </p>
              <ul className="space-y-2 font-mono text-sm text-zinc-500">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white" /> Contextual Smart Replies</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white" /> Automated Assistant</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white" /> Intelligent Commands</li>
              </ul>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeIn} className="glass-card-silver p-8 group hover:bg-white/5 transition-colors">
              <Zap className="w-10 h-10 text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-display font-bold text-xl text-white mb-3 tracking-wide">FUN & UTILITIES</h3>
              <p className="text-zinc-400 font-sans leading-relaxed mb-6">
                Engage users with integrated entertainment subsystems.
              </p>
              <ul className="space-y-2 font-mono text-sm text-zinc-500">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white" /> Interactive Games</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white" /> Media Processing Tools</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white" /> Dynamic Entertainment</li>
              </ul>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeIn} className="glass-card-silver p-8 group hover:bg-white/5 transition-colors bg-gradient-to-br from-white/5 to-transparent border-white/30 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <Settings className="w-40 h-40" />
              </div>
              <Settings className="w-10 h-10 text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity relative z-10" />
              <h3 className="font-display font-bold text-xl text-white mb-3 tracking-wide relative z-10">OWNER PANEL</h3>
              <p className="text-zinc-400 font-sans leading-relaxed mb-6 relative z-10">
                Absolute authority over every parameter of the system.
              </p>
              <ul className="space-y-2 font-mono text-sm text-zinc-300 relative z-10">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white shadow-glow-white" /> Full Configuration Control</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white shadow-glow-white" /> Sudo Access Level</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white shadow-glow-white" /> Executive Power Tools</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interface Showcase & Status Bar */}
      <section className="py-24 px-6 bg-black relative border-y border-white/10">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                {/* Status Bar */}
                <div className="absolute -top-12 left-0 right-0 border border-white/20 bg-white/5 backdrop-blur-md px-6 py-4 flex items-center justify-between font-mono text-sm z-20">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-glow-white" />
                    <span className="text-white tracking-widest">STATUS: ONLINE</span>
                  </div>
                  <div className="text-zinc-500 hidden md:block">
                    BUILT FOR SPEED • POWER • CONTROL
                  </div>
                  <div className="flex gap-1">
                    <Box className="w-4 h-4 text-zinc-400" />
                    <Terminal className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>
                
                <div className="relative pt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent blur-3xl rounded-full opacity-30" />
                  <img 
                    src={barryTgScreenshot} 
                    alt="BARRY X MD Interface" 
                    className="relative z-10 w-full h-auto rounded-lg border border-white/20 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 flex flex-col items-start"
            >
              <h2 className="font-display font-bold text-4xl mb-6 leading-tight">
                FLAWLESS <br/>
                <span className="text-zinc-500">EXECUTION.</span>
              </h2>
              <p className="text-zinc-400 font-sans text-lg mb-8 leading-relaxed">
                The Multi-Device architecture ensures your commands are processed instantly across all connected sessions. No delays, no dropped packets, just pure, unadulterated performance.
              </p>
              
              <div className="flex items-center gap-6 mt-4">
                <img 
                  src={ownerScreenshot} 
                  alt="Owner Profile" 
                  className="w-16 h-16 rounded-full border-2 border-white/30 grayscale object-cover"
                />
                <div>
                  <div className="font-mono text-white mb-1">ARCHITECT: @MR_BARRY_DEE</div>
                  <div className="font-sans text-sm text-zinc-500">System Creator & Maintainer</div>
                </div>
              </div>
            </motion.div>

         </div>
      </section>

      {/* Bottom Nav / Cross Sell */}
      <section className="py-20 px-6 flex justify-center">
        <Link href="/" className="group flex items-center gap-4 text-zinc-500 hover:text-white transition-colors">
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
          <span className="font-display font-bold tracking-widest uppercase">RETURN TO NULL X CRASHER</span>
        </Link>
      </section>

    </div>
  );
}
