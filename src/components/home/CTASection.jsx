import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/components/CTASection.module.css';

const CTASection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className={styles.ctaSection} ref={ref}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Left Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.divider}></div>
            <h3 className={styles.sidebarHeading}>Contact Us</h3>
          </aside>

          {/* Right Content Area */}
          <div className={`${styles.content} ${inView ? styles.animate : ''}`}>
            <div className={styles.textContent}>
              <h2 className={styles.heading}>Ready to Work With Us?</h2>
              <p className={styles.description}>
                A member of our team will contact you shortly.
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <Link to="/contact-us" className={styles.primaryButton}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

