import { Link } from 'react-router-dom';

const treatments = [
  { id: 'retinal-detachment', title: 'Retinal Detachment', desc: 'Expert surgical care and repair for detached retinas.' },
  { id: 'diabetic-retinopathy', title: 'Diabetic Retinopathy', desc: 'Advanced screening and treatment for diabetic eye disease.' },
  { id: 'retinal-laser', title: 'Retinal Laser', desc: 'Precision laser therapies for various retinal conditions.' },
  { id: 'cataract', title: 'Intraocular Lens - Cataract Surgery', desc: 'MICS technology • Monofocal, Toric & Multifocal lenses.' },
  { id: 'tuberculosis', title: 'Ocular Tuberculosis', desc: 'Diagnosis and management of eye inflammation linked to TB.' },
  { id: 'glaucoma', title: 'Retinal Problems and Glaucoma', desc: 'Early detection and management of glaucoma and retina issues.' },
  { id: 'rop', title: 'Retinopathy of Prematurity (ROP)', desc: 'Specialized screening and care for premature infants.' },
  { id: 'computer-vision-syndrome', title: 'Computer Vision Syndrome', desc: 'Relief from digital eye strain and comprehensive vision care.' },
  { id: 'cornea', title: 'Cornea Disorders', desc: 'Keratoconus using CXL • Pterygium surgery with autograft.' },
  { id: 'oculoplasty', title: 'Occuloplasty', desc: 'Management of Ptosis, Entropion, and Ectropion.' },
  { id: 'trauma', title: 'Ocular Trauma', desc: '24/7 emergency care and specialized surgical management.' },
  { id: 'industrial-trauma', title: 'Industrial Trauma Management', desc: 'Expert emergency response for workplace eye injuries.' }
];

export default function Treatments() {


  return (
    <section className="py-32 bg-background relative" id="treatments">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-4 block">Our Expertise</span>
            <h2 className="font-display text-5xl md:text-6xl font-medium text-slate-900 tracking-tight">
              Clinical <span className="text-slate-500">Focus.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-sans max-w-sm text-right hidden md:block font-light">
            Specialized procedures powered by next-generation technology and unparalleled surgical skill.
          </p>
        </div>

        <div className="border-t border-slate-200">
          {treatments.map((t, i) => (
            <Link 
              to={`/treatments/${t.id}`}
              key={t.id}
              className="block group border-b border-slate-100 py-10 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-slate-50 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
                <h3 className="font-display text-3xl md:text-5xl text-slate-800 group-hover:text-slate-900 transition-colors duration-500 font-light tracking-tight">
                  <span className="text-accent-500/50 text-xl md:text-2xl mr-6 font-sans tracking-widest">{`0${i + 1}`}</span>
                  {t.title}
                </h3>
                
                <div className="flex items-center gap-8">
                  <p className="font-sans text-slate-500 group-hover:text-slate-800 transition-colors duration-500 font-light text-lg">
                    {t.desc}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-500 transition-all duration-500">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-45 transition-transform duration-500">
                      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
