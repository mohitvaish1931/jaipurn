import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function CancellationPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-40 pb-24 bg-surface relative">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-sm font-sans tracking-[0.2em] uppercase text-slate-500 hover:text-accent-500 mb-12 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back Home
        </Link>
        
        <h1 className="font-display text-4xl md:text-6xl font-medium text-slate-900 mb-12">
          Refund and <span className="text-accent-500">Cancellation Policy</span>
        </h1>

        <div className="prose prose-lg prose-slate max-w-none text-slate-700 font-sans font-light leading-relaxed">
          <h2 className="font-display font-medium text-2xl text-slate-900 mt-10 mb-4">1. Introduction</h2>
          <p>
            At Jaipur Netralaya, we are committed to providing our patients with the best possible healthcare services. We understand that there may be circumstances that require patients to request a refund or cancellation of services. This policy outlines the conditions and procedures for refunds and cancellations.
          </p>

          <h2 className="font-display font-medium text-2xl text-slate-900 mt-10 mb-4">2. Appointment Cancellation</h2>
          
          <h3 className="font-display font-medium text-xl text-slate-800 mt-6 mb-3">2.1. Cancellation by the Patient</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Patients may cancel their appointments without any charges up to 48 hours before the scheduled time.</li>
            <li>Cancellations made less than 24 hours before the appointment may incur a cancellation fee of up to 20% of the consultation fee.</li>
            <li>To cancel an appointment, please contact our HR Miss Harshita Sharma at +91 6377-901473</li>
          </ul>

          <h3 className="font-display font-medium text-xl text-slate-800 mt-6 mb-3">2.2. Cancellation by the Hospital</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>The Hospital reserves the right to cancel or reschedule appointments due to unforeseen circumstances such as doctor unavailability or emergencies.</li>
            <li>In such cases, patients will be notified as soon as possible, and a full refund or rescheduled appointment will be offered.</li>
          </ul>

          <h2 className="font-display font-medium text-2xl text-slate-900 mt-10 mb-4">3. Refunds for Inpatient Services</h2>
          
          <h3 className="font-display font-medium text-xl text-slate-800 mt-6 mb-3">3.1. Advance Payments</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Any advance payments made for inpatient services are non-refundable.</li>
            <li>Only Patients who have deposited security amount against pending insurance payments are eligible for refunds.</li>
          </ul>

          <h3 className="font-display font-medium text-xl text-slate-800 mt-6 mb-3">3.2. Refund Process</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Refund requests must be submitted in writing to our HR Harshita Sharma.</li>
            <li>Refunds will be processed within 14 business days from the date of the request.</li>
            <li>Refunds will be made through the same mode of payment used at the time of booking.</li>
          </ul>

          <h2 className="font-display font-medium text-2xl text-slate-900 mt-10 mb-4">4. Refunds for Outpatient Services</h2>
          
          <h3 className="font-display font-medium text-xl text-slate-800 mt-6 mb-3">4.1. Consultation Fees</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Consultation fees are generally non-refundable except in cases where the service was not provided due to hospital or doctor-related issues.</li>
            <li>Refund requests must be submitted in writing to our HR Miss Harshita Sharma at +91 6377-901473</li>
          </ul>

          <h3 className="font-display font-medium text-xl text-slate-800 mt-6 mb-3">4.2. Procedure and Test Fees</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Fees for medical procedures and tests are non-refundable.</li>
          </ul>

          <h2 className="font-display font-medium text-2xl text-slate-900 mt-10 mb-4">5. No-Show Policy</h2>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Patients who do not show up for their scheduled appointments without prior notice will not be eligible for a refund of the consultation fee.</li>
            <li>Repeated no-shows may result in the requirement of advance payment for future appointments.</li>
          </ul>

          <h2 className="font-display font-medium text-2xl text-slate-900 mt-10 mb-4">6. Contact Information</h2>
          <p className="mb-6">
            For any questions or concerns regarding our refund and cancellation policy, please contact us at:<br/>
            <strong>Phone:</strong> +91 9828892342
          </p>

          <h2 className="font-display font-medium text-2xl text-slate-900 mt-10 mb-4">7. Amendments</h2>
          <p className="mb-6">
            The Hospital reserves the right to amend this refund and cancellation policy at any time. Any changes will be posted on our websites.
          </p>
        </div>
      </div>
    </div>
  );
}
