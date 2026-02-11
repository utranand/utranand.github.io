import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="text-center space-y-4 py-10 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-cyan/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-purple/20 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan" />
        </span>
        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
          Available for Innovation
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-extrabold tracking-tight text-white leading-tight"
      >
        Building the Future <br />
        <span className="text-neon-cyan italic">with AI</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-400 text-sm max-w-xs mx-auto typewriter-cursor"
      >
        Architecting neural pathways & LLMs for the next digital frontier.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pt-4 flex justify-center gap-3"
      >
        <button className="bg-neon-cyan text-ai-bg px-6 py-3 rounded-xl font-bold text-sm glow-cyan flex items-center gap-2 hover:opacity-90 transition-opacity">
          Explore Systems <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </motion.div>
    </section>
  );
}
