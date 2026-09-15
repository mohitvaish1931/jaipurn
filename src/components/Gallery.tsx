export default function Gallery() {
  const galleryImages = [
    { src: '/gallery/surgeryroom_img_9_1.jpeg', alt: 'Hospital Exterior View', category: 'Exterior' },
    { src: '/gallery/surgeryroom_img_11_1.jpeg', alt: 'Welcoming Reception Area', category: 'Reception' },
    { src: '/gallery/surgeryroom_img_12_1.jpeg', alt: 'Spacious Waiting Lounge', category: 'Lobby' },
    { src: '/gallery/surgeryroom_img_7_1.jpeg', alt: 'Advanced Consultation Room', category: 'OPD' },
    { src: '/gallery/surgeryroom_img_3_1.jpeg', alt: 'State-of-the-art Diagnostics', category: 'Diagnostics' },
    { src: '/gallery/surgeryroom_img_2_1.jpeg', alt: 'Comprehensive Eye Testing', category: 'Diagnostics' },
    { src: '/gallery/surgeryroom_img_1_1.jpeg', alt: 'Fully Equipped Operation Theatre', category: 'Modular OT' },
    { src: '/gallery/surgeryroom_img_4_1.jpeg', alt: 'Comfortable Post-Operative Recovery', category: 'Recovery' }
  ];

  return (
    <section id="hospital-tour" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-4 block">Hospital Tour</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
            The Patient <span className="text-slate-500">Journey.</span>
          </h2>
          <p className="mt-6 text-slate-600 font-sans font-light max-w-2xl mx-auto">
            Experience our world-class infrastructure. From a welcoming reception to ultra-sterile modular operation theaters and relaxing recovery rooms, every step is designed for your comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, idx) => (
            <div key={idx} className="group flex flex-col gap-3">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                  <span className="text-xs font-sans tracking-widest uppercase text-slate-800">{item.category}</span>
                </div>
              </div>
              <p className="font-sans text-slate-700 font-medium text-center">{item.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
