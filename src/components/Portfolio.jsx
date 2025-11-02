import React from 'react';
import { Rocket, Cog, Cpu } from 'lucide-react';

const items = [
  {
    title: 'Business Automation Suite',
    tag: 'Automation',
    icon: Cog,
    desc: 'End-to-end workflow automation reducing cycle time by 48% across operations.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Digital Strategy Playbook',
    tag: 'Strategy',
    icon: Rocket,
    desc: 'A growth blueprint aligning product, revenue, and data for executive teams.',
    image:
      'https://images.unsplash.com/photo-1551281044-8d8d0d8d0d66?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Creative Technology Lab',
    tag: 'Creative Tech',
    icon: Cpu,
    desc: 'Prototyping new experiences with AI, realtime data, and immersive content.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative w-full bg-[#0b1228] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_-10%,rgba(255,200,0,0.15),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
            <p className="mt-2 text-white/70">Automation, strategy, and creative technology programs.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1228] via-transparent to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#0a1020]/80 px-2 py-1 text-xs text-amber-300 ring-1 ring-white/10 backdrop-blur">
                  <item.icon className="h-3.5 w-3.5" /> {item.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
