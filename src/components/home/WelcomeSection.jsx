import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Lightbox from '../common/Lightbox';
import styles from '../../styles/components/WelcomeSection.module.css';

const galleryImages = [
  { id: 1, src: '/assets/images/home/al-maha-about-slide-1-new.jpg', alt: 'Al Maha Foods' },
  { id: 2, src: '/assets/images/home/al-maha-about-slide-9-new.jpg', alt: 'Quality Assurance' },
  { id: 3, src: '/assets/images/home/al-maha-about-slide-8-new.jpg', alt: 'Team' },
  { id: 4, src: '/assets/images/home/al-maha-about-slide-7-new.jpg', alt: 'Exports' },
  { id: 5, src: '/assets/images/home/al-maha-about-slide-6-new.jpg', alt: 'Basmati Rice' },
  { id: 6, src: '/assets/images/home/al-maha-about-slide-4-new.jpg', alt: 'Products' },
];

const WelcomeSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className={styles.welcomeSection} ref={ref}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Sidebar Column */}
          <aside className={`${styles.sidebar} ${inView ? styles.animate : ''}`}> 
            <div className={styles.dividerWrapper}>
              <hr className={styles.leftDivider} />
            </div>
            <h2 className={styles.heading}>Welcome to Al Maha Foods</h2>

            <div className={styles.badge}>
              <img src="/assets/images/home/image_2023_05_24T11_18_08_668Z.png" alt="25 Years of Excellence" />
            </div>

            <div className={styles.logoWrapper}>
              <img
                src="/assets/images/home/logo.png"
                alt="Al Maha Foods Logo"
                className={styles.logo}
              />
              <img
                src="/assets/images/gptw-1-badge-standing.png"
                alt="Great Place to Work Logo"
                className={styles.logo}
              />
            </div>
          </aside>

          {/* Text Content Column with Image Carousel Below */}
          <div className={`${styles.textContent} ${inView ? styles.animate : ''}`}>
            <div className={styles.dividerWrapper}>
              <hr className={styles.rightDivider} />
            </div>
            <div className={styles.textParagraphs}>
              <p>
                The Idea and Passion to supply World Class Basmati Rice to selected global consumers
                laid the foundation of Al Maha Foods in the year 1998.
              </p>
              <p>
                As one of the top exporter and QA services provider of Basmati Rice from India, we
                outstand with our best services, customer Oriented approach and best business practices.
                Our business dealings are governed by transparency in process, mutual trust, and mutually
                beneficial long-term business relationships.
              </p>
              <p>
                Al Maha Foods has become synonym with Quality standards, when it comes to exports and quality assurance services for Basmati Rice.
              </p>
            </div>

            {/* Image Carousel */}
            <div className={styles.imageCarousel}>
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                loopedSlides={6}
                speed={400}
                watchOverflow={true}
                className={styles.swiper}
              >
                {galleryImages.map((image, index) => (
                  <SwiperSlide key={image.id}>
                    <div className={styles.imageWrapper} onClick={() => openLightbox(index)} style={{ cursor: 'pointer' }}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
};

export default WelcomeSection;

