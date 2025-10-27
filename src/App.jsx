import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import OurBrands from './pages/OurBrands';
import Blog from './pages/Blog';
import Career from './pages/Career';
import CSR from './pages/CSR';
import CultureAtAlMaha from './pages/CultureAtAlMaha';
import Contact from './pages/Contact';
import NewsArticle from './pages/NewsArticle';
import BusinessArticle from './pages/BusinessArticle';
import Exports from './pages/Exports';
import QualityAssurance from './pages/QualityAssurance';
import DomesticMarket from './pages/DomesticMarket';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* About Us */}
          <Route path="about" element={<About />} />
          {/* What We Do - Single page with sections */}
          <Route path="what-we-do" element={<WhatWeDo />} />
          {/* What We Do - Subpages */}
          <Route path="what-we-do/exports" element={<Exports />} />
          <Route path="what-we-do/quality-assurance" element={<QualityAssurance />} />
          <Route path="what-we-do/domestic-market" element={<DomesticMarket />} />
          {/* Our Brands - Standalone page */}
          <Route path="our-brands" element={<OurBrands />} />
          {/* Blog - Standalone page */}
          <Route path="blog" element={<Blog />} />
          {/* Workplace & Careers - redirect to canonical culture path */}
          <Route path="career" element={<Navigate to="/culture-at-al-maha" replace />} />
          {/* Culture at Al Maha - standalone route to match live path */}
          <Route path="culture-at-al-maha" element={<CultureAtAlMaha />} />
          {/* CSR */}
          <Route path="corporate-social-responsibility" element={<CSR />} />
          {/* Contact Us */}
          <Route path="contact-us" element={<Contact />} />
          <Route path="contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="Contact" element={<Navigate to="/contact-us" replace />} />
          {/* News Articles */}
          <Route path="news/:slug" element={<NewsArticle />} />
          {/* Business Article */}
          <Route path="from-strategy-to-success-the-journey-of-a-visionary-ceo-business-connect" element={<BusinessArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
