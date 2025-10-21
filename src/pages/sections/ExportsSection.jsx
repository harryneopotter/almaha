import React from 'react';
import styles from './ExportsSection.module.css';

const ExportsSection = () => {
  return (
    <div className={styles.exportsSection}>
      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Exports</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <h2>Al Maha Foods today stands for state-of-the-art International quality product deliverance.</h2>
                <p>Al Maha Foods embarked on its journey with a clear vision: to offer premium Basmati Rice to Quality conscious Global consumers of Basmati Rice. Our Ideology combined with scientific systems, best human resources and sophisticated modern techniques define our functioning. Al Maha Foods consistently succeeds in delivering complete solutions to the buyers with its best business practices based on principles ad unmatched quality systems.</p>
                
                <h3><b>Infrastructure</b></h3>
                <p>Al Maha Foods has infrastructure to produce all variants of Basmati Rice that includes, Raw, Steam Brown and Parboiled Rice. Our Rice Mills are strategically located in the heart of paddy growing area to gain maximum advantage of quality, price and logistics and are ISO 22000:2018 certified. Implementation of Kaizen practices, continuous system improvement and upgradation play a major role in enhancing productivity and achieving sustained continual growth.</p>
                
                <h3><b>Brands</b></h3>
                <p>Al Maha brands are specialized in Indian Raw Basmati Rice and Indian Sella Basmati Rice. Our diverse brands are quality combinations that address the pricing and quality needs of all the ranges of consumers and buyers in all segments and all geographies. To lead the competitive and volatile Basmati rice trade, the company supports customers to minimize business risk and secure their supply chain and procurement. Al Maha Foods is a trend setter when it comes to exploring new avenues, embracing innovations, and setting new benchmarks in the industry.</p>
                
                <div className={styles.imageSection}>
                  <img src="/assets/images/exports/rice_field.jpg" alt="Rice Field" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className={styles.qualitySection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Quality</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.qualityContent}>
                <blockquote>
                  <h3>Strict control over Quality and correct price drives the success of Al Maha Foods.</h3>
                </blockquote>
                <p>We have a strong Quality Control team that ensures the highest standards of quality in our products. Our quality control process includes rigorous testing at every stage of production, from raw material procurement to final packaging. We maintain strict adherence to international quality standards and certifications.</p>
                
                <div className={styles.qualityGallery}>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/basmtrice.jpg" alt="Basmati Rice" />
                  </div>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/sellrice.jpg" alt="Sella Rice" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivering Section */}
      <section className={styles.deliveringSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Delivering World-class Indian Basmati rice</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.deliveringContent}>
                <div className={styles.deliveringGallery}>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/Export-3.jpeg" alt="Export 3" />
                  </div>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/Export-1.jpeg" alt="Export 1" />
                  </div>
                  <div className={styles.galleryItem}>
                    <img src="/assets/images/exports/Export-2.jpeg" alt="Export 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportsSection;
