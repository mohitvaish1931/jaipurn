import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { title: 'Sub-Micron Scanning', desc: 'Flawless 3D OCT imaging for absolute diagnostic perfection.' },
  { title: 'Predictive Algorithms', desc: 'AI catching anomalies before they physically manifest.' },
  { title: 'Robotic Interventions', desc: 'Automated precision for high-risk surgical environments.' },
];

export default function Technology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={containerRef} className="py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden aspect-[3/4] md:aspect-[4/5] border border-slate-200 shadow-xl">
            <motion.div style={{ y: imageY }} className="absolute inset-[-30%] w-[160%] h-[160%] will-change-transform flex items-center justify-center">
              <video 
                src="/WhatsApp Video 2026-07-07 at 00.03.42.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover -rotate-90"
              />
              <div className="absolute inset-0 bg-background/20 mix-blend-multiply pointer-events-none"></div>
            </motion.div>
            
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            
            {/* Scanner UI */}
            <div className="absolute top-8 right-8 flex flex-col gap-2">
              <div className="w-16 h-[1px] bg-accent-500/50"></div>
              <div className="w-8 h-[1px] bg-accent-500/50"></div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-accent-500/80 mt-2">Sys. Active</p>
            </div>
            <motion.div 
              animate={{ y: ['0%', '400%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-[2px] bg-accent-500 shadow-[0_0_20px_rgba(14,165,233,0.8)] opacity-30"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-6 block">Infrastructure</span>
            <h2 className="font-display text-5xl md:text-6xl font-medium text-slate-900 mb-12 leading-[1.1] tracking-tight">
              Absolute <br/> <span className="text-slate-500">Precision.</span>
            </h2>
            
            <div className="space-y-12">
              {features.map((feature, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex items-center gap-6 mb-4">
                    <span className="font-sans text-accent-500/50 text-sm tracking-widest">0{i+1}</span>
                    <h3 className="font-display text-2xl text-slate-800 group-hover:text-slate-900 transition-colors">{feature.title}</h3>
                  </div>
                  <p className="font-sans text-slate-500 font-light text-lg pl-12 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
