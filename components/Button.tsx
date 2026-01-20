import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline';
  external?: boolean;
}

export default function Button({ href, children, variant = 'primary', external }: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5';
  const variants = {
    primary: 'bg-accent text-black hover:bg-accent-dark',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-black',
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
