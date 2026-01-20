import { Section, SectionTitle, VideoCard } from '@/components';
import { images, videos } from '@/lib/media';

const projects = [

  {
    title: 'Lawyered Up',
    description: 'Legal Tech Platform',
    url: 'https://app.lawyeredapp.com/',
    thumbnail: images.projectLawyered,
    video: videos.projectLawyered,
  },
  {
    title: 'CarQuest',
    description: 'Car Rental App',
    url: '#',
    thumbnail: images.projectCarQuest,
    video: videos.projectCarQuest,
  },
  {
    title: 'FleetFox',
    description: 'Fleet Management Platform',
    url: 'https://fleetfox.eu/',
    thumbnail: images.projectFleetFox,
    video: videos.projectFleetFox,
  },

  {
    title: 'WJ Photography',
    description: 'Photography Portfolio & Academy',
    url: 'https://walter-photography.vercel.app/',
    thumbnail: images.projectWJPhotography,
    video: videos.projectWJPhotography,
  },
   {
    title: 'Gregory Medical Journal',
    description: 'Research Journal Platform',
    url: 'https://www.gregorymedicaljournal.org/',
    thumbnail: images.projectGregory,
    video: videos.projectGregory,
  },
  {
    title: 'Simpool',
    description: 'Digital OS for African SMEs',
    url: '#',
    thumbnail: images.projectSimpool,
    video: videos.projectSimpool,
  },
  
];

export default function Portfolio() {
  return (
    <Section>
      <div className="animate-fade-in-up">
        <SectionTitle>Projects</SectionTitle>
        <p className="text-accent/70 max-w-2xl mb-12">
          A selection of work across industries—from legal tech and logistics to blockchain 
          and community platforms. Each project reflects my focus on building interfaces 
          that respect how people actually think and work.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ title, description, url, thumbnail, video }, i) => (
          <div 
            key={title} 
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <VideoCard
              title={title}
              description={description}
              thumbnail={thumbnail}
              videoSrc={video}
              href={url}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
