import Image from 'next/image';
import { Section, SectionTitle, Button, SocialLinks, VideoCard } from '@/components';
import { images } from '@/lib/media';

const engagements = [
  {
    number: '01',
    event: 'Ogun Tech Summit 2023',
    topic: 'Navigating the Future of Artificial Intelligence: Challenges and Opportunities for Tech Careers',
    thumbnail: images.talksOgun,
  },
  {
    number: '02',
    event: 'Women Tech Makers Ibadan IWD 2024',
    topic: 'Beyond Code: Crafting a Tech Career and Advocating Diversity in Tech',
    thumbnail: images.talksWTM,
  },
  {
    number: '03',
    event: 'SCA Abeokuta IWD 2024',
    topic: 'Determination for Women Pursuing Tech Careers',
    thumbnail: images.talksSca,
  },
  {
    number: '04',
    event: 'Tech Meet 3.0',
    topic: 'The Role of LLMs and AI in Coding',
    thumbnail: images.talksTechmeet,
  },
  {
    number: '05',
    event: 'Ogun Tech Summit 2024',
    topic: 'Overcoming Challenges and Building a Successful Career for Women in Tech',
    thumbnail: images.talksOgun2,
  },
  {
    number: '06',
    event: 'NACOS Conference,University of Ibadan',
    topic: 'Tech Fusion: From Classroom to Career',
    thumbnail: images.talksNacos,
  },
   {
    number: '07',
    event: 'Tech Forge Conference',
    topic: 'Women in Tech: Breaking Barriers, Building Bridges',
    thumbnail: images.talksTechForge,
  },
];

const speakingTopics = [
  'Human-Computer Interaction & Design Research',
  'Career Transitions & Building in Public',
  'Diversity & Inclusion in Tech',
  'Web Development & Modern Frameworks',
  'Cognitive Engineering in Everyday Products',
];

export default function Talks() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 animate-fade-in-up">
            <p className="text-accent/60 text-sm tracking-wide uppercase mb-4">
              Speaker · Educator · Community Builder
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Speaking &<br />Engagements
            </h1>
            <p className="text-accent/70 text-lg max-w-lg mb-8">
              I speak at conferences, universities, and community events about technology, 
              design, and the human side of building software. My talks blend technical 
              insight with ideas from HCI and cognitive engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="https://drive.google.com/file/d/1WeusoapHzAK7xaxAivLtRyT0lYwammEE/view?usp=drive_link" 
                external
              >
                View Gallery
              </Button>
              <Button 
                href="https://www.linkedin.com/in/gbemisola-oladetoun-3aa7071aa/" 
                variant="outline" 
                external
              >
                LinkedIn
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in animate-delay-200">
            <div className="relative w-full max-w-md mx-auto h-96">
              <Image
                src={images.talksSpeaking}
                alt="Gbemisola speaking at an event"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Speaking Topics */}
      <Section>
        <SectionTitle>Topics I Speak On</SectionTitle>
        <div className="flex flex-wrap gap-3 animate-fade-in-up">
          {speakingTopics.map((topic) => (
            <span 
              key={topic}
              className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm hover:bg-accent/20 transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
        
      </Section>

      {/* Past Engagements with Images */}
      <Section>
        <SectionTitle>Past Engagements</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagements.map(({ number, event, topic, thumbnail }, i) => (
            <div 
              key={number}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <VideoCard
                title={event}
                description={topic}
                thumbnail={thumbnail}          
                href="https://drive.google.com/file/d/1WeusoapHzAK7xaxAivLtRyT0lYwammEE/view"
              />
            </div>
          ))}
        </div>
        
      </Section>

      {/* Book Me Section */}
      <Section>
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Interested in having me speak?</h2>
          <p className="text-accent/70 mb-8">
            I&apos;m available for conferences, workshops, panels, and university events—both 
            in Nigeria and internationally. Let&apos;s explore how interactive systems shape 
            human thinking, together.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button href="mailto:demilad1998@gmail.com" external>
              Get in Touch
            </Button>
            <Button 
              href="https://www.youtube.com/channel/UCtiCkq_WYOREO2a6QB6u-PQ" 
              variant="outline" 
              external
            >
              Watch Past Talks
            </Button>
          </div> */}
            <div className="text-center mt-8 animate-fade-in-up">
          <Button 
            href="https://drive.google.com/file/d/1WeusoapHzAK7xaxAivLtRyT0lYwammEE/view" 
            external
          >
            See More Talks
          </Button>
        </div>
          {/* <SocialLinks /> */}
        </div>
      </Section>
    </>
  );
}
