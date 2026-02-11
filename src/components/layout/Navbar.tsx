
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between max-w-7xl mx-auto border border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neon-cyan rounded-full blur-[2px] opacity-80" />
          <span className="font-bold tracking-tighter text-white">9Arms</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-xs font-medium text-slate-400 hover:text-neon-cyan uppercase tracking-widest transition-colors">
            Work
          </button>
          <button className="bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neon-cyan/20 transition-all">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}
