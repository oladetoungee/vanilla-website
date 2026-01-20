import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { images } from '@/lib/media';

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-accent/20 relative">
              <Image 
                src={images.profileLogo}
                alt="Gbemisola"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
            <div>
              <p className="text-accent/50 text-sm mb-1">Call</p>
              <p className="text-accent">+372 55 643 395</p>
            </div>
            <div>
              <p className="text-accent/50 text-sm mb-1">Email</p>
              <p className="text-accent">gbemioladetoun@gmail.com</p>
            </div>
          </div>

          <SocialLinks />
        </div>

        <p className="text-accent/50 text-sm text-center mt-8">
          © {new Date().getFullYear()} Gbemisola Oladetoun
        </p>
      </div>
    </footer>
  );
}
