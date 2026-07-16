import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const treatmentsData = {
  'retinal-detachment': { 
    title: 'Retinal Detachment', 
    desc: 'Expert surgical care and repair for detached retinas.', 
    fullDesc: 'A retinal detachment is a medical emergency that can cause permanent vision loss. We utilize advanced sub-micron scanning and immediate surgical intervention (scleral buckle or vitrectomy) to reposition and secure the retina, restoring vision with unprecedented precision.',
    reels: [
      { title: 'Retinal Detachment', url: 'https://www.instagram.com/reel/DYujcMLhgFm/?igsh=MTJzNnYxbTdqbW40bg==' }
    ]
  },
  'diabetic-retinopathy': {
    title: 'Diabetic Retinopathy', 
    desc: 'Advanced screening and treatment for diabetic eye disease.', 
    fullDesc: 'Diabetic retinopathy damages blood vessels in the retina. We offer comprehensive management including anti-VEGF injections, advanced laser photocoagulation, and vitrectomy. Early detection through our routine screenings can prevent severe vision loss in diabetic patients.',
    reels: [
      { title: 'Diabetic Retinopathy', url: 'https://www.instagram.com/reel/DWEyQ42gTIB/?igsh=MTZtbTI0NmdobWQ3bw==' }
    ]
  },
  'retinal-laser': {
    title: 'Retinal Laser', 
    desc: 'Precision laser therapies for various retinal conditions.', 
    fullDesc: 'We perform state-of-the-art retinal laser procedures (photocoagulation) to treat tears, holes, and vascular diseases of the retina. This minimally invasive outpatient procedure is highly effective in halting disease progression and sealing retinal defects.',
    reels: [
      { title: 'Retinal Laser', url: 'https://www.instagram.com/reel/DUNYt5lAfZ4/?igsh=dHI1dDVkcW9jOWc3' }
    ]
  },
  'intravitreal-injections': {
    title: 'Intravitreal Injections',
    desc: 'Targeted medication delivery for macular and retinal diseases.',
    fullDesc: 'Intravitreal injections are used to deliver medication directly into the eye, providing highly effective treatment for conditions such as macular degeneration, diabetic macular edema, and retinal vein occlusion. We ensure the procedure is safe, painless, and performed in a sterile environment.'
  },
  'cataract': { 
    title: 'Intra Ocular Lens - Cataract Surgery', 
    desc: 'MICS technology • Monofocal, Toric & Multifocal lenses.', 
    fullDesc: 'We offer advanced micro-incision cataract surgery (MICS) with premium intraocular lenses (IOLs). The procedure is painless, minimally invasive, and designed to restore crystal clear vision. Our patients typically experience incredibly rapid recovery times.',
    reels: [
      { title: 'Intraocular Lens - Cataract Surgery', url: 'https://www.instagram.com/reel/DN5uAA8gQT6/?igsh=MWZ6dzhobGEzcXpzcw==' }
    ]
  },
  'complex-cataracts': {
    title: 'Complex Cataracts with Glaucoma and Retina Problems',
    desc: 'Combined surgical management of challenging cataracts.',
    fullDesc: 'Cataracts complicated by co-existing conditions like glaucoma or retinal disorders require a highly skilled and comprehensive surgical approach. Our experienced team seamlessly manages these multi-faceted cases to ensure optimal visual outcomes while addressing all underlying conditions.'
  },
  'uveitis': {
    title: 'Uveitis',
    desc: 'Diagnosis and management of intraocular inflammation.',
    fullDesc: 'Uveitis is inflammation of the middle layer of the eye (uvea) and can cause severe vision loss if left untreated. We specialize in diagnosing the root cause, whether infectious or autoimmune, and offer targeted therapeutic options to control the inflammation and preserve sight.'
  },
  'glaucoma': { 
    title: 'Glaucoma', 
    desc: 'Early detection and advanced medical or surgical management.', 
    fullDesc: 'Glaucoma is a silent condition that damages the optic nerve. Our specialized clinic utilizes advanced predictive algorithms and automated perimetry to catch anomalies early. We offer complete medical management, laser therapies, and advanced surgical interventions.',
    reels: [
      { title: 'Glaucoma', url: 'https://www.instagram.com/reel/DGTzk8wT9hD/?igsh=MWhmb3J5c2FwM29y' }
    ]
  },
  'rop': { 
    title: 'Retinopathy of Prematurity', 
    desc: 'Specialized screening and care for premature infants.', 
    fullDesc: 'ROP is a potentially blinding eye disorder that primarily affects premature infants. Our specialized pediatric team is highly trained in the critical screening and timely laser or surgical treatment required to ensure the lifelong healthy vision of these vulnerable children.',
    reels: [
      { title: 'Retinopathy of Prematurity (ROP)', url: 'https://www.instagram.com/reel/DFgwaEvSykz/?igsh=bjg3aHIwNWp1cGhq' }
    ]
  },
  'computer-vision-syndrome': {
    title: 'Computer Vision Syndrome',
    desc: 'Relief from digital eye strain and comprehensive vision care.',
    fullDesc: 'Prolonged screen time can cause digital eye strain, dry eyes, and blurred vision. We provide comprehensive evaluations, specialized lubricating treatments, and ergonomic counseling to relieve Computer Vision Syndrome and restore ocular comfort.',
    reels: [
      { title: 'Computer Vision Syndrome', url: 'https://www.instagram.com/reel/DEY3WkYy6h8/?igsh=MTQ3NGQwbXJkM2U2Nw==' },
      { title: 'Computer Vision Care', url: 'https://www.instagram.com/reel/DCs98ryxsXU/?igsh=Mm5uanBxbXUwbnNs' }
    ]
  },
  'corneal-disorder': { 
    title: 'Corneal Disorder', 
    desc: 'Advanced treatments for keratoconus, infections, and dystrophies.', 
    fullDesc: 'We provide comprehensive care for corneal conditions including keratoconus, corneal dystrophies, and severe infections. From advanced cross-linking treatments to corneal transplants, our team is equipped with next-generation technology to restore corneal clarity.' 
  },
  'occulopasty': { 
    title: 'Occulopasty', 
    desc: 'Cosmetic and reconstructive procedures around the eyes.', 
    fullDesc: 'Our oculoplastic services blend the precision of ophthalmic microsurgery with the aesthetic understanding of plastic surgery. We expertly handle cosmetic and reconstructive procedures around the eyes, including droopy eyelids (ptosis), orbital trauma, and tear duct abnormalities.' 
  },
  'ocular-trauma': {
    title: 'Ocular Trauma',
    desc: '24/7 emergency care and specialized surgical management.',
    fullDesc: 'Eye injuries require immediate and expert attention. Our trauma center is equipped to handle complex ocular emergencies, from foreign bodies to severe penetrating injuries, utilizing advanced reconstructive techniques to restore vision and anatomy.'
  },
  'industrial-trauma': {
    title: 'Industrial Trauma Management',
    desc: 'Expert emergency response for workplace eye injuries.',
    fullDesc: 'Workplace eye injuries, particularly chemical burns and high-velocity projectile trauma, are managed with urgent, specialized care. We also offer consultations for industrial eye safety to prevent workplace visual impairment.'
  }
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
    <div className="min-h-screen pt-56 pb-24 bg-surface">
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
          
          <div className="lg:col-span-5 relative space-y-8">
            {'reels' in treatment ? (
              (treatment.reels as {title: string, url: string}[]).map((reel, idx) => {
                const embedUrl = reel.url.split('?')[0] + 'embed';
                return (
                  <div key={idx} className="w-full rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-xl relative aspect-[9/16] max-h-[750px]">
                    <iframe 
                      src={embedUrl}
                      className="absolute inset-0 w-full h-full border-none"
                      scrolling="no"
                      allowTransparency={true}
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                );
              })
            ) : (
              <div className="aspect-[3/4] w-full rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 relative shadow-xl">
                <img 
                  src={`/assets/${(id as string).replace('-', '_')}.jpg`} 
                  alt={treatment.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-12">
                  <span className="font-display text-3xl text-white font-light leading-tight">{treatment.title} <br/> <span className="text-accent-400">Specialized Care Suite</span></span>
                </div>
              </div>
            )}
            {/* Accents */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
