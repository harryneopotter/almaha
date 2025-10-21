import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CSR from './pages/CSR';
import Career from './pages/Career';
import Exports from './pages/Exports';
import NotFound from './pages/NotFound';
import './styles/globals.css';
import './styles/variables.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/corporate-social-responsibility" element={<CSR />} />
        <Route path="/culture-at-al-maha" element={<Career />} />
        <Route path="/what-we-do/exports" element={<Exports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
