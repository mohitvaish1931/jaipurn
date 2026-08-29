import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface py-20 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src="/1000262746.png" alt="Jaipur Netralaya Logo" className="h-32 md:h-40 w-auto object-contain mb-6" />
            <p className="text-slate-600 font-sans font-light max-w-sm mb-4">
              160 A, Gopalpura Bypass Rd, opposite Tilak public school, Vishveshariya Nagar, Jaipur, Rajasthan 302018
            </p>
            <p className="text-slate-500 font-sans text-sm font-light max-w-sm mb-8">
              <strong>Areas Served in Jaipur:</strong> Gopalpura Bypass, Vaishali Nagar, Malviya Nagar, Mansarovar, Pratap Nagar, and all surrounding regions of Rajasthan.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:9828892342" className="text-slate-900 font-display text-xl hover:text-accent-500 transition-colors">+91 98288 92342</a>
              <a href="tel:9799772342" className="text-slate-900 font-display text-xl hover:text-accent-500 transition-colors">+91 97997 72342</a>
              <span className="text-slate-500 text-sm font-sans uppercase tracking-widest">Emergency Call Available</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-sans text-sm tracking-[0.2em] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4 font-sans text-slate-600 font-light">
              <li><Link to="/about" className="hover:text-accent-500 transition-colors">About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-accent-500 transition-colors">Our Doctors</Link></li>
              <li><Link to="#" className="hover:text-accent-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cancellation-policy" className="hover:text-accent-500 transition-colors">Cancellation & Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-sans text-sm tracking-[0.2em] uppercase mb-6">Our Services</h4>
            <ul className="space-y-4 font-sans text-slate-600 font-light">
              <li><Link to="/treatments" className="hover:text-accent-500 transition-colors">Vitreoretinal Services</Link></li>
              <li><Link to="/treatments" className="hover:text-accent-500 transition-colors">Cataract</Link></li>
              <li><Link to="/treatments" className="hover:text-accent-500 transition-colors">Glaucoma</Link></li>
              <li><Link to="/treatments" className="hover:text-accent-500 transition-colors">Laser Treatments</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-sans text-sm">
            © 2026 Jaipur Netralaya. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/share/1EMmQJt7gi/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors py-2 px-2">Facebook</a>
            <a href="https://www.instagram.com/jaipur_netralaya?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors py-2 px-2">Instagram</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors py-2 px-2">LinkedIn</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors py-2 px-2">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
