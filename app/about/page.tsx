import { Section, SectionTitle, Button } from "@/components";

const skills = [
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "N" },
  { name: "Vue.js", icon: "V" },
  { name: "Laravel", icon: "L" },
  { name: "Solidity", icon: "S" },
  { name: "Node.js", icon: "⬢" },
];

const experience = [
  {
    period: "2025 - Present",
    company: "Tallinn University",
    role: "MSc Human-Computer Interaction",
    type: "education",
  },
  {
    period: "2022 - 2024",
    company: "Legal Tech Startup",
    role: "Software Engineer",
    type: "work",
  },
  {
    period: "2023 - 2024",
    company: "MentorsHub",
    role: "Software Engineer",
    type: "work",
  },
  {
    period: "2021 - 2022",
    company: "Logistics & Fleet Management",
    role: "Technical Operations Lead",
    type: "work",
  },
  {
    period: "2022 - Present",
    company: "She Code Africa Abeokuta",
    role: "Chapter Lead",
    type: "impact",
  },
];

const education = [
  {
    period: "2025 - Present",
    institution: "Tallinn University, Estonia",
    degree: "MSc Human-Computer Interaction",
  },
  {
    period: "2017 - 2022",
    institution: "National Open University of Nigeria",
    degree: "BSc Chemistry",
  },
];

const stats = [
  { value: "30+", label: "Articles" },
  { value: "100+", label: "Videos" },
  { value: "15+", label: "Talks" },
];

export default function About() {
  return (
    <>
      <Section>
        <div className="animate-fade-in-up">
          <SectionTitle>About</SectionTitle>
          <div className="max-w-3xl space-y-6 text-accent/80 leading-relaxed">
            <p className="text-xl">
              I&apos;m a software engineer and researcher exploring the
              intersection of technology, cognition, and human experience.
            </p>
            <p>
              Currently pursuing my Master&apos;s in Human-Computer Interaction
              at Tallinn University, I&apos;m drawn to understanding how
              interactive systems shape human thinking—and how we can design
              technology that amplifies rather than diminishes our cognitive
              capabilities.
            </p>
            <p>
              My engineering background spans multiple industries: legal tech,
              logistics, and fleet management. I work across the stack with
              JavaScript, TypeScript, React, Next.js, Vue.js, and Laravel, using
              an ever-expanding toolkit to build products that prioritize both
              technical excellence and human-centered design.
            </p>
            <p>
              Alongside my professional work, I create educational content on
              YouTube, where I break down software engineering concepts, web
              technologies, and design-thinking principles for early-career
              developers and curious technologists to make complex ideas
              accessible without oversimplifying them.
            </p>
            <p>
              Beyond code, I&apos;m passionate about design research,
              co-creation, and the subtle ways cognitive engineering shows up in
              everyday digital experiences. I speak at conferences and community
              events, exploring these ideas with audiences across Nigeria and
              internationally.
            </p>
          </div>
        </div>
      </Section>

      {/* Social Impact Section */}
      <Section>
        <SectionTitle>Social Impact</SectionTitle>
        <div className="grid lg:grid-cols-2 gap-12 animate-fade-in-up">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <span className="text-sm font-medium">
                Chapter Lead — She Code Africa Abeokuta
              </span>
            </div>
            <p className="text-accent/80 leading-relaxed mb-6">
              I lead initiatives to empower women in technology through
              mentorship, hands-on training, and community building. Our chapter
              creates accessible pathways into tech, focusing on practical
              skills and real-world opportunities.
            </p>
            <p className="text-accent/80 leading-relaxed mb-6">
              This work reflects my belief that technology should be built
              by—and for—everyone. Diversity isn&apos;t just ethical; it&apos;s
              essential for building systems that truly serve human needs.
            </p>
            <Button
              href="https://drive.google.com/file/d/1ZbJ96u4lJWxaGceR7sUgX4iYFB02zCDq/view?usp=drive_link"
              variant="outline"
              external
            >
              Learn More
            </Button>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Impact Highlights</h3>
            <ul className="space-y-3">
              {[
                "Trained 200+ women in web development through bootcamps",
                "Facilitated mentorship programs connecting beginners with industry professionals",
                "Led community events promoting diversity and inclusion in tech",
                "Created educational content reaching thousands across Nigeria",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-accent/70">
                  <span className="text-accent mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Tech Stack</SectionTitle>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 animate-fade-in-up">
          {skills.map(({ name, icon }, i) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 group"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-xl font-bold transition-all group-hover:bg-accent/20 group-hover:scale-105">
                {icon}
              </div>
              <span className="text-sm text-accent/70">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience & Education Side by Side */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-6">
              {experience
                .filter((e) => e.type === "work")
                .map(({ period, company, role }) => (
                  <div
                    key={company}
                    className="border-l-2 border-accent/30 pl-6 py-2 hover:border-accent/60 transition-colors"
                  >
                    <span className="text-sm text-accent/50">{period}</span>
                    <h3 className="text-lg font-semibold mt-1">{company}</h3>
                    <p className="text-accent/70">{role}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-100">
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-6">
              {education.map(({ period, institution, degree }) => (
                <div
                  key={institution}
                  className="border-l-2 border-accent/30 pl-6 py-2 hover:border-accent/60 transition-colors"
                >
                  <span className="text-sm text-accent/50">{period}</span>
                  <h3 className="text-lg font-semibold mt-1">{institution}</h3>
                  <p className="text-accent/70">{degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-3 gap-8 text-center animate-fade-in-up">
          {stats.map(({ value, label }) => (
            <div key={label} className="group">
              <h3 className="text-4xl md:text-5xl font-bold group-hover:scale-105 transition-transform">
                {value}
              </h3>
              <p className="text-accent/60 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center animate-fade-in-up">
          <Button
            href="https://docs.google.com/document/d/1XL9SNNVk7O10MG63n9LrfcZymXOg9sWGlW0yL8ODqWA/export?format=pdf"
            external
          >
            Download CV ↓
          </Button>
        </div>
      </Section>
    </>
  );
}
