import { useState } from 'react';
import './Exports.css';

const Exports = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const riceVarieties = [
    {
      id: 1,
      name: 'Basmati 1121',
      category: 'premium',
      description: 'Extra long grain Basmati rice with exceptional aroma and taste.',
      features: ['Extra Long Grain', 'Premium Quality', 'Aged Rice', 'Export Grade'],
      image: '/assets/images/exports/basmtrice.jpg',
      specifications: {
        length: '8.30-8.40 mm',
        moisture: 'Max 12%',
        brokenGrains: 'Max 1%',
        aging: '2+ Years'
      }
    },
    {
      id: 2,
      name: 'Pusa Basmati 1509',
      category: 'premium',
      description: 'High-quality Basmati rice with excellent cooking properties.',
      features: ['Long Grain', 'Aromatic', 'Non-Sticky', 'Fluffy Texture'],
      image: '/assets/images/exports/Export-1.jpeg',
      specifications: {
        length: '7.50-8.00 mm',
        moisture: 'Max 12%',
        brokenGrains: 'Max 2%',
        aging: '1+ Years'
      }
    },
    {
      id: 3,
      name: 'Traditional Basmati',
      category: 'standard',
      description: 'Classic Basmati rice with traditional aroma and cooking quality.',
      features: ['Traditional Variety', 'Good Aroma', 'Reliable Quality', 'Cost Effective'],
      image: '/assets/images/exports/Export-2.jpeg',
      specifications: {
        length: '6.50-7.00 mm',
        moisture: 'Max 13%',
        brokenGrains: 'Max 3%',
        aging: '6+ Months'
      }
    },
    {
      id: 4,
      name: 'Sella Basmati',
      category: 'processed',
      description: 'Parboiled Basmati rice with enhanced nutritional value.',
      features: ['Parboiled', 'Golden Color', 'Enhanced Nutrition', 'Longer Shelf Life'],
      image: '/assets/images/exports/Export-3.jpeg',
      specifications: {
        length: '7.00-8.00 mm',
        moisture: 'Max 14%',
        brokenGrains: 'Max 2%',
        aging: '1+ Years'
      }
    }
  ];

  const exportDestinations = [
    { country: 'UAE', percentage: 25, flag: '🇦🇪' },
    { country: 'Saudi Arabia', percentage: 20, flag: '🇸🇦' },
    { country: 'Kuwait', percentage: 15, flag: '🇰🇼' },
    { country: 'Qatar', percentage: 12, flag: '🇶🇦' },
    { country: 'Oman', percentage: 10, flag: '🇴🇲' },
    { country: 'Others', percentage: 18, flag: '🌍' }
  ];

  const qualityStandards = [
    {
      icon: 'fa-certificate',
      title: 'ISO Certified',
      description: 'All our products meet international ISO quality standards.'
    },
    {
      icon: 'fa-leaf',
      title: 'Organic Options',
      description: 'We offer certified organic Basmati rice varieties.'
    },
    {
      icon: 'fa-shield',
      title: 'Food Safety',
      description: 'HACCP and food safety protocols ensure product integrity.'
    },
    {
      icon: 'fa-truck',
      title: 'Reliable Logistics',
      description: 'Efficient supply chain and timely delivery worldwide.'
    }
  ];

  const filteredRice = selectedCategory === 'all' 
    ? riceVarieties 
    : riceVarieties.filter(rice => rice.category === selectedCategory);

  return (
    <div className="exports-page">
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
            <a href="/what-we-do" className="active">What We Do</a>
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
          <img src="/assets/images/exports/exports-banner.jpg" alt="Exports Banner" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="container">
              <h1>Exports Profile</h1>
              <p>Premium Basmati Rice for Quality Conscious Global Consumers</p>
            </div>
          </div>
        </div>
      </section>
      {/* Export Overview Section - Following Two-Column Pattern */}
      <section className="export-overview-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Exports Profile</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>Al Maha Foods embarked on its journey with a clear vision: to offer premium Basmati Rice to Quality conscious Global consumers of Basmati Rice. Our Ideology combined with scientific systems, best human resources and sophisticated modern techniques define our functioning. Al Maha Foods consistently succeeds in delivering the highest quality Basmati rice, while upholding the values of sustainability, social responsibility, and customer satisfaction. We are committed to leveraging cutting-edge technology, best practices, and ethical standards to ensure that our products meet the diverse needs of our global customers.</p>
              </div>
              
              {/* Infrastructure Section */}
              <div className="infrastructure-section">
                <h3><strong>Infrastructure</strong></h3>
                <p>Al Maha Foods has infrastructure to produce all variants of Basmati Rice that includes, Raw, Steam Brown and Parboiled Rice. Our Rice Mills are strategically located in the heart of paddy growing area to gain maximum advantage of quality, price and logistics and are ISO 22000:2018 certified. Implementation of Kaizen practices, continuous system improvement and upgradation play a major role in enhancing our operational efficiency.</p>
              </div>
              
              {/* Brands Section */}
              <div className="brands-section">
                <h3><strong>Brands</strong></h3>
                <p>Al Maha brands are specialized in Indian Raw Basmati Rice and Indian Sella Basmati Rice. Our diverse brands are quality combinations that address the pricing and quality needs of all the ranges of consumers and buyers in all segments and all geographies. To lead the competitive and volatile Basmati rice trade, the company supports customers to minimize business risk and secure their supply chain and procurement. Al Maha Foods is a trend setter when it comes to exploring new avenues, embracing innovations, and setting new benchmarks in the industry.</p>
              </div>
              
              {/* Quality Control Quote */}
              <div className="quality-quote">
                <blockquote>
                  <h3>Strict control over Quality and correct price drives the success of Al Maha Foods.</h3>
                </blockquote>
                <p>Al Maha Foods maintains stringent quality control from the selection of paddy, throughout milling, processing, and packing to the port of shipment. Its infrastructure boasts of state-of-the-art systems & controls where quality of rice, at each stage of process is assured by the Basmati rice experts. For excellence in results whole process is controlled by a modern and high tech fully equipped Laboratory and qualified rice analysts.</p>
              </div>
              
              {/* Overview Image */}
              <div className="overview-image">
                <img src="/assets/images/exports/rice_field.jpg" alt="Rice Fields" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rice Varieties Section - Following Two-Column Pattern */}
      <section className="varieties-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Rice Varieties</h2>
              
              {/* Filter Buttons */}
              <div className="filter-buttons">
                <button 
                  className={`filter-button ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All
                </button>
                <button 
                  className={`filter-button ${selectedCategory === 'premium' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('premium')}
                >
                  Premium
                </button>
                <button 
                  className={`filter-button ${selectedCategory === 'standard' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('standard')}
                >
                  Standard
                </button>
                <button 
                  className={`filter-button ${selectedCategory === 'processed' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('processed')}
                >
                  Processed
                </button>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>Explore our premium selection of Basmati rice varieties, each carefully selected and processed to meet international quality standards.</p>
              </div>
              
              {/* Rice Grid */}
              <div className="rice-grid">
                {filteredRice.map((rice) => (
                  <div key={rice.id} className="rice-card">
                    <div className="card-image">
                      <img src={rice.image} alt={rice.name} />
                      <div className="category-badge">
                        {rice.category.charAt(0).toUpperCase() + rice.category.slice(1)}
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{rice.name}</h3>
                      <p className="card-description">{rice.description}</p>
                      
                      <div className="features">
                        <h4>Key Features:</h4>
                        <ul>
                          {rice.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="specifications">
                        <h4>Specifications:</h4>
                        <div className="spec-grid">
                          <div className="spec-item">
                            <span className="spec-label">Length:</span>
                            <span className="spec-value">{rice.specifications.length}</span>
                          </div>
                          <div className="spec-item">
                            <span className="spec-label">Moisture:</span>
                            <span className="spec-value">{rice.specifications.moisture}</span>
                          </div>
                          <div className="spec-item">
                            <span className="spec-label">Broken:</span>
                            <span className="spec-value">{rice.specifications.brokenGrains}</span>
                          </div>
                          <div className="spec-item">
                            <span className="spec-label">Aging:</span>
                            <span className="spec-value">{rice.specifications.aging}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section - Following Two-Column Pattern */}
      <section className="destinations-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Global Reach</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>Our premium Basmati rice reaches customers across the globe, with strong presence in key international markets.</p>
              </div>
              
              {/* Export Distribution Chart */}
              <div className="destinations-chart">
                <h3>Export Distribution</h3>
                <div className="chart-container">
                  {exportDestinations.map((destination, index) => (
                    <div key={index} className="chart-item">
                      <div className="country-info">
                        <span className="flag">{destination.flag}</span>
                        <span className="country-name">{destination.country}</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress"
                          style={{ width: `${destination.percentage}%` }}
                        ></div>
                      </div>
                      <span className="percentage">{destination.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards Section - Following Two-Column Pattern */}
      <section className="quality-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Quality Assurance</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>Our commitment to quality is reflected in our certifications, processes, and continuous improvement initiatives.</p>
              </div>
              
              {/* Quality Grid */}
              <div className="quality-grid">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="quality-card">
                    <div className="quality-icon">
                      <i className={`fa ${standard.icon}`}></i>
                    </div>
                    <h4>{standard.title}</h4>
                    <p>{standard.description}</p>
                  </div>
                ))}
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

export default Exports;