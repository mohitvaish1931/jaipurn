import SEO from '../components/SEO';
import Doctors from '../components/Doctors';

export default function DoctorsPage() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <SEO 
        title="Top Retina Specialists & Eye Surgeons in Jaipur | Meet Our Team"
        description="Consult with the top-rated ophthalmologists and retina specialists in Jaipur. The expert medical team at Jaipur Netralaya is dedicated to preserving your vision."
      />
      
      <Doctors />
    </div>
  );
}
