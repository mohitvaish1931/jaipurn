

import { Link } from 'react-router-dom';

const steps = [
  { id: '01', title: 'Book an Appointment', desc: 'Schedule your visit by calling us. OPD is open Mon-Sat 10 AM-2 PM & 5 PM-7 PM.', link: null },
  { id: '02', title: 'Consult Our Experts', desc: 'Meet with our highly skilled doctors who provide an accurate diagnosis and treatment plan.', link: null },
  { id: '03', title: 'Receive Care', desc: 'Our team ensures you receive the necessary medical services, from prescriptions to specialized surgery.', link: null },
  { id: '04', title: 'Follow-Up', desc: 'We stay connected for follow-up consultations, ensuring your recovery is progressing smoothly.', link: null },
  { id: '05', title: 'Insurance & TPAs', desc: 'Cashless treatment under all major medical insurance and TPA companies. View empanelment details.', link: '/insurance' },
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

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, i) => {
            const content = (
              <div className="relative group cursor-pointer">
                <div className="text-accent-500/20 font-display text-6xl md:text-8xl font-bold mb-6 group-hover:text-accent-500 transition-colors duration-500">
                  {step.id}
                </div>
                <h3 className="font-display text-2xl text-slate-900 mb-4 group-hover:text-accent-500 transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-slate-600 font-light leading-relaxed">
                  {step.desc}
                </p>
                {step.link && (
                  <div className="mt-6 flex items-center text-sm font-sans tracking-[0.2em] uppercase text-accent-500 group-hover:text-accent-600 transition-colors">
                    Explore Details 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                )}
              </div>
            );

            return step.link ? (
              <Link to={step.link} key={i}>
                {content}
              </Link>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
