'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { images } from '@/lib/media';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/talks', label: 'Talks' },
  { href: '/videos', label: 'Videos' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-accent/20">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-accent/20 relative">
            <Image 
              src={images.profileLogo}
              alt="Gbemisola"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors hover:text-accent ${
                  pathname === href 
                    ? 'text-accent border-b-2 border-accent pb-1' 
                    : 'text-accent/70'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu pathname={pathname} />
      </nav>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label htmlFor="mobile-menu" className="text-accent text-2xl cursor-pointer">
        ☰
      </label>
      <div className="fixed inset-0 top-[73px] bg-black/95 -translate-x-full peer-checked:translate-x-0 transition-transform">
        <ul className="flex flex-col p-6 gap-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-lg block py-2 ${
                  pathname === href ? 'text-accent' : 'text-accent/70'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
