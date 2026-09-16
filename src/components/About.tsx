import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  { year: '18+', title: 'Years Experience', desc: 'A legacy of preserving and restoring vision with compassionate care.' },
  { year: '#1', title: 'Largest Retina Hospital', desc: 'The largest and most trusted retina hospital in Rajasthan.' },
  { year: '10k+', title: 'Retina Surgeries', desc: 'A milestone of trust. Over ten thousand retina surgeries and laser procedures performed.' },
  { year: '50k+', title: 'Cataract Surgeries', desc: 'Delivering expert, patient-focused care with advanced technology.' },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-40 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-6 h-fit pb-12">
            <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-6 block">Legacy</span>
            <h2 className="font-display text-5xl md:text-6xl font-medium text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Overview & <br/> <span className="text-slate-500">Diagnostics.</span>
            </h2>
            
            <div className="prose prose-slate prose-lg font-sans font-light text-slate-600 mb-12 max-w-2xl space-y-6">
              <p>
                Welcome to <strong>Jaipur Netralaya</strong>, the best eye hospital jaipur trusts for world-class vision care. As a premier retina hospital in jaipur, we specialize in advanced retina treatment jaipur residents rely on, including retinal detachment and injections and laser treatments for diabetic retinopathy.
              </p>
              <p>
                Our hospital features the best eye specialist retina specialist in jaipur <strong>Dr Sidharth Bhardwaj</strong> to manage complex conditions. 
              </p>
              <p>
                Looking for safe cataract surgery in jaipur? Our skilled cataract surgeons performs advanced micro-incision surgeries using phacoemulsification technique and premium intraocular lenses. 
              </p>
              <p>
                If you need a trusted eye doctor near me or a leading vitreoretinal surgeon jaipur, visit us for affordable, comprehensive care.
              </p>
              <p>
                Jaipur Netralaya was established in 2021 by Dr Sidharth Bhardwaj and Dr Divya Agrawal with the intent of providing world-class retina treatment at affordable prices. Over a period of 5 years, building patient trust, it has expanded into a multispecialty eye hospital providing excellent comprehensive services in the specialties of Cataract, Cornea, Uveitis, Squint, and Glaucoma.
              </p>
              <h4 className="text-accent-600 font-semibold text-xl mt-8 mb-4 border-b border-slate-100 pb-2">Advanced in-house diagnostics include:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Optical Coherence Tomography (OCT)</li>
                <li>Fluorescein Angiography</li>
                <li>Automated Perimetry</li>
                <li>Ultrasonography</li>
              </ul>
            </div>

            <h3 className="font-display text-3xl font-bold text-accent-600 mb-6 mt-12">Core Services & Advanced Procedures</h3>
            <div className="prose prose-slate prose-lg font-sans font-light text-slate-600 mb-12 max-w-2xl">
              <h4 className="text-accent-600 font-semibold text-xl mt-6 mb-3 border-b border-slate-100 pb-2">Cataract Surgery</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Advanced <strong className="text-accent-600 font-semibold">Phaco</strong> surgery with modern foldable lenses.</li>
                <li>Premium lens options including Toric, Multifocals, Trifocals, and EDOF (Extended Depth of Focus).</li>
              </ul>

              <h4 className="text-accent-600 font-semibold text-xl mt-8 mb-3 border-b border-slate-100 pb-2">Advanced Retina & Vitreous Treatments</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Microincision Sutureless Vitrectomy (MIVS) performed in state-of-the-art operation theatres.</li>
                <li>Specialized surgery for <strong className="text-accent-600 font-semibold">Retinal Detachment</strong>, <strong className="text-accent-600 font-semibold">Vitreous Haemorrhage</strong>, and <strong className="text-accent-600 font-semibold">persistent Floaters</strong>.</li>
                <li>Dedicated screening and management for Retinopathy of Prematurity (ROP) in infants.</li>
                <li><strong className="text-accent-600 font-semibold">Intravitreal Injections</strong> for Age-Related Macular Degeneration (AMD) and Vein Occlusions, utilizing latest medications like Lucentis, Accentrix, Avastin, Ozurdex, Eylea, and Vabysmo.</li>
              </ul>
            </div>

            <h3 className="font-display text-2xl font-bold text-accent-600 mb-6 mt-12">Cornea, Surface & General Eye Care</h3>
            <div className="prose prose-slate prose-lg font-sans font-light text-slate-600 mb-12 max-w-2xl">
              <ul className="list-disc pl-5 space-y-1">
                <li>Advanced treatments for <strong className="text-accent-600 font-semibold">Keratoconus</strong>, including Collagen Cross-Linking and targeted laser therapy.</li>
                <li><strong className="text-accent-600 font-semibold">Pterygium</strong> surgery and specialized care for chronic Dry Eye and eye allergies.</li>
                <li>Expert management for complex conditions like <strong className="text-accent-600 font-semibold">Uveitis</strong>, <strong className="text-accent-600 font-semibold">Endophthalmitis</strong>, and <strong className="text-accent-600 font-semibold">Retinitis Pigmentosa</strong>.</li>
              </ul>
            </div>


          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:sticky lg:top-40 lg:h-[80vh] flex flex-col justify-center">
            <motion.div style={{ y, opacity }} className="flex flex-col gap-24 pt-20 lg:pt-0 will-change-transform">
              {milestones.map((item, i) => (
                <div key={i} className="relative group pl-12 border-l border-slate-200 hover:border-accent-500 transition-colors duration-500">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-accent-500 group-hover:shadow-[0_0_10px_rgba(14,165,233,0.6)] transition-all duration-500"></div>
                  <h3 className="font-display text-6xl md:text-8xl text-slate-200 font-bold mb-4 group-hover:text-accent-500/10 transition-colors duration-700 tracking-tighter">
                    {item.year}
                  </h3>
                  <h4 className="font-display text-3xl text-slate-900 mb-4">{item.title}</h4>
                  <p className="font-sans text-slate-600 text-lg font-light leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
