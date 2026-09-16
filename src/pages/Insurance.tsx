import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const insuranceCompanies = [
  "Bajaj Allianz General Insurance Co. Ltd",
  "Cholamandalam MS General Insurance Co. Ltd",
  "Navi General Insurance Ltd.",
  "ECGC Ltd.",
  "Future Generali India Insurance Co. Ltd.",
  "HDFC ERGO General Insurance Co. Ltd",
  "IFFCO-TOKIO General Insurance Co. Ltd.",
  "ICICI Lombard General Insurance Co. Ltd.",
  "Kotak Mahindra General insurance co. Ltd.",
  "Liberty General Insurance Co. Ltd.",
  "Magma HDI General Insurance Co. Ltd.",
  "National Insurance Co. Ltd.",
  "Raheja QBE General Insurance Co. Ltd.",
  "Reliance General Insurance Co. Ltd.",
  "Royal Sundaram General Insurance Co. Ltd",
  "SBI General Insurance Co. Ltd.",
  "Shriram General Insurance Co. Ltd.",
  "Tata-AIG General Insurance Co. Ltd.",
  "The New India Assurance Co. Ltd.",
  "The Oriental Insurance Co. Ltd.",
  "Universal Sompo General Insurance Co. Ltd.",
  "United India Insurance Co. Ltd.",
  "Acko General Insurance Ltd.",
  "Edelweiss General Insurance Company Limited",
  "Go Digit General Insurance Limited",
  "Aditya Birla Health insurance Co Ltd.",
  "Manipal Cigna Health Insurance Company Limited",
  "Niva Bupa Health Insurance Company Limited",
  "Care Health Insurance Ltd",
  "Star Health & Allied Insurance Co. Ltd"
];

const tpas = [
  "Medi Assist Insurance TPA Pvt. Ltd.",
  "Vidal Health Insurance TPA Pvt. Ltd.",
  "MD India Healthcare Services TPA Pvt. Ltd.",
  "Heritage Health Insurance TPA Pvt. Ltd.",
  "Family Health Plan (FHPL) TPA Ltd.",
  "Paramount Health Services & Insurance TPA Pvt. Ltd.",
  "Health India Insurance TPA Services Pvt. Ltd.",
  "Health Insurance TPA of India Ltd. (HITPA)",
  "Raksha Health Insurance TPA Pvt. Ltd.",
  "Medsave Health Insurance TPA Ltd.",
  "Safeway Insurance TPA Pvt. Ltd.",
  "Vipul MedCorp Insurance TPA Pvt. Ltd.",
  "Alankit Health Care TPA Ltd.",
  "Park Mediclaim TPA Pvt. Ltd.",
  "Good Health Insurance TPA Ltd.",
  "Ericson Insurance TPA Pvt. Ltd."
];

export default function Insurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-48 pb-24 bg-surface">
      <div className="container mx-auto px-6 relative z-10">
        <Link to="/" className="inline-flex items-center text-sm font-sans tracking-[0.2em] uppercase text-slate-500 hover:text-accent-500 mb-12 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Overview
        </Link>
        
        <div className="mb-20">
          <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-6 block">Cashless Facility</span>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Empanelment & <br/><span className="text-accent-500">Insurance.</span>
          </h1>
          <div className="prose prose-lg prose-slate font-light leading-relaxed max-w-3xl text-slate-700">
            <ul className="space-y-4">
              <li><strong>1.</strong> Cashless treatment under all Medical Insurance and TPA companies (List below)</li>
              <li><strong>2.</strong> Cashless OPD & Surgical Procedures under RGHS</li>
              <li><strong>3.</strong> Rajasthan University Empanelment</li>
              <li><strong>4.</strong> Sanskrit University Empanelment</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl text-slate-900 mb-8 pb-4 border-b border-slate-200">Insurance Companies</h2>
            <ul className="space-y-3">
              {insuranceCompanies.map((company, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="font-sans text-slate-700 text-lg font-light leading-relaxed">{company}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl text-slate-900 mb-8 pb-4 border-b border-slate-200">TPAs</h2>
            <ul className="space-y-3">
              {tpas.map((tpa, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="font-sans text-slate-700 text-lg font-light leading-relaxed">{tpa}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}
