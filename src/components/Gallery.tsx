export default function Gallery() {
  const images = Array.from({ length: 12 }, (_, i) => `/gallery/surgeryroom_img_${i + 1}_1.jpeg`);

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-4 block">Infrastructure</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
            State-of-the-Art <span className="text-slate-500">Facilities.</span>
          </h2>
          <p className="mt-6 text-slate-600 font-sans font-light max-w-2xl mx-auto">
            Take a look inside our advanced surgical suites and clinical rooms, equipped with world-class technology to ensure the highest standard of patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
              <img 
                src={src} 
                alt={`Jaipur Netralaya Facility ${idx + 1}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
