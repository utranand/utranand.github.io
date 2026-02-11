import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8">
        {/* X-AI Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neon-cyan flex items-center justify-center">
            <span className="text-ai-bg font-bold text-sm">X</span>
          </div>
          <span className="font-semibold text-white tracking-wide">X-AI</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 text-gray-300 hover:text-neon-cyan transition-colors text-sm font-medium"
          >
            Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 text-gray-300 hover:text-neon-cyan transition-colors text-sm font-medium"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
