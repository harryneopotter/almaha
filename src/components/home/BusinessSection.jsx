import { useInView } from 'react-intersection-observer';
import styles from '../../styles/components/BusinessSection.module.css';

const BusinessSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles.businessSection} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.content} ${inView ? styles.animate : ''}`}>
          <div className={styles.textColumn}>
            <div className={styles.divider}></div>
            <h2 className={styles.heading}>Business</h2>
          </div>
          
          <div className={styles.businessColumn}>
            <div className={styles.divider}></div>
            <article className={styles.businessItem}>
              <h3 className={styles.businessTitle}>
                <a href="/from-strategy-to-success-the-journey-of-a-visionary-ceo-business-connect/">
                  From Strategy to Success: The Journey of a Visionary CEO | Business Connect
                </a>
              </h3>
              <p className={styles.businessDate}>2-August-2025</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;

