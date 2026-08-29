import SEO from '../components/SEO';
import Treatments from '../components/Treatments';

export default function TreatmentsPage() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <SEO 
        title="Advanced Cataract, Retina & Glaucoma Treatments in Jaipur"
        description="Explore the best clinical eye treatments in Jaipur at Jaipur Netralaya. From micro-incision cataract surgery to advanced vitreoretinal and laser therapies."
      />
      
      <Treatments />
    </div>
  );
}
