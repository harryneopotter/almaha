import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.headerWrapper}>
        <div className={styles.menuContainer}>
          <div className={styles.rowMenu}>
            <div className={styles.rowMenuInner}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <Link to="/" className={styles.navbarBrand}>
                <img 
                  src="/assets/images/home/logo.jpg" 
                  alt="Al Maha Foods" 
                  width="183" 
                  height="61"
                  className={styles.logo}
                />
              </Link>
            </div>

            {/* Main Navigation */}
            <nav className={`${styles.mainMenuContainer} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
              <ul className={styles.navbarMain}>
                <li className={styles.menuItem}>
                  <Link to="/" className={styles.menuLink}>
                    Home
                  </Link>
                </li>
                
                <li className={`${styles.menuItem} ${styles.hasDropdown}`}>
                  <button 
                    className={styles.menuLink}
                    onClick={() => toggleDropdown('about')}
                  >
                    About Us <i className="fa fa-angle-down"></i>
                  </button>
                  <ul className={`${styles.dropMenu} ${openDropdown === 'about' ? styles.open : ''}`}>
                    <li><Link to="/about">About Al Maha</Link></li>
                    <li><Link to="/about#vision-mission">Vision & Mission</Link></li>
                    <li><Link to="/about#values">Values</Link></li>
                    <li><Link to="/about#team">Team</Link></li>
                  </ul>
                </li>

                <li className={`${styles.menuItem} ${styles.hasDropdown}`}>
                  <button 
                    className={styles.menuLink}
                    onClick={() => toggleDropdown('what-we-do')}
                  >
                    What We Do <i className="fa fa-angle-down"></i>
                  </button>
                  <ul className={`${styles.dropMenu} ${openDropdown === 'what-we-do' ? styles.open : ''}`}>
                    <li><Link to="/what-we-do/exports">Exports Profile</Link></li>
                    <li><Link to="/what-we-do/quality-assurance">Quality Assurance</Link></li>
                    <li><Link to="/what-we-do/domestic-market">Domestic Market</Link></li>
                  </ul>
                </li>

                <li className={styles.menuItem}>
                  <Link to="/our-brands" className={styles.menuLink}>
                    Our Brands
                  </Link>
                </li>

                {/* Blog removed */}
                <li className={styles.menuItem}>
                  <Link to="/blog" className={styles.menuLink}>
                    Blog
                  </Link>
                </li>

                <li className={`${styles.menuItem} ${styles.hasDropdown}`}>
                  <button 
                    className={styles.menuLink}
                    onClick={() => toggleDropdown('careers')}
                  >
                    Workplace & Careers <i className="fa fa-angle-down"></i>
                  </button>
                  <ul className={`${styles.dropMenu} ${openDropdown === 'careers' ? styles.open : ''}`}>
                    <li><Link to="/career#culture-at-al-maha">Culture@almaha</Link></li>
                    <li><Link to="/career#apply-now">Apply now</Link></li>
                  </ul>
                </li>

                <li className={styles.menuItem}>
                  <Link to="/corporate-social-responsibility" className={styles.menuLink}>
                    CSR
                  </Link>
                </li>

                <li className={styles.menuItem}>
                  <Link to="/contact-us" className={styles.menuLink}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button 
              className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={styles.lines}></span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;

