import React from 'react';
import styles from './DomesticMarketSection.module.css';

const DomesticMarketSection = () => {
  return (
    <div className={styles.domesticSection}>
      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Building Strong Domestic Presence</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <h2>Building Strong Domestic Presence</h2>
                <p>Al Maha Foods has been expanding its domestic market presence with a focus on delivering quality Basmati rice to Indian consumers. Our domestic operations are designed to meet the diverse needs of the Indian market while maintaining the highest standards of quality and service.</p>
                
                <div className={styles.mapSection}>
                  <div className={styles.mapContainer}>
                    <img src="/assets/images/domestic/india-map.png" alt="India Distribution Map" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Our Products</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.productsContent}>
                <div className={styles.productsGrid}>
                  <div className={styles.productItem}>
                    <div className={styles.productImage}>
                      <img src="/assets/images/domestic/supreme.png" alt="Perfect Choice Supreme" />
                    </div>
                    <div className={styles.productContent}>
                      <h3><a href="#">Perfect Choice Supreme</a></h3>
                      <h5>Premium Quality Basmati Rice</h5>
                      <p>Our flagship product offering the finest quality Basmati rice with exceptional aroma and taste.</p>
                      <a href="#" className={styles.readMoreLink}>Read More</a>
                    </div>
                  </div>

                  <div className={styles.productItem}>
                    <div className={styles.productImage}>
                      <img src="/assets/images/domestic/special.png" alt="Perfect Choice Special" />
                    </div>
                    <div className={styles.productContent}>
                      <h3><a href="#">Perfect Choice Special</a></h3>
                      <h5>Special Grade Basmati Rice</h5>
                      <p>Specially selected Basmati rice grains that offer excellent quality at competitive prices.</p>
                      <a href="#" className={styles.readMoreLink}>Read More</a>
                    </div>
                  </div>

                  <div className={styles.productItem}>
                    <div className={styles.productImage}>
                      <img src="/assets/images/domestic/tibar.png" alt="Perfect Choice Tibar" />
                    </div>
                    <div className={styles.productContent}>
                      <h3><a href="#">Perfect Choice Tibar</a></h3>
                      <h5>Traditional Basmati Rice</h5>
                      <p>Traditional Basmati rice variety that brings the authentic taste and aroma of Indian Basmati.</p>
                      <a href="#" className={styles.readMoreLink}>Read More</a>
                    </div>
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

export default DomesticMarketSection;
