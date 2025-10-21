import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        <div className={styles.footerWrapper}>
          <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Logo Column */}
            <div className={styles.footerColumn}>
              <div className={styles.footerLogo}>
                <img 
                  src="/assets/images/home/footer-logo.png" 
                  alt="Al Maha Foods" 
                  width="309" 
                  height="249"
                />
              </div>
            </div>

            {/* Navigation Column */}
            <div className={styles.footerColumn}>
              <h2 className={styles.widgetTitle}>Navigation</h2>
              <ul className={styles.footerMenu}>
                <li><Link to="/about">About Us</Link></li>
                <li>
                  <a 
                    href="/assets/documents/Privacy-Policy-Al-maha.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li><Link to="/what-we-do#domestic-market">Products</Link></li>
                <li><Link to="/our-brands">Our Brands</Link></li>
                <li><Link to="/what-we-do#quality-assurance">Quality Assurance</Link></li>
              </ul>
            </div>

            {/* Useful Links Column */}
            <div className={styles.footerColumn}>
              <h2 className={styles.widgetTitle}>Useful Links</h2>
              <ul className={styles.footerMenu}>
                <li><Link to="/what-we-do#exports">Exports</Link></li>
                <li><Link to="/career#culture-at-al-maha">Work With Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/corporate-social-responsibility">Corporate Social Responsibility</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className={styles.footerColumn}>
              <h2 className={styles.widgetTitle}>Contact Us</h2>
              <ul className={styles.contactInfo}>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <span>1122, DLF Tower-A, Jasola, New Delhi- 110025, India.</span>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <a href="tel:+911143331111">+ 91 11 4333 1111</a>
                </li>
                <li>
                  <i className="fa fa-fax"></i>
                  <span>+ 91 11 4333 1122</span>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:almahafoods@almahafoods.com">almahafoods@almahafoods.com</a>
                </li>
              </ul>

              {/* Social Media */}
              <div className={styles.socialIcons}>
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/company/79564335/admin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a 
                  href="https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.footerBottomContent}>
            <div className={styles.copyright}>
              © 2003-{currentYear} Al Maha Foods. All rights reserved
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fa fa-angle-up"></i>
    </button>
  );
};

export default Footer;

