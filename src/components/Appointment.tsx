import { useState } from 'react';
import { motion } from 'framer-motion';

const InputField = ({ id, type = 'text', placeholder, value, onChange, onFocus, onBlur, isFocused }: any) => (
  <div className="relative mb-12">
    <input
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      onFocus={() => onFocus(id)}
      onBlur={() => onBlur(null)}
      className="w-full bg-transparent border-b border-slate-200 focus:border-transparent text-slate-900 pb-4 outline-none transition-all placeholder-slate-400 font-sans text-xl font-light"
      placeholder={placeholder}
      required
    />
    <motion.div 
      className="absolute bottom-0 left-0 h-[1px] bg-accent-500 z-10"
      initial={{ width: '0%' }}
      animate={{ width: isFocused ? '100%' : '0%' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    />
  </div>
);

export default function Appointment() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Constructing WhatsApp Message
    const whatsappNumber = "919828892342";
    const text = `*New Appointment Request - Jaipur Netralaya*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Date:* ${formData.date}%0A` +
                 `*Time:* ${formData.time}%0A` +
                 `*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-40 bg-surface relative overflow-hidden" id="booking">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.3em] text-accent-500 uppercase font-sans mb-6 block">Initiate</span>
            <h2 className="font-display text-5xl md:text-7xl font-medium text-slate-900 mb-10 leading-[1.1] tracking-tight">
              Request a <br/> <span className="text-slate-500">Consultation.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-md">
              Secure your appointment with our elite surgical team. We will contact you within 24 hours to confirm your schedule.
            </p>
            
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-slate-500 mb-2">Direct Line</p>
                <p className="font-display text-2xl text-slate-900">+91 98288 92342</p>
                <p className="font-display text-2xl text-slate-900 mt-1">+91 97997 72342</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-slate-500 mb-2">OPD Timings</p>
                <p className="font-display text-2xl text-slate-900">MON - SAT</p>
                <p className="font-sans text-slate-600 text-lg mt-1">10 AM - 2 PM | 5 PM - 7 PM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/50 backdrop-blur-3xl p-12 md:p-16 rounded-[2rem] border border-slate-200">
              <form onSubmit={handleSubmit}>
                <InputField id="name" placeholder="Legal Full Name" value={formData.name} onChange={handleChange} onFocus={setFocusedField} onBlur={setFocusedField} isFocused={focusedField === 'name'} />
                <InputField id="phone" placeholder="Contact Number" value={formData.phone} onChange={handleChange} onFocus={setFocusedField} onBlur={setFocusedField} isFocused={focusedField === 'phone'} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  <InputField id="date" type="text" placeholder="Preferred Date (DD/MM)" value={formData.date} onChange={handleChange} onFocus={setFocusedField} onBlur={setFocusedField} isFocused={focusedField === 'date'} />
                  <InputField id="time" type="text" placeholder="Time Frame" value={formData.time} onChange={handleChange} onFocus={setFocusedField} onBlur={setFocusedField} isFocused={focusedField === 'time'} />
                </div>
                
                <div className="relative mb-16 mt-8">
                  <textarea 
                    id="message"
                    rows={1}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-slate-200 focus:border-transparent text-slate-900 pb-4 outline-none transition-all placeholder-slate-400 resize-none font-sans text-xl font-light"
                    placeholder="Brief description of your condition"
                  ></textarea>
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[1px] bg-accent-500 z-10"
                    initial={{ width: '0%' }}
                    animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>

                <button type="submit" className="group relative px-12 py-6 bg-accent-500 text-white font-display font-semibold text-lg overflow-hidden transition-all duration-500 rounded-full w-full md:w-auto">
                  <div className="absolute inset-0 bg-accent-600 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Submit via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

