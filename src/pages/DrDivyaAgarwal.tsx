import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DrDivyaAgarwal() {
  return (
    <>
      <SEO 
        title="Dr. Divya Agarwal - Expert Specialist | Jaipur Netralaya"
        description="Dr. Divya Agarwal is a highly skilled and compassionate medical specialist at Jaipur Netralaya Eye & Retina Centre, bringing world-class healthcare."
      />
      <div className="pt-32 pb-20 bg-surface min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-slate-100 shadow-lg bg-white">
                  <img 
                    src="/WhatsApp Image 2026-07-05 at 23.55.15.jpeg" 
                    alt="Dr. Divya Agarwal" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-4 block">Expert Specialist</span>
                <h1 className="font-display text-4xl md:text-5xl font-medium text-slate-900 mb-4">
                  Dr. Divya Agarwal
                </h1>
                <p className="font-sans text-lg text-slate-600 mb-6 font-light">
                  Are you searching for a highly skilled and compassionate medical specialist in Jaipur? At Jaipur Netralaya Eye & Retina Centre, we are dedicated to bringing you world-class healthcare driven by clinical precision and patient-centric values. We are proud to feature Dr. Divya Agarwal, an accomplished specialist committed to delivering exceptional clinical outcomes and personalized patient care.
                </p>
                <p className="font-sans text-lg text-slate-600 mb-8 font-light">
                  Whether you require a routine evaluation or advanced management for complex conditions, Dr. Divya Agarwal combines years of rigorous training with a gentle touch to ensure your health is in the safest hands.
                </p>
                <Link to="/appointment" className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-white bg-accent-500 px-8 py-4 rounded-full hover:bg-accent-600 transition-colors shadow-md">
                  Book an Appointment
                </Link>
              </div>
            </div>

            <div className="prose prose-lg text-slate-600 font-sans max-w-none">
              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">Educational Qualification & Academic Background</h2>
              <p>
                Dr. Divya Agarwal’s stellar clinical practice is built upon a rock-solid foundation of prestigious academic qualifications:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>MBBS:</strong> Earned her medical degree from a top-tier institution, establishing deep foundational knowledge in core medical sciences.</li>
                <li><strong>MS (Master of Surgery):</strong> Completed her postgraduate surgical specialization from the renowned BJ Medical College, Ahmedabad. This intensive training equipped her with advanced surgical expertise and comprehensive diagnostic skills.</li>
              </ul>
              <p>
                By staying abreast of the latest medical advancements and clinical methodologies, Dr. Agarwal ensures that her patients receive evidence-based, modern medical care.
              </p>

              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">Work Experience & Clinical Expertise</h2>
              <p>
                With more than 10 years of rich clinical experience, Dr. Divya Agarwal has managed a vast spectrum of complex conditions with high success rates. Her professional journey includes working with leading medical centers, where she has honed her skills in both therapeutic management and intricate surgical interventions.
              </p>
              <h3 className="font-display text-2xl text-slate-900 mt-8 mb-4">Key Areas of Expertise:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>Advanced Diagnostics:</strong> Highly precise evaluation and diagnostic charting for deep-seated clinical conditions.</li>
                <li><strong>Complex Case Management:</strong> Over a decade of hands-on expertise in treating chronic and multi-layered medical conditions.</li>
                <li><strong>Patient-Centric Treatment Plans:</strong> Tailoring medical and surgical interventions to align perfectly with individual patient needs and lifestyles.</li>
              </ul>

              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">Why Choose Dr. Divya Agarwal at Jaipur Netralaya?</h2>
              
              <h3 className="font-display text-2xl text-slate-900 mt-8 mb-2">1. A Legacy of Experience</h3>
              <p className="mb-6">
                With over a decade on the front lines of healthcare, Dr. Agarwal possesses the clinical insight necessary to accurately diagnose conditions that others might miss.
              </p>

              <h3 className="font-display text-2xl text-slate-900 mt-8 mb-2">2. State-of-the-Art Infrastructure</h3>
              <p className="mb-6">
                At Jaipur Netralaya, Dr. Agarwal utilizes cutting-edge diagnostic tools and advanced modular operating theatres to deliver highly precise, safe, and efficient treatments.
              </p>

              <h3 className="font-display text-2xl text-slate-900 mt-8 mb-2">3. Empathetic Patient Care</h3>
              <p className="mb-12">
                Medical treatments can be stressful. Dr. Agarwal is highly regarded by her patients for her warm demeanor, clear communication, and willingness to patiently answer every question regarding the recovery roadmap.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-display text-2xl text-slate-900 mb-4">Schedule an Appointment Today</h3>
                <p className="mb-6">Don't compromise on your health. Benefit from the expertise of one of Jaipur's premium medical professionals.</p>
                <ul className="space-y-2 mb-8">
                  <li><strong>Location:</strong> Jaipur Netralaya Eye & Retina Centre, Gopalpura Bypass Road, Jaipur</li>
                  <li><strong>Book an Appointment:</strong> Visit our official website or call our helpline to book your consultation slot.</li>
                </ul>
                <Link to="/appointment" className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-white bg-accent-500 px-8 py-4 rounded-full hover:bg-accent-600 transition-colors shadow-md">
                  Book Your Consultation
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
