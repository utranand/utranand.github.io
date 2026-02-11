import { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="text-3xl font-bold text-white">Recent Deployments</h2>
        <span className="text-neon-cyan font-mono text-sm">[12]</span>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
}
