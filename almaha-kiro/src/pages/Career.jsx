import { useState } from 'react';
import './Career.css';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    totalExperience: '',
    qualification: '',
    resume: null
  });

  const coreValues = [
    {
      icon: '/assets/images/career/Be-disciplined.png',
      title: 'Be Disciplined',
      description: 'We maintain high standards of discipline in all our operations and personal conduct.'
    },
    {
      icon: '/assets/images/career/Be-result-Oriented.png',
      title: 'Be Result Oriented',
      description: 'We focus on achieving measurable results and delivering excellence in everything we do.'
    },
    {
      icon: '/assets/images/career/Group-1-1.png',
      title: 'Innovation',
      description: 'We embrace innovation and continuously seek better ways to serve our customers.'
    },
    {
      icon: '/assets/images/career/Group-2-1.png',
      title: 'Teamwork',
      description: 'We believe in the power of collaboration and working together towards common goals.'
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Quality Assurance Manager',
      department: 'Quality Control',
      location: 'New Delhi',
      experience: '5-8 years',
      type: 'Full-time',
      description: 'Lead quality assurance processes for Basmati rice products and ensure compliance with international standards.'
    },
    {
      id: 2,
      title: 'Export Sales Executive',
      department: 'Sales & Marketing',
      location: 'New Delhi',
      experience: '3-5 years',
      type: 'Full-time',
      description: 'Manage international client relationships and drive export sales growth in global markets.'
    },
    {
      id: 3,
      title: 'Supply Chain Coordinator',
      department: 'Operations',
      location: 'New Delhi',
      experience: '2-4 years',
      type: 'Full-time',
      description: 'Coordinate supply chain operations from procurement to delivery, ensuring efficient logistics.'
    },
    {
      id: 4,
      title: 'Agricultural Specialist',
      department: 'Procurement',
      location: 'Punjab/Haryana',
      experience: '4-6 years',
      type: 'Full-time',
      description: 'Work with farmers to ensure quality rice procurement and provide agricultural guidance.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleJobApplication = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowApplicationForm(true);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Application submitted successfully!');
    setShowApplicationForm(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      totalExperience: '',
      qualification: '',
      resume: null
    });
  };

  return (
    <div className="career-page">
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
            <a href="/workplace-careers" className="active">Workplace & Careers</a>
            <a href="/csr">CSR</a>
            <a href="/contact-us">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-background">
          <img src="/assets/images/career/career-banner.jpg" alt="Career Banner" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="container">
              <h1>Culture at Al Maha</h1>
              <p>Join our passionate team and be part of excellence in the Basmati rice industry</p>
            </div>
          </div>
        </div>
      </section>
      {/* Culture Overview Section - Following Two-Column Pattern */}
      <section className="culture-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Life at Al Maha</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>At Al Maha Foods, we believe that our people are our greatest asset. We foster a culture of excellence, innovation, and continuous learning where every team member can thrive.</p>
                
                <p>Our work environment encourages collaboration, creativity, and professional development. We provide opportunities for growth, recognize achievements, and maintain a healthy work-life balance.</p>
              </div>
              
              {/* Culture Stats */}
              <div className="culture-stats">
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Countries Served</span>
                </div>
              </div>
              
              {/* Culture Image */}
              <div className="culture-image">
                <img src="/assets/images/career/life-@almaha-3-uai-1134x1134.png" alt="Life at Al Maha" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Following Two-Column Pattern */}
      <section className="values-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Our Values</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>The principles that guide our work culture and define who we are as an organization.</p>
              </div>
              
              {/* Values Grid */}
              <div className="values-grid">
                {coreValues.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">
                      <img src={value.icon} alt={value.title} />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section - Following Two-Column Pattern */}
      <section className="jobs-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Current Openings</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              <div className="description">
                <p>Explore exciting career opportunities and join our growing team.</p>
              </div>
              
              {/* Jobs Grid */}
              <div className="jobs-grid">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="job-header">
                      <h3 className="job-title">{job.title}</h3>
                      <span className="job-type">{job.type}</span>
                    </div>
                    <div className="job-details">
                      <div className="job-detail">
                        <i className="fa fa-building"></i>
                        <span>{job.department}</span>
                      </div>
                      <div className="job-detail">
                        <i className="fa fa-map-marker"></i>
                        <span>{job.location}</span>
                      </div>
                      <div className="job-detail">
                        <i className="fa fa-clock-o"></i>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <p className="job-description">{job.description}</p>
                    <button 
                      className="apply-button"
                      onClick={() => handleJobApplication(job.title)}
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Apply for: {selectedJob}</h3>
              <button 
                className="close-button"
                onClick={() => setShowApplicationForm(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmitApplication} className="application-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email *"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone *"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="totalExperience"
                    value={formData.totalExperience}
                    onChange={handleInputChange}
                    placeholder="Total Experience"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    placeholder="Qualification"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    className="file-input"
                  />
                  <label>Upload Resume (PDF, DOC, DOCX)</label>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-button">
                  Submit Application
                </button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => setShowApplicationForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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

export default Career;