import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto px-6 py-16"
    >
      <div className="glass rounded-3xl p-12 border-2 border-dashed border-neon-purple/30 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Ready to Build Something{' '}
          <span className="text-neon-cyan italic">Extraordinary</span>?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
        >
          Let's collaborate on your next AI-powered project
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-neon-purple/20 border-2 border-neon-purple rounded-full text-neon-purple font-semibold text-lg transition-all hover:bg-neon-purple/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
        >
          Initiate Contact
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.section>
  );
}
