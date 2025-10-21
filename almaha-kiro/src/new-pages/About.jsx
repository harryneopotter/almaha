import './About.css';

function About() {
  return (
    <div className="about-page">
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
            <a href="/about" className="active">About Us</a>
            <a href="/what-we-do">What We Do</a>
            <a href="/our-brands">Our Brands</a>
            <a href="/workplace-careers">Workplace & Careers</a>
            <a href="/csr">CSR</a>
            <a href="/contact-us">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-background">
          <img src="/assets/images/about/Rectangle-31-1.jpg" alt="About Us Banner" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="container">
              <h1>About Us</h1>
              <p>Leading Basmati Rice Exporter & Quality Assurance Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section - Following Two-Column Pattern */}
      <section className="about-main-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">About</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>Al Maha Foods, as First and Largest Quality Assurance Organisation for Indian Basmati Rice, provides products and services to selected quality conscious global customers.</p>
                
                <p>We are one of the Top exporters of Basmati Rice from India with our strict quality controls we ensure right product at right price for buyer.</p>
                
                <p>Al Maha Foods was incepted in year 1998 with a vision to enhance value in Indian Basmati Rice by implementing high quality standards in processing and exports of rice from India.</p>
                
                <p>Products and services of Al Maha Foods are scientifically developed and managed to give maximum benefit to its global customers. We offer our services in three categories.</p>
                
                <div className="services-list">
                  <p><strong>Export of Basmati Rice</strong><br />
                  <strong>Quality Assurance Services</strong><br />
                  <strong>Domestic Market</strong></p>
                </div>
                
                <p>As a renowned entity in the industry, Al Maha Foods has earned a commendable reputation. NABL Accreditation, ISO 9001:2015, ISO 22000:2018 & Star Export House certification to us serves as a testament to our unshakable commitment to deliver unparalleled quality, credibility, and reliability to our esteemed customers. With a steadfast focus on excellence and customer satisfaction, our services are tailor-made to address any concerns of our valued customers.</p>
              </div>
              
              {/* Download Links */}
              <div className="download-links">
                <a href="/assets/documents/Al-Maha-Company-Catlogue-for-about-us-page.pdf" 
                   className="download-button" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Download Company Catalog
                </a>
                <a href="/assets/documents/Whistle-Blower-Policy-PDF.pdf" 
                   className="download-button" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Whistle Blower Policy
                </a>
              </div>
              
              {/* Company Images */}
              <div className="company-images">
                <div className="company-image">
                  <img src="/assets/images/about/image_2023_05_24T11_18_08_668Z.png" alt="Al Maha Foods 25 Years Excellence" />
                </div>
                <div className="company-image">
                  <img src="/assets/images/about/logo.png" alt="Al Maha Logo" />
                </div>
                <div className="company-image">
                  <img src="/assets/images/about/GPW_1.jpg" alt="Great Place to Work" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Following Two-Column Pattern */}
      <section className="vision-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Al Maha Vision</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>To become a leading Rice supplier from India to consumers across the globe with high quality assurance services resulting in customer satisfaction.</p>
              </div>
              
              {/* Vision Goals */}
              <div className="vision-goals">
                <div className="vision-goal">
                  <div className="vision-icon">
                    <img src="/assets/images/about/Group-368.png" alt="QA Services Icon" />
                  </div>
                  <div className="vision-text">
                    <h5>Among top 10 QA service providers for Basmati Rice and Alike products in India</h5>
                  </div>
                </div>
                
                <div className="vision-goal">
                  <div className="vision-icon">
                    <img src="/assets/images/about/Group-369.jpg" alt="Export Icon" />
                  </div>
                  <div className="vision-text">
                    <h5>To be Among the Top 50 Exporters of Rice to GCC and Asia</h5>
                  </div>
                </div>
                
                <div className="vision-goal">
                  <div className="vision-icon">
                    <img src="/assets/images/about/Group-370.png" alt="Revenue Icon" />
                  </div>
                  <div className="vision-text">
                    <h5>To multiply our revenue consistently</h5>
                  </div>
                </div>
              </div>
              
              {/* Vision Image */}
              <div className="vision-image">
                <img src="/assets/images/about/Rectangle-31-1.jpg" alt="Al Maha Vision" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Al Maha Core Values Section - Following Two-Column Pattern */}
      <section className="core-values-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Al Maha Core Values</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              
              {/* Circular Values Diagram */}
              <div className="values-diagram">
                <div className="values-circle">
                  <div className="center-value">
                    <h3>Core Values</h3>
                  </div>
                  <div className="value-item value-integrity">
                    <span>INTEGRITY</span>
                  </div>
                  <div className="value-item value-quality">
                    <span>QUALITY</span>
                  </div>
                  <div className="value-item value-safety">
                    <span>SAFETY</span>
                  </div>
                  <div className="value-item value-leadership">
                    <span>LEADERSHIP</span>
                  </div>
                  <div className="value-item value-innovation">
                    <span>INNOVATION</span>
                  </div>
                  <div className="value-item value-customer">
                    <span>CUSTOMER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Following Two-Column Pattern */}
      <section className="team-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">The Team</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <h3>Total quality people is our heritage</h3>
                <p>Our team of seasoned professionals shares a passion for excellence across all levels of our business value chain - Production, Processing, Packaging, Shipping. Our team demonstrates deep understanding of every aspect of Basmati Rice cultivating to the most rigorous international standards. We continuously seek to improve and develop practices, embracing sustainability across operational areas, backed by robust quality assurance practices proven time and again with the most reputable companies in the industry.</p>
              </div>
              
              {/* Team Images */}
              <div className="team-images">
                <div className="image-pair">
                  <img src="/assets/images/about/team-image.jpg" alt="Office team meeting" />
                  <img src="/assets/images/career/Group.jpg" alt="Team activity meeting" />
                </div>
              </div>
              
              <div className="description">
                <p>Our commitment to continuous learning and development ensures that our team stays at the forefront of industry innovations. We foster strong relationships with our partners, suppliers, and customers, building trust through transparency, reliability, and consistent delivery of exceptional results.</p>
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
}

export default About;