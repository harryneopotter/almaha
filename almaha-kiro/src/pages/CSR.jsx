import { useState } from 'react';
import './CSR.css';

const CSR = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const csrInitiatives = [
    {
      id: 1,
      category: 'education',
      title: 'Child Education Program',
      description: 'Supporting education for underprivileged children in rural communities.',
      image: '/assets/images/csr/Child-Education.jpg',
      details: 'We believe education is the foundation for a better future. Our child education program provides scholarships, school supplies, and infrastructure support to ensure every child has access to quality education.'
    },
    {
      id: 2,
      category: 'health',
      title: 'Healthcare Initiatives',
      description: 'Providing healthcare services and medical support to rural communities.',
      image: '/assets/images/csr/Health-Sector.jpg',
      details: 'Our healthcare initiatives focus on providing medical camps, health awareness programs, and essential medical supplies to underserved communities.'
    },
    {
      id: 3,
      category: 'water',
      title: 'Safe Drinking Water',
      description: 'Ensuring access to clean and safe drinking water for all.',
      image: '/assets/images/csr/Safe-Drinking-Water-1.jpg',
      details: 'Clean water is a basic human right. We work to provide water purification systems and maintain water sources in rural areas.'
    },
    {
      id: 4,
      category: 'agriculture',
      title: 'Farmer Awareness Programs',
      description: 'Educating farmers about sustainable farming practices and modern techniques.',
      image: '/assets/images/csr/Farmer-Awareness-2.jpg',
      details: 'We conduct training programs for farmers to adopt sustainable farming practices, improve crop yields, and ensure food security.'
    }
  ];

  const galleryImages = [
    '/assets/images/csr/csr-1.jpg',
    '/assets/images/csr/csr-2.jpg',
    '/assets/images/csr/csr3.jpg',
    '/assets/images/csr/csr4.jpg',
    '/assets/images/csr/csr5.jpg',
    '/assets/images/csr/csr6.jpg',
    '/assets/images/csr/csr7.jpg',
    '/assets/images/csr/csr8.jpg',
    '/assets/images/csr/csr9.jpg',
    '/assets/images/csr/csr10-1.jpg',
    '/assets/images/csr/IMG-20210407-WA0004-uai-488x325.jpg',
    '/assets/images/csr/IMG-20210407-WA0005-uai-732x488.jpg',
    '/assets/images/csr/IMG-20210407-WA0006-uai-1080x720.jpg',
    '/assets/images/csr/IMG-20210407-WA0008-uai-1080x720.jpg',
    '/assets/images/csr/IMG-20210407-WA0013-uai-732x488.jpg',
    '/assets/images/csr/IMG-20210407-WA0014-uai-1080x720.jpg'
  ];

  const filteredInitiatives = selectedCategory === 'all' 
    ? csrInitiatives 
    : csrInitiatives.filter(initiative => initiative.category === selectedCategory);

  return (
    <div className="csr-page">
      {/* Header */}
      <header className="site-header">
        <div className="header-content">
          <div className="logo">
            <img 
              src="/assets/images/common/Logo-2025-e1733738317336.jpg" 
              alt="Al-maha" 
            />
          </div>
          <nav className="main-nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/what-we-do">What We Do</a>
            <a href="/our-brands">Our Brands</a>
            <a href="/workplace-careers">Workplace & Careers</a>
            <a href="/csr" className="active">CSR</a>
            <a href="/contact-us">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-background">
          <img src="/assets/images/csr/csr-banner.jpg" alt="CSR Banner" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="container">
              <h1>Corporate Social Responsibility</h1>
              <p>Creating positive impact through community engagement and sustainable development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Overview Section - Following Two-Column Pattern */}
      <section className="csr-overview-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">CSR Initiatives by Al Maha</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>Al Maha Foods attributes its existence to the society and seeks to do its part for the society through its Corporate Social Responsibility (CSR) Initiative. Education, healthcare and rural development are the hallmarks of progress of mankind. It is in these fields that we carry out our CSR initiatives:</p>
                
                <div className="csr-initiatives-list">
                  <ul>
                    <li>Creating viable infrastructure for child education.</li>
                    <li>Providing health care facilities to the community.</li>
                    <li>Creating awareness among farmers.</li>
                    <li>Provision of safe drinking water in most backward regions of the country.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Activities Section - Following Two-Column Pattern */}
      <section className="csr-activities-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">CSR Activities at Al Maha</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              
              {/* CSR Gallery Grid */}
              <div className="csr-gallery-grid">
                <div className="gallery-item">
                  <img src="/assets/images/csr/Farmer-Awareness-2.jpg" alt="Farmer Awareness" />
                  <h5>Farmer Awareness</h5>
                </div>
                
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr3.jpg" alt="Farmer Awareness" />
                  <h5>Farmer Awareness</h5>
                </div>
                
                <div className="gallery-item">
                  <img src="/assets/images/csr/Safe-Drinking-Water-1.jpg" alt="Safe Drinking Water" />
                  <h5>Safe Drinking Water</h5>
                </div>
                
                <div className="gallery-item">
                  <img src="/assets/images/csr/Health-Sector.jpg" alt="Health Sector" />
                  <h5>Health Sector</h5>
                </div>
                
                <div className="gallery-item">
                  <img src="/assets/images/csr/Child-Education.jpg" alt="Child Education" />
                  <h5>Child Education</h5>
                </div>
                
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-1.jpg" alt="CSR Activity" />
                  <h5>Community Development</h5>
                </div>
                
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-2.jpg" alt="CSR Activity" />
                  <h5>Community Support</h5>
                </div>
                
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr4.jpg" alt="CSR Activity" />
                  <h5>Rural Development</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Al-maha Foods</h3>
              <p>Premium Basmati Rice Exporter & Quality Assurance Services</p>
              <div className="footer-logo">
                <img src="/assets/images/about/logo.png" alt="Al Maha Logo" />
              </div>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/what-we-do">What We Do</a></li>
                <li><a href="/our-brands">Our Brands</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="/workplace-careers">Careers</a></li>
                <li><a href="/csr">CSR</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Info</h4>
              <p>Al Maha Foods Pvt. Ltd.</p>
              <p>Basmati Rice Exporters</p>
              <p>Quality Assurance Services</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Al Maha Foods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CSR;