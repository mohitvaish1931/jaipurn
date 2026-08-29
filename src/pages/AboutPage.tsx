import SEO from '../components/SEO';
import About from '../components/About';
import Process from '../components/Process';
import Technology from '../components/Technology';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <SEO 
        title="About Jaipur's Most Trusted Eye Hospital | Jaipur Netralaya"
        description="Learn about Jaipur Netralaya's legacy of excellence. As the leading eye care and laser center in Jaipur, we utilize state-of-the-art technology for world-class retina surgeries."
      />
      
      <About />
      <Process />
      <Technology />
    </div>
  );
}
