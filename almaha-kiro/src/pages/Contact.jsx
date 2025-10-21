import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Type of service is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
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
            <a href="/csr">CSR</a>
            <a href="/contact-us" className="active">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-background">
          <img src="/assets/images/contact/contact-banner.jpg" alt="Contact Us Banner" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="container">
              <h1>Contact Us</h1>
              <p>Get in touch with Al Maha Foods for all your Basmati Rice requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section - Following Two-Column Pattern */}
      <section className="contact-info-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Al Maha Foods International Private Limited</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              
              {/* Contact Details */}
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>1122, DLF Tower-A, Jasola, New Delhi- 110025, India.</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+ 91 11 4333 1111 (100 Lines)</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-fax"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Fax</h4>
                    <p>+ 91 11 4333 1122</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>almahafoods@almahafoods.com</p>
                  </div>
                </div>
              </div>
              
              {/* Map Embed */}
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8267!2d77.2773!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzA3LjgiTiA3N8KwMTYnMzguMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Al Maha Foods Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Following Two-Column Pattern */}
      <section className="contact-form-section">
        <div className="container">
          <div className="content">
            {/* Left Column - Sidebar */}
            <div className="text-column">
              <div className="divider"></div>
              <h2 className="heading">Get in Touch With Us</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className="main-column">
              <div className="divider"></div>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="fa fa-check-circle"></i>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <i className="fa fa-exclamation-circle"></i>
                  There was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name *"
                      className={`form-control ${errors.fullName ? 'error' : ''}`}
                      maxLength="400"
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      className={`form-control ${errors.email ? 'error' : ''}`}
                      maxLength="400"
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone *"
                      className={`form-control ${errors.phone ? 'error' : ''}`}
                      maxLength="400"
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject *"
                      className={`form-control ${errors.subject ? 'error' : ''}`}
                      maxLength="400"
                    />
                    {errors.subject && <span className="error-text">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      placeholder="Type of Services you need *"
                      className={`form-control ${errors.service ? 'error' : ''}`}
                      maxLength="400"
                    />
                    {errors.service && <span className="error-text">{errors.service}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Query *"
                      rows="6"
                      className={`form-control textarea ${errors.message ? 'error' : ''}`}
                      maxLength="2000"
                    />
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
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

export default Contact;