import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
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

  const handleMouseEnter = (menuName) => {
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const target = e.target;
      // if click is outside any .dropMenu or menuLink, close dropdown
      if (!target.closest || (!target.closest(`.${styles.dropMenu}`) && !target.closest(`.${styles.menuLink}`))) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  // Close mobile menu / dropdowns when clicking outside the nav
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      const target = e.target;
      if (!navRef.current) return;
      if (!navRef.current.contains(target)) {
        if (openDropdown) setOpenDropdown(null);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [openDropdown, isMobileMenuOpen]);

  // Close mobile menu when a nav link is clicked (use event delegation on the nav)
  const handleNavClick = (e) => {
    if (!isMobileMenuOpen) return;
    const anchor = e.target.closest('a');
    if (anchor && navRef.current && navRef.current.contains(anchor)) {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
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
              <NavLink to="/" className={styles.navbarBrand}>
                <img 
                  src="/assets/images/al-maha-logo.png" 
                  alt="Al Maha Foods" 
                  width="183" 
                  height="61"
                  className={styles.logo}
                />
              </NavLink>
            </div>

            {/* Main Navigation */}
            <nav ref={navRef} onClick={handleNavClick} className={`${styles.mainMenuContainer} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
              <ul className={styles.navbarMain}>
                <li className={styles.menuItem}>
                  <NavLink to="/" className={({ isActive }) => isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink}>
                    Home
                  </NavLink>
                </li>
                
                <li className={`${styles.menuItem} ${styles.hasDropdown}`} onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
                  <button
                    className={styles.menuLink}
                    onClick={() => toggleDropdown('about')}
                  >
                    About Us
                  </button>
                  <ul className={`${styles.dropMenu} ${openDropdown === 'about' ? styles.open : ''}`}>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About Al Maha</NavLink></li>
                    <li><NavLink to="/about#vision-mission" className={({ isActive }) => isActive ? styles.active : ''}>Vision & Mission</NavLink></li>
                    <li><NavLink to="/about#values" className={({ isActive }) => isActive ? styles.active : ''}>Values</NavLink></li>
                    <li><NavLink to="/about#team" className={({ isActive }) => isActive ? styles.active : ''}>Team</NavLink></li>
                  </ul>
                </li>

                <li className={`${styles.menuItem} ${styles.hasDropdown}`} onMouseEnter={() => handleMouseEnter('what-we-do')} onMouseLeave={handleMouseLeave}>
                  <button
                    className={styles.menuLink}
                    onClick={() => toggleDropdown('what-we-do')}
                  >
                    What We Do
                  </button>
                  <ul className={`${styles.dropMenu} ${openDropdown === 'what-we-do' ? styles.open : ''}`}>
                    <li><NavLink to="/what-we-do/exports" className={({ isActive }) => isActive ? styles.active : ''}>Exports Profile</NavLink></li>
                    <li><NavLink to="/what-we-do/quality-assurance" className={({ isActive }) => isActive ? styles.active : ''}>Quality Assurance</NavLink></li>
                    <li><NavLink to="/what-we-do/domestic-market" className={({ isActive }) => isActive ? styles.active : ''}>Domestic Market</NavLink></li>
                  </ul>
                </li>

                <li className={styles.menuItem}>
                  <NavLink to="/our-brands" className={({ isActive }) => isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink}>
                    Our Brands
                  </NavLink>
                </li>

                {/* Blog removed */}

                <li className={`${styles.menuItem} ${styles.hasDropdown}`} onMouseEnter={() => handleMouseEnter('careers')} onMouseLeave={handleMouseLeave}>
                  <button className={styles.menuLink} onClick={() => toggleDropdown('careers')}>
                    Workplace & Careers
                  </button>
                  <ul className={`${styles.dropMenu} ${openDropdown === 'careers' ? styles.open : ''}`}>
                    <li><NavLink to="/career#culture-at-al-maha" className={({ isActive }) => isActive ? styles.active : ''}>Culture@almaha</NavLink></li>
                    <li><NavLink to="/career#apply-now" className={({ isActive }) => isActive ? styles.active : ''}>Apply now</NavLink></li>
                  </ul>
                </li>

                <li className={styles.menuItem}>
                  <NavLink to="/corporate-social-responsibility" className={({ isActive }) => isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink}>
                    CSR
                  </NavLink>
                </li>

                <li className={styles.menuItem}>
                  <NavLink to="/contact-us" className={({ isActive }) => isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink}>
                    Contact Us
                  </NavLink>
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

