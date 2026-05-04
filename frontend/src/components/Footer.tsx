export default function Footer() {
  return (
    <footer className="bg-surface py-20 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display text-2xl font-medium text-slate-900 tracking-tight block mb-6">
              Jaipur Netralaya<span className="text-accent-500 text-3xl leading-none">.</span>
            </span>
            <p className="text-slate-600 font-sans font-light max-w-sm mb-8">
              160 A, Gopalpura Bypass Rd, opposite Tilak public school, Vishveshariya Nagar, Jaipur, Rajasthan 302018
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:9828892342" className="text-slate-900 font-display text-xl hover:text-accent-500 transition-colors">+91 98288 92342</a>
              <span className="text-slate-500 text-sm font-sans uppercase tracking-widest">Emergency Call Available</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-sans text-sm tracking-[0.2em] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4 font-sans text-slate-600 font-light">
              <li><a href="#about" className="hover:text-accent-500 transition-colors">About Us</a></li>
              <li><a href="#doctors" className="hover:text-accent-500 transition-colors">Our Doctors</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Cancellation & Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-sans text-sm tracking-[0.2em] uppercase mb-6">Our Services</h4>
            <ul className="space-y-4 font-sans text-slate-600 font-light">
              <li><a href="#treatments" className="hover:text-accent-500 transition-colors">Vitreoretinal Services</a></li>
              <li><a href="#treatments" className="hover:text-accent-500 transition-colors">Cataract</a></li>
              <li><a href="#treatments" className="hover:text-accent-500 transition-colors">Glaucoma</a></li>
              <li><a href="#treatments" className="hover:text-accent-500 transition-colors">Laser Treatments</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-sans text-sm">
            © 2026 Jaipur Netralaya. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Facebook</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Instagram</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
