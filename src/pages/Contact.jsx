import { useEffect, useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    services: '',
    query: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div 
          className={styles.heroBackground}
          style={{
            backgroundImage: 'url("/assets/images/contact-us-banner2.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover'
          }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Combined Info and Form */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Company Info & Contact Details */}
            <div className={styles.leftColumn}>
              <div className={styles.leftContent}>
                <h2 className={styles.companyName}>Al Maha Foods International Private Limited</h2>
                
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconCircle}>
                        📍
                      </div>
                    </div>
                    <div className={styles.contactText}>
                      <p>1122, DLF Tower-A, Jasola, New Delhi- 110025, India.</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconCircle}>
                        📞
                      </div>
                    </div>
                    <div className={styles.contactText}>
                      <p>+ 91 11 4333 1111 (100 Lines)</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconCircle}>
                        📠
                      </div>
                    </div>
                    <div className={styles.contactText}>
                      <p>+ 91 11 4333 1122</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconCircle}>
                        ✉️
                      </div>
                    </div>
                    <div className={styles.contactText}>
                      <p>almahafoods@almahafoods.com</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconCircle}>
                        🌐
                      </div>
                    </div>
                    <div className={styles.contactText}>
                      <p>www.almahafoods.com</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className={styles.socialIcons}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>

                {/* Map */}
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3614273741844!2d77.28547731508042!3d28.536599982458768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564c2c5e5%3A0x9c8e89b7c5e5e5e5!2sDLF%20Tower%20A%2C%20Jasola%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="304"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Al Maha Foods Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className={styles.rightColumn}>
              <h2 className={styles.sectionHeading}>Get In Touch With Us</h2>
              
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="services"
                    placeholder="Type of Services you need"
                    value={formData.services}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    name="query"
                    placeholder="Query"
                    value={formData.query}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={styles.formTextarea}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
