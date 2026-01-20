import React from 'react';
import { Linkedin, Github, Twitter, Youtube, Instagram } from 'lucide-react';

const socials: {
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}[] = [
  { href: 'https://www.linkedin.com/in/gbemisola-oladetoun-3aa7071aa/', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/oladetoungee', Icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com/OladetounGee', Icon: Twitter, label: 'Twitter' },
  { href: 'https://www.youtube.com/channel/UCtiCkq_WYOREO2a6QB6u-PQ', Icon: Youtube, label: 'YouTube' },
  { href: 'https://www.instagram.com/officialgbemmy/', Icon: Instagram, label: 'Instagram' },
];

export default function SocialLinks({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const sizeClass = size === 'sm' ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-base';
  const iconSize = size === 'sm' ? 16 : 20;

  return (
    <div className="flex items-center gap-3">
      {socials.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          aria-label={label}
          className={`${sizeClass} rounded-full bg-accent text-black flex items-center justify-center hover:scale-110 transition-transform`}
        >
          <Icon className='w-4 h-4' />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </div>
  );
}
