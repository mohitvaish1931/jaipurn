import Hero from '../components/Hero';
import About from '../components/About';
import Treatments from '../components/Treatments';
import Process from '../components/Process';
import Technology from '../components/Technology';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import Appointment from '../components/Appointment';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="about"><About /></div>
      <Treatments />
      <Process />
      <Technology />
      <div id="doctors"><Doctors /></div>
      <Testimonials />
      <Appointment />
      <Blog />
    </>
  );
}
