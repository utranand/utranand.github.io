import { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {children}
    </div>
  );
}
