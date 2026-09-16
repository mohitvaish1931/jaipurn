import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Jaipur Netralaya",
    "image": "https://jaipurnetralaya.com/1000262746.png",
    "@id": "https://jaipurnetralaya.com",
    "url": "https://jaipurnetralaya.com",
    "telephone": "+919828892342",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "160 A, Gopalpura Bypass Rd, opposite Tilak public school, Vishveshariya Nagar",
      "addressLocality": "Jaipur",
      "addressRegion": "RJ",
      "postalCode": "302018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.874,
      "longitude": 75.768
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "medicalSpecialty": [
      "Ophthalmologic",
      "Surgical"
    ]
  };

  return (
    <>
      <SEO
        title="Best Eye Hospital in Jaipur | Top Retina Specialist & Cataract Surgery"
        description="Jaipur Netralaya is the premier eye hospital in Jaipur, Rajasthan. Rated the top eye clinic for advanced cataract surgery, retina treatments, and glaucoma care by expert specialists."
        schema={localBusinessSchema}
      />
      <Hero />

      {/* Quick Links Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link to="/about" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center">
              <h3 className="font-display text-2xl text-slate-900 mb-2">Our Legacy</h3>
              <p className="text-slate-500 font-sans font-light">Learn about our history and technology.</p>
            </Link>
            <Link to="/treatments" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center">
              <h3 className="font-display text-2xl text-slate-900 mb-2">Treatments</h3>
              <p className="text-slate-500 font-sans font-light">Explore our clinical expertise.</p>
            </Link>
            <Link to="/doctors" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center">
              <h3 className="font-display text-2xl text-slate-900 mb-2">Surgeons</h3>
              <p className="text-slate-500 font-sans font-light">Meet our world-class medical team.</p>
            </Link>
            <Link to="/appointment" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center">
              <h3 className="font-display text-2xl text-slate-900 mb-2">Book Consult</h3>
              <p className="text-slate-500 font-sans font-light">Schedule your visit with us today.</p>
            </Link>
          </div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
      <Blog />
    </>
  );
}
