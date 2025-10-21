import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.logoSection}>
              <img 
                src="/assets/images/common/Logo-2025-e1733738317336.jpg" 
                alt="Al-maha Foods" 
                className={styles.footerLogo}
              />
              <h3 className={styles.title}>Al-maha Foods</h3>
            </div>
            <p className={styles.description}>
              We are dedicated to deliver Excellence in Basmati Rice Products and Services.
            </p>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link to="/" className={styles.link}>Home</Link></li>
              <li><Link to="/about" className={styles.link}>About Al Maha</Link></li>
              <li><Link to="/what-we-do/exports" className={styles.link}>Exports Profile</Link></li>
              <li><Link to="/our-brands" className={styles.link}>Our Brands</Link></li>
              <li><Link to="/culture-at-al-maha" className={styles.link}>Careers</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.subtitle}>What We Do</h4>
            <ul className={styles.linkList}>
              <li><Link to="/what-we-do/exports" className={styles.link}>Exports</Link></li>
              <li><Link to="/what-we-do/quality-assurance" className={styles.link}>Quality Assurance</Link></li>
              <li><Link to="/what-we-do/domestic-market" className={styles.link}>Domestic Market</Link></li>
              <li><Link to="/corporate-social-responsibility" className={styles.link}>CSR</Link></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <a href="mailto:info@almahafoods.com" className={styles.contactLink}>
                  info@almahafoods.com
                </a>
              </p>
              <p className={styles.contactItem}>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <a href="tel:+911234567890" className={styles.contactLink}>
                  +91 123 456 7890
                </a>
              </p>
              <p className={styles.contactItem}>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>India</span>
              </p>
            </div>
            
            <div className={styles.socialLinks}>
              <h5 className={styles.socialTitle}>Follow Us</h5>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Al-maha Foods. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link to="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
              <Link to="/terms-of-service" className={styles.bottomLink}>Terms of Service</Link>
              <Link to="/contact-us" className={styles.bottomLink}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;