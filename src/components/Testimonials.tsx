

const testimonials = [
  { id: 1, name: 'Zayn Malik', text: 'We got my father treated at Netraliya Eye Hospital, and the experience was excellent. After the treatment, he is now able to see clearly, and we are truly thankful to the doctor. The doctor is brilliant, very experienced, and has a kind and polite nature, which gave us a lot of confidence.', role: 'Google Review' },
  { id: 2, name: 'shilpa jain', text: 'Jaipur Netralya is an amazing place for all your eye related worries. Dr. Siddharth and his team is very cooperating, they guide you at each step along the process and help put your mind at ease by solving all your queries. He himself is very calm and explains everything very patiently.', role: 'Google Review' },
  { id: 3, name: 'Pushpendra Khandelwal', text: 'It\'s a good hospital with having a experienced Doctor Mr Sidharth Bhardwaj. He had worked at Ahemdad hospital also He is expert in cataract surgery, I have gone through the surgery, my experience is very good. Staff is very helpful and hospital is maintening a good higenic environment.', role: 'Google Review' },
  { id: 4, name: 'Vinay Tiwari', text: 'I still remember Dr. Bhardwaj removing the bandage from my mother\'s eye after the operation and seeing her smile—all her suffering was gone, and she had great vision. My mother is super satisfied with the results, and the doctor and staff are all super friendly and supportive.', role: 'Google Review' },
  { id: 5, name: 'ayush kabra', text: 'I had an exceptional experience at Jaipur Netrayalya, and I cannot recommend it highly enough. Dr. Siddhart is an outstanding ophthalmologist. His expertise and attention to detail were immediately evident. He took the time to thoroughly explain my condition and the recommended treatments.', role: 'Google Review' }
];

export default function Testimonials() {
  
  // Auto-scroll simulation by infinite horizontal translation
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-widest text-accent-500 uppercase mb-3">Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Patient Experiences</h3>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex pb-10">
        <div className="flex gap-8 px-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Double the array for seamless infinite scroll */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-80 shrink-0 bg-white shadow-sm border border-slate-200 p-8 rounded-3xl relative group cursor-pointer hover:-translate-y-4 transition-transform duration-300"
            >
              <div className="absolute -top-6 -left-6 text-6xl text-accent-500/20 font-serif">"</div>
              <p className="text-slate-800 mb-8 relative z-10 text-lg italic font-sans font-light">
                {t.text}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <h5 className="text-slate-900 font-bold font-display">{t.name}</h5>
                  <p className="text-sm text-accent-500 font-sans">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
