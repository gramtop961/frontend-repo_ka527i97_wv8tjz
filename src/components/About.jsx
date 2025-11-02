import React, { useEffect, useState } from 'react';
import { Award, Briefcase, LineChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Abdulrahman orchestrated a seamless digital transformation across our divisions — efficiency skyrocketed and decision cycles shortened dramatically.',
    name: 'M. Al Harbi',
    title: 'COO, Gulf Industrial Group',
  },
  {
    quote:
      'His ability to connect commercial strategy with technology execution is world-class. We saw measurable growth within the first quarter.',
    name: 'L. Carter',
    title: 'VP Strategy, Northbridge Consulting',
  },
  {
    quote:
      'A calm leader with a cinematic vision. He turned complexity into clarity and delivered results ahead of schedule.',
    name: 'S. Khan',
    title: 'Director, Horizon Ventures',
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="relative w-full bg-[#0a1020] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background:radial-gradient(600px_circle_at_20%_0%,#183058_0,transparent_50%),radial-gradient(500px_circle_at_80%_0%,#0f2247_0,transparent_50%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
          <p className="mt-4 text-white/80">
            Abdulrahman Bazarah is a Business Development Director and Digital Transformation Expert
            recognized for architecting growth engines and modernizing operations. He merges
            commercial acumen with creative technology to unlock scalable impact.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <Award className="mb-2 h-5 w-5 text-amber-400" />
              <p className="text-sm text-white/60">Global Innovation Award</p>
              <p className="text-sm font-medium">2022</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <Briefcase className="mb-2 h-5 w-5 text-amber-400" />
              <p className="text-sm text-white/60">Programs Delivered</p>
              <p className="text-sm font-medium">40+ Enterprise</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <LineChart className="mb-2 h-5 w-5 text-amber-400" />
              <p className="text-sm text-white/60">Average ROI</p>
              <p className="text-sm font-medium">3.2x</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1020]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-medium text-white">Professional Portrait</p>
              <p className="text-xs text-white/70">Placeholder photo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl px-6">
        <h3 className="text-xl font-semibold text-white/90">What clients say</h3>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="min-h-[120px]"
            >
              <p className="text-lg text-white/90">“{testimonials[index].quote}”</p>
              <p className="mt-3 text-sm text-white/60">
                — {testimonials[index].name}, {testimonials[index].title}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? 'bg-amber-400' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
