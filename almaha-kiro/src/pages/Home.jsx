import { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/assets/images/exports/rice_field.jpg',
      title: 'Al Maha Foods',
      description: 'We are dedicated to deliver Excellence in Basmati Rice Products and Services.'
    },
    {
      image: '/assets/images/exports/basmtrice.jpg',
      title: 'Leadership',
      description: 'Al Maha Foods proudly comprises a Leadership Team of Passionate Professionals.'
    },
    {
      image: '/assets/images/home/al-maha-about-slide-6-new.jpg',
      title: 'Quality',
      description: 'Quality is primary guideline for everything we do while delivering Basmati Rice and Quality Assurance services.'
    },
    {
      image: '/assets/images/home/al-maha-about-slide-7-new.jpg',
      title: 'Customer Satisfaction',
      description: 'Al Maha Foods par excellence in its Customer Oriented Approach and has been achieving highest recognition from customers.'
    }
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="home-page">
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
            <a href="/" className="active">Home</a>
            <a href="/about">About Us</a>
            <a href="/what-we-do">What We Do</a>
            <a href="/our-brands">Our Brands</a>
            <a href="/workplace-careers">Workplace & Careers</a>
            <a href="/csr">CSR</a>
            <a href="/contact-us">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button className="nav-arrow nav-prev" onClick={goToPrevious} aria-label="Previous slide">
            ‹
          </button>
          <button className="nav-arrow nav-next" onClick={goToNext} aria-label="Next slide">
            ›
          </button>
        </div>
      </section>

      {/* Welcome Section - Following Styling Guide Pattern */}
      <section className="welcome-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Welcome to Al Maha Foods</h2>
              
              {/* Logo Images Stack */}
              <div className="logo-stack">
                <div className="logo-item">
                  <img src="/assets/images/home/image_2023_05_24T11_18_08_668Z.png" alt="Al Maha Foods" />
                </div>
                <div className="logo-item">
                  <img src="/assets/images/home/logo.png" alt="Al Maha Logo" />
                </div>
                <div className="logo-item">
                  <img src="/assets/images/home/GPW_1.jpg" alt="GPW Award" />
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>The Idea and Passion to supply World Class Basmati Rice to selected global consumers laid the foundation of Al Maha Foods in the year 1998.</p>
                
                <p>As one of the top exporter and QA services provider of Basmati Rice from India, we outstand with our best services, customer Oriented approach and best business practices. Our business dealings are governed by transparency in process, mutual trust, and mutually beneficial long-term business relationships.</p>
                
                <p>Al Maha Foods has become synonym with Quality standards, when it comes to exports and quality assurance services for Basmati Rice.</p>
              </div>

              {/* Image Gallery */}
              <div className="image-gallery">
                <div className="gallery-item">
                  <img src="/assets/images/home/Almaha-page-1-images.png" alt="Al Maha Gallery" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Certification Section */}
      <section className="certification-section">
        <div className="cert-container">
          <p>As a renowned entity in the industry, Al Maha Foods has earned a commendable reputation. The NABL Accreditation, ISO 9001:2015, ISO 22000:2018 & Star Export House certification to us serves as a testament to our unshakable commitment to deliver unparalleled quality, credibility, and reliability to our esteemed customers. With a steadfast focus on excellence and customer satisfaction, our services are tailor-made to address any concerns of our valued customers.</p>
        </div>
      </section>

      {/* Vision Section - Full Width with Overlay */}
      <section className="vision-section">
        <div className="vision-background">
          <img src="/assets/images/home/Almaha-page-1-images.png" alt="Vision Background" />
          <div className="vision-overlay"></div>
          <button className="play-button" aria-label="Play video">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)" />
              <path d="M25 20L40 30L25 40V20Z" fill="#c92228" />
            </svg>
          </button>
          <div className="vision-text-overlay">
            <div className="container">
              <div className="vision-content">
                <h3>Vision</h3>
                <p>To become a leading Rice supplier from India to consumers across the globe with high quality assurance services resulting in customer satisfaction.</p>
                <h6>-HR Salman, Managing Director</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Presence Section - Following Styling Guide Pattern */}
      <section className="international-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">International Presence</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>We are a globally recognized brand, offering our products to customers in different parts of the World. We cater to diverse International Customers with our Basmati Rice and Quality Assurance Services. Al Maha strives to provide highest quality products & services to global customers through its strong international presence & commitment to excellence.</p>
              </div>
              
              {/* World Map Placeholder */}
              <div className="world-map">
                <div className="map-placeholder">
                  <p>World Map with highlighted regions (to be implemented)</p>
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
                <img src="/assets/images/home/logo.png" alt="Al Maha Logo" />
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/what-we-do">What We Do</a></li>
                <li><a href="/our-brands">Our Brands</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="/what-we-do/exports">Exports Profile</a></li>
                <li><a href="/what-we-do/quality-assurance">Quality Assurance</a></li>
                <li><a href="/what-we-do/domestic-market">Domestic Market</a></li>
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
}

export default Home;