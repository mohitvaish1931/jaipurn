import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DrSidharthBhardwaj() {
  return (
    <>
      <SEO 
        title="Dr. Sidharth Bhardwaj - Expert Vitreoretinal Surgeon | Jaipur Netralaya"
        description="Dr. Sidharth Bhardwaj is a premier Vitreoretinal Surgeon and Ophthalmologist at Jaipur Netralaya with over 15 years of experience."
      />
      <div className="pt-32 pb-20 bg-surface min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-slate-100 shadow-lg bg-white relative">
                  <img 
                    src="/assets/high_end_doctor.png" 
                    alt="Dr. Sidharth Bhardwaj" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-4 block">Expert Specialist</span>
                <h1 className="font-display text-4xl md:text-5xl font-medium text-slate-900 mb-4">
                  Dr. Sidharth Bhardwaj
                </h1>
                <p className="font-sans text-lg text-slate-600 mb-6 font-light">
                  When it comes to safeguarding your vision, choosing an expert with advanced surgical proficiency and dedicated care is paramount. At Jaipur Netralaya, we are proud to lead the region in comprehensive eye care, driven by our premier Vitreoretinal Surgeon and Ophthalmologist, Dr. Sidharth Bhardwaj.
                </p>
                <p className="font-sans text-lg text-slate-600 mb-8 font-light">
                  With over 15 years of rich experience in treating complex eye conditions, Dr. Bhardwaj has earned an impeccable reputation for restoring sight and managing critical retinal disorders with world-class precision.
                </p>
                <Link to="/appointment" className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-white bg-accent-500 px-8 py-4 rounded-full hover:bg-accent-600 transition-colors shadow-md">
                  Book an Appointment
                </Link>
              </div>
            </div>

            <div className="prose prose-lg text-slate-600 font-sans max-w-none">
              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">Educational Background & Medical Qualifications</h2>
              <p>
                Dr. Sidharth Bhardwaj’s foundation in ophthalmology is built upon rigorous training from some of India’s most prestigious medical institutions:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>MBBS:</strong> Graduated from the premier Grant Medical College & Sir J.J. Group of Hospitals, Mumbai.</li>
                <li><strong>MS (Ophthalmology):</strong> Master of Surgery in Ophthalmology, mastering comprehensive surgical and diagnostic eye care modalities.</li>
                <li><strong>FRF (Fellowship in Retina Foundation):</strong> Completed a highly specialized fellowship in vitreoretinal surgery, enabling him to treat high-stakes structural issues behind the eye lens.</li>
              </ul>

              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">Rich Work Experience & Clinical Expertise</h2>
              <p>
                Dr. Bhardwaj brings a wealth of clinical exposure from top-tier eye hospitals across India, mastering intricate surgical methods before establishing advanced care protocols in Rajasthan:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>Former Consultant at Dr. Nagpal’s Retina Foundation (Ahmedabad):</strong> Dr. Bhardwaj polished his advanced microscopic surgical skills at this globally recognized center, specializing in deep vitreous body diseases and complex micro-incision vitrectomies.</li>
                <li><strong>Retina Specialist at Anand Hospital & Eye Centre:</strong> Served over a decade managing high-volume referrals for traumatic and advanced eye care conditions.</li>
                <li><strong>Founder & Chief Consultant at Jaipur Netralaya:</strong> Leading a state-of-the-art facility equipped with contemporary diagnostic technology, providing tailored medical and surgical treatment pathways to thousands of local and international patients.</li>
              </ul>

              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">Core Areas of Specialization</h2>
              <p className="mb-4">
                Dr. Bhardwaj focuses on saving sight through timely, micro-invasive treatments for both standard and advanced eye ailments:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>Vitreoretinal Diseases & Surgery:</strong> Expert care for Retinal Detachment, macular holes, retinal tears, and vitreous hemorrhage.</li>
                <li><strong>Diabetic Retinopathy Management:</strong> Tailored care combining high-precision laser photocoagulation and advanced intravitreal injections to halt advanced vision deterioration caused by diabetes.</li>
                <li><strong>Advanced Cataract Surgery:</strong> Utilizing ultra-modern micro-incision phacoemulsification techniques for swift, sutureless vision recovery.</li>
                <li><strong>Glaucoma Management:</strong> Comprehensive early screening, pressure monitoring, and advanced therapeutics to preserve nerve health.</li>
                <li><strong>Refractive Laser & Squint Corrections:</strong> Providing targeted vision corrections to enhance everyday visual performance.</li>
              </ul>

              <h2 className="font-display text-3xl text-slate-900 mt-12 mb-6">Why Choose Dr. Sidharth Bhardwaj at Jaipur Netralaya?</h2>
              <p className="mb-12">
                Patient reviews across medical platforms consistently highlight Dr. Bhardwaj’s calm demeanor, diagnostic accuracy, and patient-first philosophy. He takes the necessary time to thoroughly explain underlying conditions, bringing reassurance to families during complex surgical journeys. Backed by an efficient, hygienic facility and compassionate staff, your visual comfort remains our highest priority.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-display text-2xl text-slate-900 mb-4">Schedule an Appointment Today</h3>
                <ul className="space-y-2 mb-8">
                  <li><strong>Location:</strong> 160 A Vishveshwariya Nagar, Opposite Tilak Public School, Gopalpura Bypass Road, Jaipur.</li>
                  <li><strong>Consultation Hours:</strong> Monday to Friday (10:00 AM – 1:00 PM & 4:00 PM – 7:00 PM) | Saturday (10:00 AM – 1:00 PM).</li>
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
