import { useEffect } from 'react';
import CTASection from '../components/home/CTASection';
import useDocumentTitle from '../hooks/useDocumentTitle';
import styles from './About.module.css';

function About() {
  useDocumentTitle('About Us - Al Maha Foods');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div 
          className={styles.heroBackground}
          style={{
            backgroundImage: 'url("/assets/images/about/aboutus-banner.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover'
          }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>About Us</h1>
          </div>
        </div>
      </section>

  {/* Main Content Section */}
  <section className={`${styles.mainSection} ${styles.goldSeparator}`}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <div className={styles.logoImages}>
                <div className={styles.logoImage}>
                  <img src="/assets/images/about/image_2023_05_24T11_18_08_668Z.png" alt="Al Maha" />
                </div>
                <div className={styles.logoImage}>
                  <img src="/assets/images/about/logo.png" alt="Al Maha Logo" />
                </div>
                <div className={styles.logoImage}>
                  <img src="/assets/images/about/GPW_1.jpg" alt="GPW" />
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <p className={styles.leadText}>Al Maha Foods, as First and Largest Quality Assurance Organisation for Indian Basmati Rice, provides products and services to selected quality conscious global customers.</p>
                <p>We are one of the Top exporters of Basmati Rice from India with our strict quality controls we ensure right product at right price for buyer.</p>
                <p>Al Maha Foods was incepted in year 1998 with a vision to enhance value in Indian Basmati Rice by implementing high quality standards in processing and exports of rice from India.</p>
                <p>Products and services of Al Maha Foods are scientifically developed and managed to give maximum benefit to its global customers. We offer our services in three categories.</p>
                <p>Export of Basmati Rice</p>
                <p>Quality Assurance Services</p>
                <p>Domestic Market Services</p>
                <p>As a renowned entity in the industry, Al Maha Foods has earned a commendable reputation. NABL Accreditation, ISO 9001:2015, ISO 22000:2018 & Star Export House certification to us serves as a testament to our unshakable commitment to deliver unparalleled quality, credibility, and reliability to our esteemed customers. With a steadfast focus on excellence and customer satisfaction, our services are tailor-made to address any concerns of our valued customers.</p>
              </div>
              <div className={styles.buttonContainer}>
                {/* Add global 'button' class to improve audit matching for computed styles */}
                <a href="/assets/documents/Al-Maha-Company-Catlogue-for-about-us-page.pdf" className={`${styles.downloadBtn} button`} target="_blank" rel="noopener noreferrer">
                  Download Company Catalog
                </a>
                <a href="/assets/documents/Whistle-Blower-Policy-PDF.pdf" className={`${styles.downloadBtn} button`} target="_blank" rel="noopener noreferrer">
                  Whistle Blower Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Vision & Mission Section */}
  <section id="vision-mission" className={`${styles.visionSection} ${styles.goldSeparator}`}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Al Maha Vision</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.visionContent}>
                <div className={styles.visionImage}>
                  <img src="/assets/images/about/Rectangle-31-1.jpg" alt="Vision" />
                </div>
                <div className={styles.visionText}>
                  <p>To become a leading Rice supplier from India to consumers across the globe with high quality assurance services resulting in customer satisfaction.</p>
                </div>
                <div className={styles.visionStats}>
                  <div className={styles.statItem}>
                    <img src="/assets/images/about/Group-368.png" alt="Award" />
                    <p>Among top 10 QA service providers for Basmati Rice and Alike products in India</p>
                  </div>
                  <div className={styles.statItem}>
                    <img src="/assets/images/about/Group-369.jpg" alt="Ship" />
                    <p>To be Among the Top 50 Exporters of Rice to GCC and Asia</p>
                  </div>
                  <div className={styles.statItem}>
                    <img src="/assets/images/about/Group-370.png" alt="Revenue" />
                    <p>To multiply our revenue consistently</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Mission Section */}
  <section className={`${styles.missionSection} ${styles.goldSeparator}`}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Mission</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.missionContent}>
                <div className={styles.missionImageWrapper}>
                  <img src="/assets/images/about/Rectangle-35.jpg" alt="Mission" className={styles.missionImage} />
                </div>
                <div className={styles.description}>
                  <p>To indulge our customer across the globe with a best-in-class QA and Exports services and support the Food security in Rice and Alike</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Values Section */}
  <section id="values" className={`${styles.valuesSection} ${styles.goldSeparator}`}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Values</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.coreValuesMedia}>
                <img src="/assets/images/about/Mask-group.svg" alt="Core Values" />
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Team Section */}
  <section id="team" className={`${styles.teamSection} ${styles.goldSeparator}`}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>The Team</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.teamContent}>
                {/* Introductory text (moved above the image to match live site) */}
                <div className={styles.description}>
                  <p><strong>Total quality people is our heritage</strong></p>
                  <p>Our team of seasoned professionals shares a passion for excellence across all facets of our business which include – Production, Processing, Packaging, Shipping. Our team members work collaboratively to ensure that our customers receive nothing short of exceptional quality of Basmati Rice adhering to the most rigorous international standards. With continuous improvements and innovative practices, we consistently surpass customers’ expectations and proudly maintain our position as one among the most valuable companies in the industry.</p>
                </div>
                <div className={styles.teamImage}>
                  <img src="/assets/images/about/team-image.jpg" alt="Our Team" />
                </div>
                <div className={styles.description}>
                  <p>At Al Maha Foods, we foster strong and harmonious relationships with our International and Domestic partners that enable us to provide unparalleled customer satisfaction. Our efficient team of professionals takes effective steps continuously to deliver the best of the Industry. Our Management Strongly believes in training and development of Team and provides on job opportunities for growth as well as professional and technical trainings to each team member to stay abreast of the latest advancements and innovative methodologies in the industry. This has helped us in maintaining our position as the industry leader, while we continue to deliver unique products and services with customer centric approach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

export default About;
