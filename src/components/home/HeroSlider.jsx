import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from '../../styles/components/HeroSlider.module.css';

const slides = [
  {
    id: 1,
    title: 'Al Maha Foods',
    description: 'We are dedicated to deliver Excellence in Basmati Rice Products and Services.',
    backgroundImage: '/assets/images/home/main1slider-new.jpg',
    backgroundSize: 'cover'
  },
  {
    id: 2,
    title: 'Leadership',
    description: 'Al Maha Foods proudly comprises a Leadership Team of Passionate Professionals.',
    backgroundImage: '/assets/images/home/leadership-bannner-new.jpg',
    backgroundSize: 'cover'
  },
  {
    id: 3,
    title: 'Quality',
    description: 'Quality is primary guideline for everything we do while delivering Basmati Rice and Quality Assurance services.',
    backgroundImage: '/assets/images/home/home-banner-quality.jpg',
    backgroundSize: 'cover'
  },
  {
    id: 4,
    title: 'Customer Satisfaction',
    description: 'Al Maha Foods par excellence in its Customer Oriented Approach and has been achieving highest recognition from customers.',
    backgroundImage: '/assets/images/home/customer-satisfaction-banner-new.jpg',
    backgroundSize: 'cover'
  }
];

const HeroSlider = ({ centerText = false, removeOverlay = false }) => {
  const swiperRef = useRef(null);

  return (
  <div className={`${styles.heroSlider} ${centerText ? styles.centerText : ''} ${removeOverlay ? styles.noOverlay : ''} heroSlider`}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={700}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className={styles.slide}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: slide.backgroundSize,
              }}
            >
              <div className={styles.slideOverlay}></div>
              <div
                className={styles.slideContent}
                style={{
                  maxWidth: '55%',
                  margin: 0,
                }}
              >
                <div className={styles.textOverlay}>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <p className={styles.slideDescription}>{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button className={`${styles.swiperButtonPrev} ${styles.swiperButton}`} aria-label="Previous slide">
          <i className="fa fa-angle-left"></i>
        </button>
        <button className={`${styles.swiperButtonNext} ${styles.swiperButton}`} aria-label="Next slide">
          <i className="fa fa-angle-right"></i>
        </button>
      </Swiper>
    </div>
  );
};

export default HeroSlider;

