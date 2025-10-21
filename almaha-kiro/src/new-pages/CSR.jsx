import './CSR.css';

const CSR = () => {
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

      {/* Hero Banner Section */}
      <section className="hero-banner">
        <div className="banner-background">
          <img src="/assets/images/csr/image_2023_05_24T11_18_08_668Z.png" alt="Corporate Social Responsibility" />
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <div className="container">
              <h1>Corporate Social Responsibility</h1>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Activities Video Section - Following Two-Column Pattern */}
      <section className="csr-video-section">
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
              <div className="description">
                <p>Watch our CSR activities in action and see the positive impact we're making in communities across India.</p>
              </div>
              
              {/* Video Player */}
              <div className="video-container">
                <div className="video-player">
                  <img src="/assets/images/csr/csr-1.jpg" alt="CSR Activities at Al Maha Foods" className="video-thumbnail" />
                  <div className="video-overlay">
                    <div className="play-button">
                      <i className="fa fa-play"></i>
                    </div>
                    <div className="video-title">
                      <h3>CSR Activities at Al Maha Foods</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility Gallery Section - Following Two-Column Pattern */}
      <section className="csr-gallery-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Social Responsibility is Our Passion!</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>Our commitment to social responsibility is reflected in our diverse range of community initiatives and programs.</p>
              </div>
              
              {/* CSR Gallery Grid - 2 columns × multiple rows */}
              <div className="csr-gallery">
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-1.jpg" alt="Community event" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-2.jpg" alt="Educational initiative" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-3.jpg" alt="Health camp" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-4.jpg" alt="Infrastructure project" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-5.jpg" alt="Award ceremony" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-6.jpg" alt="Team activity" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-7.jpg" alt="Water project" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-8.jpg" alt="Farmer awareness program" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr-9.jpg" alt="Community development" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/csr10-1.jpg" alt="Educational support" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/IMG-20210407-WA0005-uai-732x488.jpg" alt="Community outreach" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/IMG-20210407-WA0006-uai-1080x720.jpg" alt="Environmental initiative" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/IMG-20210407-WA0008-uai-1080x720.jpg" alt="Healthcare program" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/IMG-20210407-WA0013-uai-732x488.jpg" alt="Skills development" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/IMG-20210407-WA0014-uai-1080x720.jpg" alt="Infrastructure development" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/IMG-20210407-WA0015-uai-1080x720.jpg" alt="Community celebration" />
                </div>
                <div className="gallery-item">
                  <img src="/assets/images/csr/IMG-20210407-WA0004-uai-488x325.jpg" alt="Social impact program" />
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