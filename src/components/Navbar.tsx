import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${scrolled || mobileMenuOpen ? 'bg-background/95 backdrop-blur-3xl border-b border-slate-200 py-4 md:py-6' : 'bg-transparent py-4 md:py-10'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0" onClick={closeMenu}>
          <img src="/1000262746.png" alt="Jaipur Netralaya Logo" className="h-16 md:h-24 lg:h-28 w-auto object-contain transition-all duration-300" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-8">
          <Link to="/about" className="font-sans text-xs tracking-[0.2em] uppercase text-slate-600 hover:text-slate-900 transition-colors">Legacy</Link>
          <Link to="/treatments" className="font-sans text-xs tracking-[0.2em] uppercase text-slate-600 hover:text-slate-900 transition-colors">Clinical</Link>
          <Link to="/doctors" className="font-sans text-xs tracking-[0.2em] uppercase text-slate-600 hover:text-slate-900 transition-colors">Surgeons</Link>
          <Link to="/insurance" className="font-sans text-xs tracking-[0.2em] uppercase text-slate-600 hover:text-slate-900 transition-colors">TPA & Insurance</Link>
          <Link to="/#hospital-tour" className="font-sans text-xs tracking-[0.2em] uppercase text-slate-600 hover:text-slate-900 transition-colors">Hospital Tour</Link>
          <Link to="/nabh-accreditation" className="font-sans text-xs tracking-[0.2em] uppercase text-accent-500 hover:text-accent-600 font-bold transition-colors">NABH Accredited</Link>
          <Link to="/appointment" className="font-sans text-xs tracking-[0.2em] uppercase text-white bg-accent-500 px-6 py-3 rounded-full hover:bg-accent-600 transition-colors duration-300 shadow-md">
            Consult
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="xl:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 p-2 focus:outline-none">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-3xl border-b border-slate-200 shadow-xl overflow-hidden flex flex-col py-6 px-6 gap-6">
          <Link to="/about" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] uppercase text-slate-700 hover:text-accent-500 transition-colors block py-2">Legacy</Link>
          <Link to="/treatments" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] uppercase text-slate-700 hover:text-accent-500 transition-colors block py-2">Clinical</Link>
          <Link to="/doctors" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] uppercase text-slate-700 hover:text-accent-500 transition-colors block py-2">Surgeons</Link>
          <Link to="/insurance" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] uppercase text-slate-700 hover:text-accent-500 transition-colors block py-2">TPA & Insurance</Link>
          <Link to="/#hospital-tour" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] uppercase text-slate-700 hover:text-accent-500 transition-colors block py-2">Hospital Tour</Link>
          <Link to="/nabh-accreditation" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] uppercase text-accent-500 font-bold hover:text-accent-600 transition-colors block py-2">NABH Accredited</Link>
          <Link to="/appointment" onClick={closeMenu} className="font-sans text-sm tracking-[0.2em] uppercase text-accent-500 font-semibold transition-colors block py-2">Consult</Link>
          
          <div className="border-t border-slate-200 pt-6 mt-2 flex items-center gap-6">
            <a href="https://www.facebook.com/share/1EMmQJt7gi/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 font-sans text-sm uppercase tracking-widest">Facebook</a>
            <a href="https://www.instagram.com/jaipur_netralaya?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 font-sans text-sm uppercase tracking-widest">Instagram</a>
          </div>
        </div>
      )}
    </nav>
  );
}
