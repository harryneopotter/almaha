import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/FeaturedArticle.module.css';

const FeaturedArticle = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles.featuredArticle} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.content} ${inView ? styles.animate : ''}`}>
          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img 
                src="/assets/images/home/Almaha-page-1-images.png" 
                alt="Al Maha Foods - Business Connect Magazine"
                className={styles.image}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className={styles.textColumn}>
            <h2 className={styles.heading}>
              Al Maha Foods – A Legacy of Basmati Excellence
            </h2>
            <div className={styles.description}>
              <p>
                Dive into the remarkable journey of Al Maha Foods, led by CEO Salman Habeeb, from its 
                humble beginnings in India to becoming one of the top 50 global Basmati rice exporters. 
                This compelling success story showcases how nearly three decades of vision, ethical sourcing, 
                and quality-first practices have shaped a trusted global brand. Learn how tradition blends 
                with innovation, how a people-first culture drives long-term success, and how Al Maha continues 
                to set industry benchmarks in quality, sustainability, and strategic foresight.
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <Link 
                to="/from-strategy-to-success-the-journey-of-a-visionary-ceo-business-connect" 
                className={styles.readMoreButton}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;

