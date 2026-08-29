import SEO from '../components/SEO';
import Appointment from '../components/Appointment';

export default function AppointmentPage() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <SEO 
        title="Book Appointment | Best Eye Hospital in Jaipur | Jaipur Netralaya"
        description="Book a consultation with the leading retina and cataract surgeons at Jaipur Netralaya. Secure your appointment for the best eye care in Jaipur today."
      />
      
      <Appointment />
    </div>
  );
}
