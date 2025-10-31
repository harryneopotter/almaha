import { useInView } from 'react-intersection-observer';
import styles from '../../styles/components/VisionBlock.module.css';

const VisionBlock = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className={styles.visionBlock} ref={ref}>
      {/* Video Background */}
      <div className={styles.videoBackground}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/assets/videos/Short-Video-New.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={`${styles.content} ${inView ? styles.animate : ''}`}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              <em className="vision-title">Vision</em>
            </h2>
            <p className={styles.description}>
              To become a leading Rice supplier from India to consumers across the globe with 
              high quality services resulting in customer satisfaction.
            </p>
            <h6 className={styles.attribution}>
              <em>— HR Salman, Managing Director</em>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionBlock;

