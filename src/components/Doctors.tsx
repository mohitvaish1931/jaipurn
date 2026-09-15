import { Link } from 'react-router-dom';

export default function Doctors() {
  return (
    <section className="py-32 bg-background relative" id="doctors">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-24">
          <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-6 block">The Masterminds</span>
          <h2 className="font-display text-5xl md:text-7xl font-medium text-slate-900 leading-[1.1] tracking-tight">
            World-Class <br/> <span className="text-slate-500">Specialists.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-t-full overflow-hidden border border-slate-100 relative bg-surface">
              <img 
                src="/assets/high_end_doctor.png" 
                alt="Dr. Sidharth Bhardwaj" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <h3 className="font-display text-4xl md:text-5xl text-slate-900 mb-2">Dr. Sidharth Bhardwaj</h3>
              <p className="font-sans text-accent-500 tracking-widest uppercase text-sm">Vitreoretinal Surgeon and Retina Specialist</p>
            </div>
            
            <p className="font-sans text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              "Focusing exclusively on diseases affecting the back of the eye—the retina and vitreous body—providing expert care that goes beyond general ophthalmology."
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-200 max-w-lg">
              <div>
                <p className="font-display text-4xl text-slate-900 mb-1">15+</p>
                <p className="font-sans text-xs uppercase tracking-widest text-slate-500">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl text-slate-900 mb-1">FRF</p>
                <p className="font-sans text-xs uppercase tracking-widest text-slate-500">Fellowship in Retina</p>
              </div>
            </div>

            <Link to="/doctor/sidharth-bhardwaj" className="self-start text-slate-800 hover:text-slate-900 font-sans uppercase tracking-[0.2em] text-sm pb-1 border-b border-accent-500 transition-colors">
              View Full Credentials
            </Link>
          </div>

        </div>

        {/* Dr. Divya Agrawal */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mt-32">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-t-full overflow-hidden border border-slate-100 relative bg-surface shadow-xl">
              <img 
                src="/WhatsApp Image 2026-07-05 at 23.55.15.jpeg" 
                alt="Dr. Divya Agrawal" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:items-end lg:text-right">
            <div>
              <h3 className="font-display text-4xl md:text-5xl text-slate-900 mb-2">Dr. Divya Agrawal</h3>
              <p className="font-sans text-accent-500 tracking-widest uppercase text-sm">MBBS, MS ENT Specialist</p>
            </div>
            
            <p className="font-sans text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              "Dedicated Ear, Nose, and Throat specialist with extensive expertise in the precise diagnosis and treatment of complex ENT diseases."
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-200 max-w-lg w-full">
              <div className="lg:text-right">
                <p className="font-display text-4xl text-slate-900 mb-1">15+</p>
                <p className="font-sans text-xs uppercase tracking-widest text-slate-500">Years Experience</p>
              </div>
              <div className="lg:text-right">
                <p className="font-display text-2xl text-slate-900 mb-1 mt-1">BJ Medical</p>
                <p className="font-sans text-xs uppercase tracking-widest text-slate-500">Postgraduate, Ahmedabad</p>
              </div>
            </div>

            <Link to="/doctor/divya-agarwal" className="self-end text-slate-800 hover:text-slate-900 font-sans uppercase tracking-[0.2em] text-sm pb-1 border-b border-accent-500 transition-colors">
              View Full Credentials
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
