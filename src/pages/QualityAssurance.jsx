import { useEffect } from 'react';
import CTASection from '../components/home/CTASection';
import styles from './QualityAssurance.module.css';

function QualityAssurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.qualityPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div 
          className={styles.heroBackground}
          style={{
            backgroundImage: 'url("/assets/images/quality/quality-banner.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover'
          }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Quality Assurance</h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Quality Assurance Services: Our Strength</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <h3>India's First and Largest Quality Assurance Organization for Basmati Rice</h3>
                <p>We are at the forefront in this competitive Basmati Rice Quality Assurance owing to our Vision, Mission, and Values. We are dedicated and devoted, leaving no stone unturned to ensure our customer's complete satisfaction.</p>
                <p>Al Maha Foods provides Quality Assurance and Inspection Services to selected quality conscious Basmati rice buyers Worldwide. We outstand in Basmati rice industry with our customer centric approach where we provide handholding in understanding the crop expectations, future contingencies, market dynamics and Market Intelligence.</p>
                <p>We follow the highest levels of standards and practices in our Lab operations. Al Maha Foods well equipped Laboratory operations are ISO 9001:2015 certified and NABL accredited in accordance with ISO/IEC 17025:2017, the highest level of accreditation granted in India for Lab operations.</p>
                <p>Our team takes care of product starting from paddy, throughout milling and to the port of shipment to ensure customer value optimization. We have a detailed and time-bound process to ensure the quality of Basmati Rice. It begins with testing groundwater quality and goes through crop survey, pre-procurement inspection, rice mill audit, milling process and onsite detailed inspection at vendor site during packing and dispatch of goods.</p>
                <p>This is a highly demanding and most challenging service in Basmati rice trade. Our company has always adopted business principles based on honesty and integrity to offer the best solutions and services. The team ensures that the end product meets the buyer's specification and its safe loading on the vessel with specified packaging. This enables our clients to have an upper hand in the competitive rice trade due to the purest quality product packed in their brands under our stringent quality control.</p>
                <p>Our strong association with scientific fraternity and rice growers leads to trade innovation, preparedness, farmer welfare and education. We at Al Maha Foods are committed to provide products and solutions that are the best available in terms of quality, service and value.</p>
                
                {/* Progress Bars */}
                <div className={styles.progressBars}>
                  <div className={styles.progressItem}>
                    <div className={styles.progressLabel}>Customer Satisfaction</div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className={styles.progressItem}>
                    <div className={styles.progressLabel}>Quality</div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{width: '99%'}}></div>
                    </div>
                  </div>
                  <div className={styles.progressItem}>
                    <div className={styles.progressLabel}>Marketing</div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div className={styles.gallery}>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/quality/QA-Page.jpeg" alt="Quality Assurance" />
                  </div>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/quality/QA-Page-2.jpeg" alt="Quality Assurance 2" />
                  </div>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/quality/QA-Page-scaled.jpg" alt="Quality Assurance Scaled" />
                  </div>
                </div>

                {/* Download Brochure Button */}
                <div className={styles.downloadSection}>
                  {/* Add global 'button' class for audit selector parity */}
                  <a href="/assets/documents/QA-Brochure-for-Quality-assurance-page.pdf" className={`${styles.downloadBtn} button`} target="_blank" rel="noopener noreferrer">
                    Download QA Brochure
                  </a>
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

export default QualityAssurance;
