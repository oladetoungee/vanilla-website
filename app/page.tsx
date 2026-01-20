import Image from 'next/image';
import { SocialLinks, Button } from '@/components';
import { images } from '@/lib/media';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-73px)] flex items-center bg-black">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-accent/60 text-sm tracking-wide uppercase animate-fade-in">
              Software Engineer · HCI Researcher · Speaker
            </p>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight animate-fade-in-up">
              Gbemisola<br />Oladetoun
            </h1>
            <p className="text-lg text-accent/70 max-w-md animate-fade-in-up animate-delay-100">
              I build thoughtful digital experiences and explore how interactive systems 
              shape the way we think, work, and connect.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
              <Button href="/portfolio" variant="outline">
                View Work
              </Button>
              <Button href="/talks" variant="outline">
                Speaking
              </Button>
            </div>

            <div className="pt-8 animate-fade-in-up animate-delay-300">
              <SocialLinks />
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-72 h-96 md:w-80 md:h-112">
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />
              <Image
                src={images.homePortrait}
                alt="Gbemisola"
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
