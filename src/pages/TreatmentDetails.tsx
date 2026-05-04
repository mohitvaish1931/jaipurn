import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const treatmentsData = {
  'retina': { title: 'Vitreoretinal Services', desc: 'Expert care for Retinal Detachment and Diabetic Retinopathy.', fullDesc: 'Our vitreoretinal services provide advanced diagnostic and surgical care for complex conditions affecting the back of the eye. Utilizing state-of-the-art sub-micron scanning and robotic assistance, our world-class surgeons effectively treat retinal detachments, macular degeneration, and diabetic retinopathy with unprecedented precision.' },
  'cataract': { title: 'Cataract', desc: 'Safe, effective surgical options to restore your sight.', fullDesc: 'We offer advanced micro-incision cataract surgery (MICS) with premium intraocular lenses (IOLs). The procedure is painless, minimally invasive, and designed to restore crystal clear vision. Our patients typically experience incredibly rapid recovery times, returning to their daily lives almost immediately.' },
  'glaucoma': { title: 'Glaucoma', desc: 'Protect your vision with early detection and expert care.', fullDesc: 'Glaucoma is a silent condition that damages the optic nerve. Our specialized glaucoma clinic utilizes advanced predictive algorithms and automated perimetry to catch anomalies before they manifest. We offer a full spectrum of treatments including medical management, advanced laser therapies, and specialized micro-invasive glaucoma surgery (MIGS).' },
  'laser': { title: 'Laser Treatments', desc: 'Safe, advanced LASIK and laser vision correction for specs removal.', fullDesc: 'Achieve freedom from glasses and contact lenses with our cutting-edge refractive laser treatments. Whether you need standard LASIK, PRK, or Contoura Vision, our advanced laser suites ensure absolute diagnostic perfection and flawless corneal reshaping tailored to your unique visual signature.' },
  'cornea': { title: 'Cornea Disorders', desc: 'Keratoconus management and corneal transplants.', fullDesc: 'We provide comprehensive care for corneal conditions including keratoconus, corneal dystrophies, and severe infections. From advanced C3R treatments to full-thickness and lamellar corneal transplants, our team is equipped with next-generation technology to restore corneal clarity.' },
  'oculoplasty': { title: 'Oculoplasty', desc: 'Ptosis correction, blocked tear ducts, and aesthetic eyelid surgery.', fullDesc: 'Our oculoplastic services blend the precision of ophthalmic microsurgery with the aesthetic understanding of plastic surgery. We expertly handle cosmetic and reconstructive procedures around the eyes, including droopy eyelids (ptosis), orbital trauma, and tear duct abnormalities.' },
  'pediatric': { title: 'Pediatric Ophthalmology', desc: 'Early detection is vital for lifelong clear vision.', fullDesc: 'Children require specialized eye care. Our pediatric ophthalmology department is designed to be child-friendly and comforting, providing expert treatment for amblyopia (lazy eye), strabismus (squint), pediatric cataracts, and refractive errors to ensure lifelong healthy vision.' }
};

export default function TreatmentDetails() {
  const { id } = useParams();
  const treatment = treatmentsData[id as keyof typeof treatmentsData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="font-display text-4xl text-slate-900 mb-4">Treatment Not Found</h1>
          <Link to="/" className="text-accent-500 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-surface">
      <div className="container mx-auto px-6 relative z-10">
        <Link to="/" className="inline-flex items-center text-sm font-sans tracking-[0.2em] uppercase text-slate-500 hover:text-accent-500 mb-12 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Overview
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-6 block">Clinical Expertise</span>
            <h1 className="font-display text-5xl md:text-7xl font-medium text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {treatment.title}<span className="text-accent-500">.</span>
            </h1>
            <p className="text-slate-600 font-sans text-xl md:text-2xl font-light leading-relaxed mb-12">
              {treatment.desc}
            </p>
            <div className="prose prose-lg prose-slate font-light leading-relaxed max-w-none mb-12 text-slate-700">
              <p>{treatment.fullDesc}</p>
            </div>
            
            <a href="/#booking" className="inline-block group relative px-10 py-5 bg-accent-500 text-white rounded-full font-display font-semibold text-lg overflow-hidden transition-all hover:scale-105 duration-500">
              <div className="absolute inset-0 bg-accent-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Schedule Consultation</span>
            </a>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] w-full rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 relative">
              {/* Subtle medical pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0ea5e9 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <span className="font-display text-3xl text-slate-300 font-light leading-tight">{treatment.title} <br/> Specialized Care Suite</span>
              </div>
            </div>
            {/* Accents */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
