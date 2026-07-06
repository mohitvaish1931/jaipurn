import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${scrolled ? 'bg-background/80 backdrop-blur-3xl border-b border-slate-200 py-6' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img src="/1000262746.png" alt="Jaipur Netralaya Logo" className="h-24 md:h-28 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="font-sans text-xs tracking-[0.2em] uppercase text-slate-600 hover:text-slate-900 transition-colors">Legacy</a>
          <a href="#treatments" className="font-sans text-xs tracking-[0.2em] uppercase text-slate-600 hover:text-slate-900 transition-colors">Clinical</a>
          <a href="#doctors" className="font-sans text-xs tracking-[0.2em] uppercase text-slate-600 hover:text-slate-900 transition-colors">Surgeons</a>
          <a href="#booking" className="font-sans text-xs tracking-[0.2em] uppercase text-white bg-accent-500 px-6 py-3 rounded-full hover:bg-accent-600 transition-colors duration-300 shadow-md">
            Consult
          </a>
        </div>
      </div>
    </nav>
  );
}
