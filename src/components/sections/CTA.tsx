export default function CTA() {
  return (
    <section className="pt-8 text-center relative max-w-4xl mx-auto px-4 pb-20">
      <div className="glass rounded-2xl p-8 border-dashed border border-white/20">
        <h3 className="text-xl font-bold text-white mb-2">Ready to evolve?</h3>
        <p className="text-sm text-slate-400 mb-6">Let's build the next generation of intelligent software together.</p>
        <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold tracking-widest text-xs uppercase transition-all">
          Initiate Contact
        </button>
      </div>
      
      <div className="mt-12 flex flex-col items-center gap-2 opacity-30">
        <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white">Encrypted Connection Established</p>
        <div className="flex gap-1">
          <div className="w-4 h-1 bg-neon-cyan rounded-full" />
          <div className="w-2 h-1 bg-neon-cyan/50 rounded-full" />
          <div className="w-1 h-1 bg-neon-cyan/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}
