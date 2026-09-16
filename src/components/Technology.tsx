import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { title: 'Alcon Constellation® Vision System', desc: 'The gold standard for advanced vitreoretinal surgery, offering unparalleled control and precision.' },
  { title: 'Zeiss OPMI Lumera® 700', desc: 'The world\'s best surgical microscope providing crystal-clear visualization for intricate eye surgeries.' },
  { title: 'Alcon Centurion® Vision System', desc: 'State-of-the-art phacoemulsification technology for safe, micro-incision cataract surgery.' },
  { title: 'Zeiss OCT', desc: 'High-definition 3D cross-sectional imaging for flawless diagnosis of retinal and macular conditions.' },
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
        <div className="max-w-2xl mx-auto items-center">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] md:aspect-[4/5] border border-slate-200 shadow-xl">
            <motion.div style={{ y: imageY }} className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform flex items-center justify-center">
              <video 
                src="/WhatsApp Video 2026-07-07 at 00.03.42.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
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
        </div>
      </div>
    </section>
  );
}
