import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TreatmentDetails from './pages/TreatmentDetails';

function App() {
  return (
    <Router>
      <main className="bg-background text-slate-900 selection:bg-accent-500 selection:text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments/:id" element={<TreatmentDetails />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
