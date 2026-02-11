import GlassCard from './GlassCard';

export default function StatsCard() {
  return (
    <GlassCard span="small">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-5xl font-bold text-neon-cyan mb-2">12+</div>
        <p className="text-sm text-gray-400">Projects Deployed</p>
      </div>
    </GlassCard>
  );
}
