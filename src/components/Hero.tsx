import { useRef, useEffect, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

function LiquidEye() {
  const texture = useTexture('/assets/hero_iris.png');
  const sphereRef = useRef<THREE.Mesh>(null);

  const { viewport } = useThree();

  useFrame((state) => {
    if (sphereRef.current) {
      // Cinematic rotation (sped up)
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      
      // Responsive scale: ensure the eye fits within 85% of mobile screens, but max scale is 1 on desktop
      const responsiveScale = Math.min(1, (viewport.width * 0.425) / 2.5);
      
      // Very gentle organic breathing scale
      const breath = 1 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.01;
      const finalScale = responsiveScale * breath;
      
      sphereRef.current.scale.set(finalScale, finalScale, finalScale);
      
      // On smaller screens, slightly elevate the eye to balance with centered text
      sphereRef.current.position.y = viewport.width < 5 ? 0.8 : 0;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[2.5, 32, 32]}>
      <MeshDistortMaterial
        map={texture}
        distort={0.02} // Vastly reduced to preserve iris details
        speed={0.5}    // Slower organic movement
        roughness={0.1} // Glossier wet look
        metalness={0.4} // Enough for strong light reflections
        clearcoat={1}  // Cornea-like clearcoat
        clearcoatRoughness={0.0} // Perfect mirror-like clearcoat
        envMapIntensity={1.5} // High environment reflection
      />
    </Sphere>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const navigate = useNavigate();

  useEffect(() => {
    // Optimized Parallax effect using quickTo to prevent tween spam
    const xTo = gsap.quickTo('.hero-content', 'x', { duration: 2, ease: 'power2.out' });
    const yTo = gsap.quickTo('.hero-content', 'y', { duration: 2, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      xTo((clientX / window.innerWidth - 0.5) * -20);
      yTo((clientY / window.innerHeight - 0.5) * -20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-background flex items-center justify-center">
      {/* 3D Liquid Eye Background */}
      <div className="absolute inset-0 z-0">
        <Canvas frameloop={isInView ? "always" : "demand"} dpr={[1, 1.2]} camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
          <spotLight position={[-5, 5, 0]} intensity={2} color="#0ea5e9" />
          <Environment preset="studio" />
          <Suspense fallback={null}>
            <LiquidEye />
          </Suspense>
        </Canvas>
        
        {/* Clean Light Overlays */}
        <div className="absolute inset-0 bg-background/20 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10 pointer-events-none opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-20 container mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start pointer-events-none will-change-transform">


        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-[140px] font-medium text-slate-900 mb-6 leading-[0.9] tracking-[-0.02em]"
        >
          Jaipur Netralaya <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-accent-600 to-accent-500">
            Eye & Retina Centre.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-slate-600 font-sans max-w-2xl font-light mb-12"
        >
          Experience comprehensive ophthalmic services at Jaipur's leading eye care facility. Specializing in advanced retina care, cataract surgery, strabismus treatment, and vision therapy with a patient-centric approach.
        </motion.p>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => navigate('/appointment')}
          className="group relative px-10 py-5 bg-accent-500 text-white rounded-full font-display font-semibold text-lg overflow-hidden transition-all hover:scale-105 duration-500 pointer-events-auto"
        >
          <div className="absolute inset-0 bg-accent-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">Schedule Consultation</span>
        </motion.button>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-sans">Scroll</span>
        <div className="w-[1px] h-12 bg-slate-200 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
