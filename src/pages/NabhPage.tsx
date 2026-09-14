
import { Helmet } from 'react-helmet-async';

export default function NabhPage() {
  return (
    <>
      <Helmet>
        <title>NABH Accreditation - Jaipur Netralaya</title>
        <meta name="description" content="Jaipur Netralaya is proud to be a NABH-accredited eye care hospital. Learn about our commitment to patient safety, quality healthcare, and excellence in ophthalmology." />
      </Helmet>
      
      <div className="pt-32 pb-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-4 block">Quality & Safety</span>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-slate-900 mb-8 leading-[1.1] tracking-tight">
              NABH Accredited <br/> <span className="text-slate-500">Excellence.</span>
            </h1>
            
            <div className="prose prose-lg text-slate-600 font-sans max-w-none">
              <p className="lead text-xl md:text-2xl font-light mb-8">
                At Jaipur Netralaya, your safety, well-being, and surgical outcomes are our highest priorities. We are immensely proud to be accredited by the National Accreditation Board for Hospitals & Healthcare Providers (NABH), a constituent board of the Quality Council of India.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <img src="/WhatsApp Image 2026-07-07 at 00.32.25.jpeg" alt="NABH Certificate 1" className="w-full h-auto rounded-lg object-contain" />
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <img src="/WhatsApp Image 2026-07-07 at 00.32.25.jpeg" alt="NABH Certificate 2" className="w-full h-auto rounded-lg object-contain" />
                </div>
              </div>

              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">What is NABH Accreditation?</h2>
              <p>
                The National Accreditation Board for Hospitals & Healthcare Providers (NABH) is the apex national healthcare accreditation body in India. An NABH accreditation is a prestigious recognition granted to hospitals that meet stringent, internationally recognized standards of clinical care, patient safety, and operational transparency. 
              </p>
              <p>
                Achieving this accreditation is not a one-time event; it requires rigorous, continuous evaluation of our clinical protocols, hygiene standards, surgical safety checklists, and patient feedback mechanisms.
              </p>

              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">What This Means For Our Patients</h2>
              <p>Choosing an NABH-accredited eye hospital like Jaipur Netralaya guarantees that you are receiving care in an environment that prioritizes excellence. Here is what our accreditation means for you:</p>
              
              <ul className="list-disc pl-6 mb-8 space-y-4">
                <li><strong>Uncompromising Patient Safety:</strong> From infection control in our modular operation theaters to the strict sterilization of surgical instruments, every process is designed to minimize risk and prevent complications.</li>
                <li><strong>High Quality of Clinical Care:</strong> Our doctors and medical staff follow evidence-based clinical protocols for every treatment—whether it is a routine eye exam, cataract surgery, or a complex retinal procedure.</li>
                <li><strong>Transparency and Patient Rights:</strong> We believe in complete transparency. Our patients are fully informed about their diagnosis, proposed treatment plans, associated costs, and potential risks before any procedure is undertaken.</li>
                <li><strong>Continuous Quality Improvement:</strong> We constantly monitor our clinical outcomes and patient feedback to refine and elevate the standard of care we provide.</li>
              </ul>

              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">Our Commitment to Excellence</h2>
              <p>
                The NABH accreditation is a testament to the hard work, dedication, and expertise of the entire team at Jaipur Netralaya. However, for us, it is just a stepping stone. We remain committed to investing in the latest ophthalmic technologies, ongoing medical education, and compassionate patient care to ensure that we continue to exceed the expectations of the community we serve.
              </p>
              <p>
                When you step into Jaipur Netralaya, you can be confident that you are in safe, capable, and accredited hands.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
