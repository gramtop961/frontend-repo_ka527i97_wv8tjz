import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScroll = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0a1020] to-[#0b1228] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020]/70 via-[#0a1020]/40 to-[#0a1020]/80 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
          Cinematic Portfolio
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow md:text-6xl">
          Abdulrahman Bazarah
        </h1>
        <p className="mt-3 text-lg text-white/80 md:text-xl">
          Business Development Director • Digital Transformation Expert
        </p>

        <button
          onClick={handleScroll}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-3 text-sm font-medium text-[#0a1020] shadow-lg shadow-yellow-500/20 transition hover:from-yellow-400 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
        >
          View My Work
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
