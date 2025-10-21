import { useState, useEffect } from 'react';

// Simple working Header component
function SimpleHeader() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '90px',
      backgroundColor: '#ffffff',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="/assets/images/common/Logo-2025-e1733738317336.jpg" 
          alt="Al-maha" 
          style={{ height: '60px', width: 'auto' }}
        />
      </div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</a>
        <a href="/about" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>About</a>
        <a href="/contact-us" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Contact</a>
      </nav>
    </header>
  );
}

// Simple working Slider component
function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/assets/images/home/al-maha-about-slide-1-new.jpg',
      title: 'Quality',
      description: 'Al Maha Foods proudly comprises a Leadership Team of Passionate Professionals.'
    },
    {
      image: '/assets/images/home/al-maha-about-slide-4-new.jpg',
      title: 'Excellence',
      description: 'Committed to delivering the highest quality Basmati rice to global markets.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={{
      marginTop: '90px',
      height: '80vh',
      minHeight: '500px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 0.7s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            color: 'white'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1
          }} />
          <div style={{
            position: 'relative',
            zIndex: 2,
            padding: '50px 50px',
            maxWidth: '600px'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '400',
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}>
              {slide.title}
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}>
              {slide.description}
            </p>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 3
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              backgroundColor: index === currentSlide ? 'white' : 'transparent',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Simple Footer component
function SimpleFooter() {
  return (
    <footer style={{
      backgroundColor: '#32373c',
      color: 'white',
      padding: '40px 20px',
      marginTop: '40px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px'
      }}>
        <div>
          <h3>Al-maha Foods</h3>
          <p>Premium Basmati Rice Exporter</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>About</a></li>
            <li><a href="/contact-us" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <SimpleHeader />
      <SimpleSlider />
      
      {/* Main Content */}
      <div style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: '#333', marginBottom: '2rem' }}>
                Welcome to Al Maha Foods
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.5rem', fontWeight: '300', lineHeight: '1.4', color: '#666', marginBottom: '2rem' }}>
                <strong>The Idea and Passion to supply World Class Basmati Rice to selected global consumers laid the foundation of Al Maha Foods in the year 1998.</strong>
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '300', lineHeight: '1.4', color: '#666', marginBottom: '2rem' }}>
                <strong>As one of the top exporter and QA services provider of Basmati Rice from India, we outstand with our best services, customer Oriented approach and best business practices.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <div style={{
        backgroundColor: '#c92228',
        padding: '60px 20px',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: '300', lineHeight: '1.4' }}>
            As a renowned entity in the industry, Al Maha Foods has earned a commendable reputation. The NABL Accreditation, ISO 9001:2015, ISO 22000:2018 & Star Export House certification to us serves as a testament to our unshakable commitment to deliver unparalleled quality, credibility, and reliability to our esteemed customers.
          </p>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
}

export default Home;