

const testimonials = [
  { id: 1, name: 'Rajesh Sharma', text: 'The LASIK procedure was a breeze. I had 20/20 vision the next morning! Truly life-changing.', role: 'Software Engineer' },
  { id: 2, name: 'Meera Patel', text: 'My cataract surgery was painless and the staff was incredibly supportive. Best eye care in the city.', role: 'Retired Teacher' },
  { id: 3, name: 'Arun Verma', text: 'They caught my glaucoma early. The advanced tech here saved my vision. Eternally grateful.', role: 'Business Owner' },
  { id: 4, name: 'Priya Singh', text: 'Crystal clear vision without glasses after 15 years. The doctors are magical.', role: 'Architect' },
];

export default function Testimonials() {
  
  // Auto-scroll simulation by infinite horizontal translation
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-widest text-accent-500 uppercase mb-3">Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Patient Experiences</h3>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex pb-10">
        <div className="flex gap-8 px-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Double the array for seamless infinite scroll */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-80 shrink-0 bg-white shadow-sm border border-slate-200 p-8 rounded-3xl relative group cursor-pointer hover:-translate-y-4 transition-transform duration-300"
            >
              <div className="absolute -top-6 -left-6 text-6xl text-accent-500/20 font-serif">"</div>
              <p className="text-slate-800 mb-8 relative z-10 text-lg italic font-sans font-light">
                {t.text}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <h5 className="text-slate-900 font-bold font-display">{t.name}</h5>
                  <p className="text-sm text-accent-500 font-sans">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
