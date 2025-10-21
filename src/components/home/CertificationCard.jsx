import { useInView } from 'react-intersection-observer';
import styles from '../../styles/components/CertificationCard.module.css';

const CertificationCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className={styles.certificationSection} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.card} ${inView ? styles.animate : ''}`}>
          <p className={styles.text}>
            As a renowned entity in the industry, Al Maha Foods has earned a commendable reputation. The NABL Accreditation, ISO 9001:2015, ISO 22000:2018 & Star Export House certification to us serves as a testament to our unshakable commitment to deliver unparalleled quality, credibility, and reliability to our esteemed customers. With a steadfast focus on excellence and customer satisfaction, our services are tailor-made to address any concerns of our valued customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationCard;

