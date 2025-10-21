import Layout from '../components/Layout/Layout';
import Slider from '../components/Slider/Slider';
import styles from './Home.module.css';

const Home = () => {
  const sliderData = [
    {
      image: '/assets/images/home/al-maha-about-slide-1-new.jpg',
      title: 'Quality',
      description: 'Al Maha Foods proudly comprises a Leadership Team of Passionate Professionals.'
    },
    {
      image: '/assets/images/home/al-maha-about-slide-4-new.jpg',
      title: 'Excellence',
      description: 'Committed to delivering the highest quality Basmati rice to global markets.'
    },
    {
      image: '/assets/images/home/GPW_1.jpg',
      title: 'Innovation',
      description: 'Leading the industry with innovative quality assurance and export services.'
    },
    {
      image: '/assets/images/home/image_2023_05_24T11_18_08_668Z.png',
      title: 'Leadership',
      description: 'Al Maha Foods proudly comprises a Leadership Team of Passionate Professionals.'
    }
  ];

  return (
    <Layout headerTransparent={false} hasSlider={true} className={styles.homePage}>
      {/* Hero Slider Section */}
      <Slider slides={sliderData} autoPlay={true} autoPlayInterval={5000} />

      {/* Main Content Section - Welcome + Company Description */}
      <section className={styles.mainContentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Left Column - Welcome + Images */}
            <div className={styles.leftColumn}>
              <div className={styles.welcomeHeader}>
                <hr className={styles.separator} />
                <h2 className={styles.welcomeTitle}>Welcome to Al Maha Foods</h2>
              </div>
              <div className={styles.logoImages}>
                <img 
                  src="/assets/images/home/image_2023_05_24T11_18_08_668Z.png" 
                  alt="Al Maha Foods" 
                  width="309" 
                  height="249"
                  loading="lazy"
                />
                <img 
                  src="/assets/images/home/logo.png" 
                  alt="Al-maha Logo" 
                  width="162" 
                  height="77"
                  loading="lazy"
                />
                <img 
                  src="/assets/images/home/GPW_1.jpg" 
                  alt="Al Maha Foods" 
                  width="182" 
                  height="310"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column - Company Description + Image Gallery */}
            <div className={styles.rightColumn}>
              <hr className={styles.rightSeparator} />
              <div className={styles.companyDescription}>
                <p className={styles.descriptionText}>
                  <strong>The Idea and Passion to supply World Class Basmati Rice to selected global consumers laid the foundation of Al Maha Foods in the year 1998.</strong>
                </p>
                <p className={styles.descriptionText}>
                  <strong>As one of the top exporter and QA services provider of Basmati Rice from India, we outstand with our best services, customer Oriented approach and best business practices. Our business dealings are governed by transparency in process, mutual trust, and mutually beneficial long-term business relationships.</strong>
                </p>
                <p className={styles.descriptionText}>
                  <strong>Al Maha Foods has become synonym with Quality standards, when it comes to exports and quality assurance services for Basmati Rice.</strong>
                </p>
              </div>
              
              {/* Image Gallery Slider */}
              <div className={styles.imageGallery}>
                <div className={styles.gallerySlider}>
                  <img 
                    src="/assets/images/home/al-maha-about-slide-1-new.jpg" 
                    alt="Al Maha Foods Gallery" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className={styles.certificationSection}>
        <div className={styles.container}>
          <div className={styles.certificationContent}>
            <p className={styles.certificationText}>
              As a renowned entity in the industry, Al Maha Foods has earned a commendable reputation. The NABL Accreditation, ISO 9001:2015, ISO 22000:2018 & Star Export House certification to us serves as a testament to our unshakable commitment to deliver unparalleled quality, credibility, and reliability to our esteemed customers. With a steadfast focus on excellence and customer satisfaction, our services are tailor-made to address any concerns of our valued customers.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section with Video Background */}
      <section className={styles.visionSection}>
        <div className={styles.visionBackground}>
          <video 
            className={styles.backgroundVideo}
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/assets/videos/Short-Video-New.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.visionContent}>
            <div className={styles.visionText}>
              <h2 className={styles.visionTitle}>
                <em>Vision</em>
              </h2>
              <p className={styles.visionDescription}>
                To become a leading Rice supplier from India to consumers across the globe with high quality services resulting in customer satisfaction.
              </p>
              <h6 className={styles.visionAuthor}>
                <em>— H.R. Salman, Managing Director</em>
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* International Presence Section */}
      <section className={styles.internationalSection}>
        <div className={styles.container}>
          <div className={styles.internationalGrid}>
            <div className={styles.internationalLeft}>
              <hr className={styles.separator} />
              <h2 className={styles.internationalTitle}>International Presence</h2>
            </div>
            <div className={styles.internationalRight}>
              <hr className={styles.rightSeparator} />
              <p className={styles.internationalText}>
                <strong>We are a globally recognized brand, offering our products to customers in different parts of the World. We cater to diverse International Customers with our Basmati Rice and Quality Assurance Services. Al Maha strives to provide highest quality products & services to global customers through its strong international presence & commitment to excellence.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;