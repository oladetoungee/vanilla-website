'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  description?: string;
  thumbnail: string;
  videoSrc?: string;
  href: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
}

export default function VideoCard({ 
  title, 
  description, 
  thumbnail, 
  videoSrc, 
  href,
  aspectRatio = 'video'
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && videoSrc) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative ${aspectClasses[aspectRatio]} overflow-hidden bg-surface`}>
        <Image
          src={thumbnail}
          alt={title}
          fill
          className={`object-cover transition-all duration-500 ${
            isHovered && videoSrc ? 'opacity-0' : 'opacity-100'
          } group-hover:scale-105`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-4 bg-surface">
        <h3 className="font-semibold text-lg leading-snug">{title}</h3>
        {description && (
          <p className="text-accent/60 text-sm mt-1">{description}</p>
        )}
      </div>
    </a>
  );
}
