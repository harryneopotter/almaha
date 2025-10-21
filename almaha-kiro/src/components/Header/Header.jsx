import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ isTransparent = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    if (isTransparent) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isTransparent]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const headerClasses = `${styles.header} ${isTransparent && !isScrolled ? '' : styles.scrolled} ${styles.menuLight}`;

  return (
    <header id="masthead" className={headerClasses}>
      <div className={styles.menuContainer}>
        <div className={styles.rowMenu}>
          <div className={styles.rowMenuInner}>
            {/* Logo Container */}
            <div className={styles.logoContainer}>
              <div className={styles.mainLogo}>
                <Link to="/" className={styles.navbarBrand}>
                  <div className={styles.logoCustomizer}>
                    <img 
                      src="/assets/images/common/Logo-2025-e1733738317336.jpg" 
                      alt="Al-maha" 
                      width="189" 
                      height="69"
                      loading="eager"
                    />
                  </div>
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <div className={styles.mmbContainer}>
                <div className={styles.mobileAdditionalIcons}></div>
                <button 
                  className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  <span className={styles.lines}></span>
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className={styles.menuHorizontal}>
              <div className={styles.menuHorizontalInner}>
                <nav className={styles.nav}>
                  <ul className={`${styles.menuPrimary} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
                    <li className={`${styles.menuItem} ${isActiveLink('/') ? styles.active : ''}`}>
                      <Link to="/" title="Home">
                        Home
                        <i className="fa fa-angle-right fa-dropdown"></i>
                      </Link>
                    </li>
                    
                    <li className={`${styles.menuItem} ${styles.dropdown}`}>
                      <button className={styles.dropdownToggle} title="About Us" type="button">
                        About Us
                        <i className="fa fa-angle-down fa-dropdown"></i>
                      </button>
                      <ul className={styles.dropMenu}>
                        <li className={styles.menuItem}>
                          <Link to="/about" title="About Al Maha">
                            About Al Maha
                            <i className="fa fa-angle-right fa-dropdown"></i>
                          </Link>
                        </li>
                        <li className={styles.menuItem}>
                          <Link to="/about#vision-mission" title="Vision & Mission">
                            Vision & Mission
                            <i className="fa fa-angle-right fa-dropdown"></i>
                          </Link>
                        </li>
                        <li className={styles.menuItem}>
                          <Link to="/about#values" title="Values">
                            Values
                            <i className="fa fa-angle-right fa-dropdown"></i>
                          </Link>
                        </li>
                        <li className={styles.menuItem}>
                          <Link to="/about#team" title="Team">
                            Team
                            <i className="fa fa-angle-right fa-dropdown"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className={`${styles.menuItem} ${styles.dropdown}`}>
                      <button className={styles.dropdownToggle} title="What We Do" type="button">
                        What We Do
                        <i className="fa fa-angle-down fa-dropdown"></i>
                      </button>
                      <ul className={styles.dropMenu}>
                        <li className={styles.menuItem}>
                          <Link to="/what-we-do/exports" title="Exports Profile">
                            Exports Profile
                            <i className="fa fa-angle-right fa-dropdown"></i>
                          </Link>
                        </li>
                        <li className={styles.menuItem}>
                          <Link to="/what-we-do/quality-assurance" title="Quality Assurance">
                            Quality Assurance
                            <i className="fa fa-angle-right fa-dropdown"></i>
                          </Link>
                        </li>
                        <li className={styles.menuItem}>
                          <Link to="/what-we-do/domestic-market" title="Domestic Market">
                            Domestic Market
                            <i className="fa fa-angle-right fa-dropdown"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className={`${styles.menuItem} ${isActiveLink('/our-brands') ? styles.active : ''}`}>
                      <Link to="/our-brands" title="Our Brands">
                        Our Brands
                        <i className="fa fa-angle-right fa-dropdown"></i>
                      </Link>
                    </li>

                    <li className={`${styles.menuItem} ${styles.dropdown} ${isActiveLink('/culture-at-al-maha') ? styles.active : ''}`}>
                      <Link to="/culture-at-al-maha" className={styles.dropdownToggle} title="Workplace & Careers">
                        Workplace & Careers
                        <i className="fa fa-angle-down fa-dropdown"></i>
                      </Link>
                      <ul className={styles.dropMenu}>
                        <li className={styles.menuItem}>
                          <Link to="/culture-at-al-maha#life-at-almaha" title="Culture@almaha">
                            Culture@almaha
                            <i className="fa fa-angle-right fa-dropdown"></i>
                          </Link>
                        </li>
                        <li className={styles.menuItem}>
                          <Link to="/culture-at-al-maha#apply-now" title="Apply now">
                            Apply now
                            <i className="fa fa-angle-right fa-dropdown"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className={`${styles.menuItem} ${isActiveLink('/corporate-social-responsibility') ? styles.active : ''}`}>
                      <Link to="/corporate-social-responsibility" title="CSR">
                        CSR
                        <i className="fa fa-angle-right fa-dropdown"></i>
                      </Link>
                    </li>

                    <li className={`${styles.menuItem} ${isActiveLink('/contact-us') ? styles.active : ''}`}>
                      <Link to="/contact-us" title="Contact Us">
                        Contact Us
                        <i className="fa fa-angle-right fa-dropdown"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isTransparent: PropTypes.bool,
};

export default Header;