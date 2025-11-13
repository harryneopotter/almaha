import { useState, useEffect, useRef, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/components/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (e) => {
    // Prevent the document-level outside-click handler from immediately closing the menu
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsMobileMenuOpen((prev) => !prev);
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
      // Ignore clicks on the hamburger button itself so it can toggle without being closed by outside handler
      if (target.closest && (target.closest(`.${styles.mobileMenuButton}`) || target.closest(`.${styles.lines}`))) {
        return;
      }
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

  // Toggle body class for overlay when mobile menu opens
  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.classList.add('open-overlay-menu');
    } else {
      body.classList.remove('open-overlay-menu');
    }
    return () => {
      body.classList.remove('open-overlay-menu');
    };
  }, [isMobileMenuOpen]);

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
    <Fragment>
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

              {/* === NEW: Thumbnail Image Container === */}
              <div 
                className={styles.awardThumbnailContainer}
                onMouseEnter={() => setIsLightboxOpen(true)}
                onMouseLeave={() => setIsLightboxOpen(false)}
              >
                <img 
                  src="/assets/images/careers/GPTW-poster.jpg" 
                  alt="Great Place to Work Award"
                  className={styles.awardThumbnail}
                />
              </div>

              {/* Main Navigation */}
              <nav ref={navRef} onClick={handleNavClick} className={`${styles.mainMenuContainer} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                {/* Mobile Close Button (top-right) */}
                {isMobileMenuOpen && (
                  <button
                    className={styles.mobileCloseButton}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsMobileMenuOpen(false);
                      setOpenDropdown(null);
                    }}
                    aria-label="Close menu"
                  />
                )}
                <ul className={styles.navbarMain}>
                  <li className={styles.menuItem}>
                    <NavLink to="/" className={({ isActive }) => isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink}>
                      Home
                    </NavLink>
                  </li>
                  
                  <li className={`${styles.menuItem} ${styles.hasDropdown}`} onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => {
                        let cls = styles.menuLink;
                        if (isActive) cls += ` ${styles.active}`;
                        if (openDropdown === 'about') cls += ` ${styles.open}`;
                        return cls;
                      }}
                    >
                      About Us
                    </NavLink>
                    {/* Mobile-only toggle to open submenu */}
                    <button
                      className={`${styles.dropdownToggle} ${openDropdown === 'about' ? styles.dropdownToggleOpen : ''}`}
                      aria-label="Toggle About submenu"
                      aria-expanded={openDropdown === 'about'}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleDropdown('about');
                      }}
                    />
                    <ul className={`${styles.dropMenu} ${openDropdown === 'about' ? styles.open : ''}`}>
                      <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About Al Maha</NavLink></li>
                      <li><NavLink to="/about#vision-mission" className={({ isActive }) => isActive ? styles.active : ''}>Vision & Mission</NavLink></li>
                      <li><NavLink to="/about#values" className={({ isActive }) => isActive ? styles.active : ''}>Values</NavLink></li>
                      <li><NavLink to="/about#team" className={({ isActive }) => isActive ? styles.active : ''}>Team</NavLink></li>
                    </ul>
                  </li>

                  <li className={`${styles.menuItem} ${styles.hasDropdown}`} onMouseEnter={() => handleMouseEnter('what-we-do')} onMouseLeave={handleMouseLeave}>
                    <NavLink
                      to="/what-we-do"
                      className={({ isActive }) => {
                        let cls = styles.menuLink;
                        if (isActive) cls += ` ${styles.active}`;
                        if (openDropdown === 'what-we-do') cls += ` ${styles.open}`;
                        return cls;
                      }}
                    >
                      What We Do
                    </NavLink>
                    {/* Mobile-only toggle to open submenu */}
                    <button
                      className={`${styles.dropdownToggle} ${openDropdown === 'what-we-do' ? styles.dropdownToggleOpen : ''}`}
                      aria-label="Toggle What We Do submenu"
                      aria-expanded={openDropdown === 'what-we-do'}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleDropdown('what-we-do');
                      }}
                    />
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
                    <NavLink
                      to="/culture-at-al-maha"
                      className={({ isActive }) => {
                        let cls = styles.menuLink;
                        if (isActive) cls += ` ${styles.active}`;
                        if (openDropdown === 'careers') cls += ` ${styles.open}`;
                        return cls;
                      }}
                    >
                      Workplace & Careers
                    </NavLink>
                    {/* Mobile-only toggle to open submenu */}
                    <button
                      className={`${styles.dropdownToggle} ${openDropdown === 'careers' ? styles.dropdownToggleOpen : ''}`}
                      aria-label="Toggle Careers submenu"
                      aria-expanded={openDropdown === 'careers'}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleDropdown('careers');
                      }}
                    />
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

      {/* Mobile overlay (click to close). Only renders when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="overlay overlay-menu"
          role="presentation"
          aria-hidden="true"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* === NEW: Lightbox Markup === */}
      {isLightboxOpen && (
        <div className={styles.lightboxOverlay}>
          <div className={styles.lightboxContent}>
            <img src="/assets/images/careers/GPTW-poster.jpg" alt="Great Place to Work Award - Full Size" />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
