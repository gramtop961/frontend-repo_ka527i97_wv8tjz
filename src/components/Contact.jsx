import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const subject = encodeURIComponent(`Inquiry for Abdulrahman Bazarah from ${name}`);
    const body = encodeURIComponent(
      `Hello Abdulrahman,\n\n${form.get('message')}\n\n— ${name}\n${form.get('email')}`
    );
    window.location.href = `mailto:abdulrahman@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a1020] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_circle_at_80%_0%,#1b2f5a_0,transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s work together</h2>
            <p className="mt-2 text-white/70">
              Tell me about your goals in business development or digital transformation.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="mailto:abdulrahman@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-amber-400" /> Email
              </a>
              <a
                href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4 text-amber-400" /> LinkedIn
              </a>
              <a
                href="#" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
              >
                <Globe className="h-4 w-4 text-amber-400" /> Website
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4">
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-[#0d1732] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/40"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-lg border border-white/10 bg-[#0d1732] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/40"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your message"
                className="w-full rounded-lg border border-white/10 bg-[#0d1732] px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/40"
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-amber-500 px-4 py-2 text-sm font-medium text-[#0a1020] shadow-lg shadow-yellow-500/20 transition hover:from-yellow-400 hover:to-amber-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
