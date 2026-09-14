import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';

import { treatmentsData } from '../data/treatmentsData';

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
      <SEO 
        title={`${treatment.title} in Jaipur | Best Treatment at Jaipur Netralaya`}
        description={treatment.desc}
      />
      <div className="container mx-auto px-6 relative z-10">
        <Link to="/treatments" className="inline-flex items-center text-sm font-sans tracking-[0.2em] uppercase text-slate-500 hover:text-accent-500 mb-12 transition-colors">
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
            <div className="prose prose-lg prose-slate font-light leading-relaxed max-w-none mb-12 text-slate-700 treatment-content">
              {treatment.fullDesc}
            </div>
            
            <a href="/#booking" className="inline-block group relative px-10 py-5 bg-accent-500 text-white rounded-full font-display font-semibold text-lg overflow-hidden transition-all hover:scale-105 duration-500">
              <div className="absolute inset-0 bg-accent-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Schedule Consultation</span>
            </a>
          </div>
          
          <div className="lg:col-span-5 relative space-y-8">
            {'reels' in treatment && (treatment.reels as {title: string, url: string}[]).map((reel, idx) => {
              const embedUrl = reel.url.split('?')[0] + 'embed';
              return (
                <div key={`reel-${idx}`} className="w-full rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-xl relative aspect-[9/16] max-h-[750px]">
                  <iframe 
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full border-none"
                    scrolling="no"
                    allowTransparency={true}
                    allow="encrypted-media"
                  ></iframe>
                </div>
              );
            })}

            {'images' in treatment && (treatment.images as {alt: string, url: string}[]).map((img, idx) => (
              <div key={`img-${idx}`} className="w-full rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-xl relative aspect-[4/3]">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            ))}

            {'videos' in treatment && (treatment.videos as {title: string, url: string}[]).map((video, idx) => (
              <div key={`video-${idx}`} className="w-full rounded-[2rem] overflow-hidden bg-black border border-slate-200 shadow-xl relative aspect-[9/16] max-h-[750px] flex items-center justify-center">
                <video 
                  src={video.url} 
                  controls 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {!('reels' in treatment) && !('images' in treatment) && !('videos' in treatment) && (
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
