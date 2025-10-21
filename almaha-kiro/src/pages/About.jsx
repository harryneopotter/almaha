import { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './About.module.css';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.aboutPage}>
      <Header />

      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroBackground}>
          <img src="/assets/images/about/Rectangle-31-1.jpg" alt="About Us Banner" />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className={styles.aboutMainSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textColumn}>
              <div className={styles.divider}></div>
              <h2 className={styles.heading}>About</h2>
              <div className={styles.companyBadges}>
                <div className={styles.badgeItem}>
                  <img src="/assets/images/about/image_2023_05_24T11_18_08_668Z.png" alt="25 Years Excellence" />
                </div>
                <div className={styles.badgeItem}>
                  <img src="/assets/images/about/logo.png" alt="Al Maha Logo" />
                </div>
                <div className={styles.badgeItem}>
                  <img src="/assets/images/about/GPW_1.jpg" alt="Great Place to Work" />
                </div>
              </div>
            </div>

            <div className={styles.mainColumn}>
              <div className={styles.divider}></div>
              <div className={styles.description}>
                <p>Al Maha Foods, as First and Largest Quality Assurance Organisation for Indian Basmati Rice, provides products and services to selected quality conscious global customers.</p>
                <p>We are one of the Top exporters of Basmati Rice from India with our strict quality controls we ensure right product at right price for buyer.</p>
                <p>Al Maha Foods was incepted in year 1998 with a vision to enhance value in Indian Basmati Rice by implementing high quality standards in processing and exports of rice from India.</p>
                <p>Products and services of Al Maha Foods are scientifically developed and managed to give maximum benefit to its global customers. We offer our services in three categories.</p>
                <p><strong>Export of Basmati Rice</strong><br />
                <strong>Quality Assurance Services</strong><br />
                <strong>Domestic Market</strong></p>
                <p>As a renowned entity in the industry, Al Maha Foods has earned a commendable reputation. NABL Accreditation, ISO 9001:2015, ISO 22000:2018 & Star Export House certification to us serves as a testament to our unshakable commitment to deliver unparalleled quality, credibility, and reliability to our esteemed customers. With a steadfast focus on excellence and customer satisfaction, our services are tailor-made to address any concerns of our valued customers.</p>
              </div>
              <div className={styles.downloadButtons}>
                <a href="/assets/documents/Al-Maha-Company-Catlogue-for-about-us-page.pdf" className={styles.primaryButton} target="_blank" rel="noopener noreferrer">
                  Download Company Catalog
                </a>
                <a href="/assets/documents/Whistle-Blower-Policy-PDF.pdf" className={styles.primaryButton} target="_blank" rel="noopener noreferrer">
                  Whistle Blower Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textColumn}>
              <div className={styles.divider}></div>
              <h2 className={styles.heading}>Al Maha Vision</h2>
            </div>

            <div className={styles.mainColumn}>
              <div className={styles.divider}></div>
              <div className={styles.description}>
                <p>To become a leading Rice supplier from India to consumers across the globe with high quality assurance services resulting in customer satisfaction.</p>
              </div>
              <div className={styles.visionGoals}>
                <div className={styles.visionGoal}>
                  <div className={styles.visionIcon}>
                    <img src="/assets/images/about/Group-368.png" alt="QA Services" />
                  </div>
                  <div className={styles.visionText}>
                    <h5>Among top 10 QA service providers for Basmati Rice and Alike products in India</h5>
                  </div>
                </div>
                <div className={styles.visionGoal}>
                  <div className={styles.visionIcon}>
                    <img src="/assets/images/about/Group-369.jpg" alt="Export Excellence" />
                  </div>
                  <div className={styles.visionText}>
                    <h5>To be Among the Top 50 Exporters of Rice to GCC and Asia</h5>
                  </div>
                </div>
                <div className={styles.visionGoal}>
                  <div className={styles.visionIcon}>
                    <img src="/assets/images/about/Group-370.png" alt="Revenue Growth" />
                  </div>
                  <div className={styles.visionText}>
                    <h5>To multiply our revenue consistently</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textColumn}>
              <div className={styles.divider}></div>
              <h2 className={styles.heading}>Al Maha Mission</h2>
            </div>

            <div className={styles.mainColumn}>
              <div className={styles.divider}></div>
              <div className={styles.description}>
                <div className={styles.missionBox}>
                  <div className={styles.missionIcon}>
                    <img src="/assets/images/about/mission-icon.svg" alt="Mission" />
                  </div>
                  <p>Our mission is to produce and deliver the highest quality Basmati rice, while upholding the values of sustainability, social responsibility, and customer satisfaction. We are committed to leveraging cutting-edge technology, best practices, and ethical standards to ensure that our products meet the diverse needs of our global customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textColumn}>
              <div className={styles.divider}></div>
              <h2 className={styles.heading}>Al Maha Core Values</h2>
            </div>

            <div className={styles.mainColumn}>
              <div className={styles.divider}></div>
              {/* Values will be added here - need to see the original content */}
              <div className={styles.description}>
                <p>Our core values guide everything we do at Al Maha Foods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textColumn}>
              <div className={styles.divider}></div>
              <h2 className={styles.heading}>Team</h2>
            </div>

            <div className={styles.mainColumn}>
              <div className={styles.divider}></div>
              {/* Team content will be added here - need to see the original */}
              <div className={styles.description}>
                <p>Our dedicated team of professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
