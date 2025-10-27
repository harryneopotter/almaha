import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/components/CTASection.module.css';

const CTASection = ({
  sidebarTitle = 'Contact Us',
  title = 'We are here to support you.',
  subtitle = 'A member of our team will contact you shortly.',
  buttonText = 'Get In Touch',
  to = '/contact-us',
  className = ''
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className={`${styles.ctaSection} ${className}`} ref={ref}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Left Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.divider}></div>
            <h3 className={styles.sidebarHeading}>{sidebarTitle}</h3>
          </aside>

          {/* Right Content Area */}
          <div className={`${styles.content} ${inView ? styles.animate : ''}`}>
            <div className={styles.textContent}>
              <h2 className={styles.heading}>{title}</h2>
              <p className={styles.description}>{subtitle}</p>
            </div>
            <div className={styles.buttonWrapper}>
              {/* Add global 'button' class to align with audit selectors (a.button) */}
              <Link to={to} className={`${styles.primaryButton} button`}>
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CTASection.propTypes = {
  sidebarTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default CTASection;

