

const steps = [
  { id: '01', title: 'Book an Appointment', desc: 'Schedule your visit by calling us. OPD is open Mon-Sat 10 AM-2 PM & 5 PM-7 PM.' },
  { id: '02', title: 'Consult Our Experts', desc: 'Meet with our highly skilled doctors who provide an accurate diagnosis and treatment plan.' },
  { id: '03', title: 'Receive Care', desc: 'Our team ensures you receive the necessary medical services, from prescriptions to specialized surgery.' },
  { id: '04', title: 'Follow-Up', desc: 'We stay connected for follow-up consultations, ensuring your recovery is progressing smoothly.' },
];

export default function Process() {
  return (
    <section className="py-32 bg-surface relative" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-6 block">Patient Journey</span>
          <h2 className="font-display text-5xl md:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight">
            Seamless <br/> <span className="text-slate-500">Care Process.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-accent-500/20 font-display text-6xl md:text-8xl font-bold mb-6 group-hover:text-accent-500 transition-colors duration-500">
                {step.id}
              </div>
              <h3 className="font-display text-2xl text-slate-900 mb-4 group-hover:text-accent-500 transition-colors">
                {step.title}
              </h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
