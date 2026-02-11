import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Architecting neural pathways between imagination and implementation.';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-cyan/30"
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          <span className="text-sm text-gray-300">Available for Innovation</span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Building the Future
          <br />
          <span className="text-neon-cyan italic">with AI</span>
        </h1>

        {/* Typewriter Text */}
        <p className="text-xl md:text-2xl text-gray-400 min-h-[3rem]">
          {text}
          <span className="inline-block w-0.5 h-6 bg-neon-cyan ml-1 animate-pulse" />
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-neon-purple/20 border-2 border-neon-purple rounded-full text-neon-purple font-semibold text-lg transition-all hover:bg-neon-purple/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
        >
          Explore Systems
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
}
