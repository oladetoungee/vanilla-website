import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      {children}
    </h2>
  );
}
