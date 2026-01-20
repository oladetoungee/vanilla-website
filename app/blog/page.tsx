import Image from 'next/image';
import { Section, SectionTitle, Button } from '@/components';
import { images } from '@/lib/media';

const technicalPosts = [
  {
    title: 'Deploying an ERC20 Token on Kaia Network',
    date: 'July, 2025',
    url: 'https://medium.com/@gbemioladetoun/deploying-an-erc20-token-on-kaia-network-adec5e3f44ac',
    thumbnail: images.blogErc20,
  },
  {
    title: '13 Important Things to Include in your Portfolio Website',
    date: 'March, 2022',
    url: 'https://oladetoungee.hashnode.dev/13-important-things-to-include-in-your-portfolio-website',
    thumbnail: images.blogPortfolio,
  },
  {
    title: 'BigInt vs. parseInt in JavaScript',
    date: 'October, 2023',
    url: 'https://oladetoungee.hashnode.dev/bigint-vs-parseint-in-javascript-working-with-numbers',
    thumbnail: images.blogBigInt,
  },
 
];

const personalPosts = [
  {
    title: 'On Social Media and Influences',
    date: 'July, 2025',
    url: 'https://medium.com/@OladetounGbemisola/on-social-media-and-influences-c3628e57f16f',
    thumbnail: images.blogSocial,
  },
  {
    title: 'And the Woman in Christ?',
    date: 'March, 2025',
    url: 'https://medium.com/@OladetounGbemisola/and-the-woman-in-christ-1af9d2071162',
    thumbnail: images.blogInchrist,
  },
  {
    title: 'Good Girl No Dey Pay Oo',
    date: 'October, 2022',
    url: 'https://medium.com/@OladetounGbemisola/good-girl-no-dey-pay-oo-43e6190bd5ca',
    thumbnail: images.blogGoodgirl,
  },
 
];

const blogLinks = [
  { label: 'Hashnode (Technical)', url: 'https://oladetoungee.hashnode.dev/' },
  { label: 'Medium (Technical)', url: 'https://medium.com/@gbemioladetoun' },
  { label: 'Personal Blog', url: 'https://medium.com/@OladetounGbemisola' },
];

function PostCard({ title, date, url, thumbnail }: { title: string; date: string; url: string; thumbnail: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
      </div>
      <div className="p-4 bg-surface">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-sm text-accent/50">{date}</span>
        </div>
        <h3 className="font-semibold leading-snug line-clamp-2">{title}</h3>
        <p className="text-accent text-sm mt-3 group-hover:underline">Read →</p>
      </div>
    </a>
  );
}

export default function Blog() {
  return (
    <>
      <Section>
        <div className="animate-fade-in-up">
          <SectionTitle>Writing</SectionTitle>
          <p className="text-accent/70 max-w-2xl mb-8">
            I write about technology, human-computer interaction, and the intersections 
            of design and everyday life. Sometimes I explore ideas about society, mindset, 
            and what it means to build things that matter.
          </p>
        </div>
      </Section>

      <Section className="pt-0 border-t-0">
        <h3 className="text-xl font-semibold mb-8 animate-fade-in">Technical Writing</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalPosts.map((post, i) => (
            <div 
              key={post.title} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 border-t-0">
        <h3 className="text-xl font-semibold mb-8 animate-fade-in">Personal & Society</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalPosts.map((post, i) => (
            <div 
              key={post.title} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center animate-fade-in-up">
          <p className="text-accent/60 mb-6">Explore all my writing</p>
          <div className="flex flex-wrap justify-center gap-4">
            {blogLinks.map(({ label, url }) => (
              <Button key={label} href={url} variant="outline" external>
                {label} →
              </Button>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
