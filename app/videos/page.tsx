import { Section, SectionTitle, Button, SocialLinks, VideoCard } from '@/components';
import { images, videos } from '@/lib/media';

const featuredVideos = [
  {
    title: 'Add Paystack Payment to your Website in 15 minutes!',
    description: 'A simple step-by-step tutorial on integrating Paystack payments',
    thumbnail: images.videoPaystack,
    video: videos.videoPaystack,
    link: 'https://youtu.be/wUhrFX8klSU',
  },
  {
    title: 'Master CSS Positioning in Just 13 Minutes! 🚀',
    description: 'A short tutorial on relative, absolute, fixed, and sticky positioning.',
    thumbnail: images.videoCss,
    video: videos.videoCss,
    link: 'https://youtu.be/j-uA03t_edM',
  },
  {
    title: 'LeetCode 35 – Search Insert Position ',
    description: 'Solve LeetCode with Binary Search.',
    thumbnail: images.videoLeetcode,
    video: videos.videoLeetcode,
    link: 'https://youtu.be/nyGLjvQ5S5E',
  },
  {
    title: 'How to Install Ubuntu on MacOS Apple Silicon (M1/M2/M3)',
    description: 'A step-by-step guide to dual boot Ubuntu on Apple Silicon Macs',
    thumbnail: images.videoUbuntu,
    video: videos.videoUbuntu,
    link: 'https://youtu.be/YC4y4X66M_g',
  },
  {
    title: 'Easy Email Authentication with Firebase, Next.js, Zod, React Hook Form, NextUI',
    description: 'Email/password authentication flow tutorial',
    thumbnail: images.videoEmail,
    video: videos.videoEmail,
    link: 'https://youtu.be/-D447eOOCOo',
  },
  {
    title: 'ShadCN vs NextUI | Which UI Library is Best for Your React Projects?',
    description: ' Pros and cons of both libraries',
    thumbnail: images.videoShadcn,
    video: videos.videoShadcn,
    link: 'https://youtu.be/Yv_siNEJSxo',
  },
 
];

const categories = [
  { name: 'Coding Tutorials', count: '70+' },
  { name: 'Tech Talks', count: '10+' },
  { name: 'Lifestyle', count: '5+' },
];

export default function Videos() {
  return (
    <>
      {/* Featured Content First */}
      <Section>
        <div className="animate-fade-in-up">
          <SectionTitle>Featured Videos</SectionTitle>
          <p className="text-accent/70 max-w-2xl mb-12">
            Tutorials, talks, and behind-the-scenes content exploring software development, 
            human-centered design, and the journey of building a career in tech.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.map(({ title, description, thumbnail, video, link }, i) => (
            <div 
              key={title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <VideoCard
                title={title}
                description={description}
                thumbnail={thumbnail}
                videoSrc={video}
                href={link}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8 animate-fade-in-up">
          <Button 
            href="https://www.youtube.com/channel/UCtiCkq_WYOREO2a6QB6u-PQ#/" 
            external
          >
            See More Videos
          </Button>
        </div>
      </Section>

      {/* Content Categories */}
      <Section>
        <SectionTitle>Content Categories</SectionTitle>
        <div className="grid grid-cols-3 gap-6 animate-fade-in-up">
          {categories.map(({ name, count }) => (
            <div key={name} className="text-center p-6 border border-accent/20 rounded-lg hover:border-accent/50 transition-colors group">
              <h3 className="text-3xl font-bold mb-2 group-hover:scale-105 transition-transform">{count}</h3>
              <p className="text-accent/60">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Subscribe CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto py-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
          <p className="text-accent/70 mb-8">
            Subscribe to get notified about new tutorials, HCI explorations, and content 
            on building technology that works for humans.
          </p>
          <div className="flex justify-center mb-8">
            <Button 
              href="https://youtube.com/@WithGbemi?si=y2W-I4caCrw1v-89" 
              external
            >
              Subscribe to Channel
            </Button>
          </div>
          {/* <SocialLinks /> */}
        </div>
      </Section>
    </>
  );
}
