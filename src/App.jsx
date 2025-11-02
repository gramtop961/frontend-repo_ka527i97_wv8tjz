import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  // Programmatically set a simple "AB" favicon without editing index.html
  useEffect(() => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    // Navy circle background
    ctx.fillStyle = '#0a1020';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();
    // Gold text
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 28px Inter, system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AB', size / 2, size / 2 + 2);

    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = canvas.toDataURL('image/png');
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a1020] text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a1020]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 text-[#0a1020] font-bold">AB</div>
            <span className="text-sm text-white/80">Abdulrahman Bazarah</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-[#0b1228] py-8 text-white/60">
        <div className="mx-auto max-w-6xl px-6 text-sm">© {new Date().getFullYear()} Abdulrahman Bazarah. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
