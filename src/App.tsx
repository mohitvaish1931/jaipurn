import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TreatmentDetails from './pages/TreatmentDetails';
import BlogListing from './pages/BlogListing';
import BlogPost from './pages/BlogPost';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import DoctorsPage from './pages/DoctorsPage';
import AppointmentPage from './pages/AppointmentPage';
import NabhPage from './pages/NabhPage';
import DrDivyaAgarwal from './pages/DrDivyaAgarwal';
import DrSidharthBhardwaj from './pages/DrSidharthBhardwaj';

import Insurance from './pages/Insurance';
import CancellationPolicy from './pages/CancellationPolicy';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <main className="bg-background text-slate-900 selection:bg-accent-500 selection:text-white font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:id" element={<TreatmentDetails />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/nabh-accreditation" element={<NabhPage />} />
            <Route path="/doctor/divya-agarwal" element={<DrDivyaAgarwal />} />
            <Route path="/doctor/sidharth-bhardwaj" element={<DrSidharthBhardwaj />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/blogs" element={<BlogListing />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </HelmetProvider>
  );
}

export default App;
