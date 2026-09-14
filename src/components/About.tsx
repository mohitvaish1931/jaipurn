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
          
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
            <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-6 block">Introduction & Legacy</span>
            <h2 className="font-display text-5xl md:text-7xl font-medium text-slate-900 mb-8 leading-[1.1] tracking-tight">
              World-Class <br/> Vision <br/> <span className="text-slate-500">Care.</span>
            </h2>
            <p className="text-slate-600 font-sans text-lg md:text-xl font-light leading-relaxed max-w-lg mb-6">
              Welcome to Jaipur Netralaya, the best eye hospital jaipur trusts for world-class vision care. As a premier retina hospital in jaipur, we specialize in advanced retina treatment jaipur residents rely on, including retinal detachment and injections and laser treatments for diabetic retinopathy.
            </p>
            <p className="text-slate-600 font-sans text-lg md:text-xl font-light leading-relaxed max-w-lg mb-6">
              Jaipur Netralaya was established in 2021 by Dr Sidharth Bhardwaj and Dr Divya Agrawal with the intent of providing world-class retina treatment at affordable prices. Over a period of 5 years, building patient trust, it has expanded into a multispecialty eye hospital providing excellent comprehensive services in the specialties of Cataract, Cornea, Uveitis, Squint, and Glaucoma.
            </p>
            <p className="text-slate-600 font-sans text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Our hospital features the best eye specialist retina specialist in jaipur Dr Sidharth Bhardwaj to manage complex conditions. If you need a trusted eye doctor near me or a leading vitreoretinal surgeon jaipur, visit us for affordable, comprehensive care.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
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
