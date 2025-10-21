import { useEffect } from 'react';
import CTASection from '../components/home/CTASection';
import styles from './DomesticMarket.module.css';
import StickySidebar from '../components/common/StickySidebar';

function DomesticMarket() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.domesticPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div 
          className={styles.heroBackground}
          style={{
            backgroundImage: 'url("/assets/images/domestic/domestic-banner.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover'
          }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Domestic Market</h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <StickySidebar offset={120} className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Domestic</h2>
            </StickySidebar>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <h2>Building Strong Domestic Presence</h2>
                <p>Al Maha Foods has established a strong presence in the Indian market for its high-quality Basmati rice. With its state-of-the-art manufacturing unit, the company has become a preferred choice among domestic consumers. Al Maha Foods caters to the diverse needs of Indian customers with its different brands and packings. We have an extensive distribution network across India to ensure easy accessibility of our products.</p>
                
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
            <StickySidebar offset={120} className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Products</h2>
            </StickySidebar>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.productsContent}>
                <div className={styles.productsGrid}>
                  <div className={styles.productItem}>
                    <div className={styles.productImage}>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=297" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/domestic/supreme.png" alt="Perfect Choice Supreme" />
                      </a>
                    </div>
                    <div className={styles.productContent}>
                      <h3>
                        <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=297" target="_blank" rel="noopener noreferrer">
                          Perfect Choice Supreme
                        </a>
                      </h3>
                      <h5>Basmati Rice</h5>
                      <p>Best fits for special occasions. Suitable for Veg and Non-veg Biryani recipes as it elongates about three times o....</p>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=297" className={styles.readMoreLink} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </div>
                  </div>
                  
                  <div className={styles.productItem}>
                    <div className={styles.productImage}>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=295" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/domestic/special.png" alt="Perfect Choice Special" />
                      </a>
                    </div>
                    <div className={styles.productContent}>
                      <h3>
                        <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=295" target="_blank" rel="noopener noreferrer">
                          Perfect Choice Special
                        </a>
                      </h3>
                      <h5>Basmati Rice</h5>
                      <p>Veg Pulav, Peas Pulav, Kashmiri Pulav, Zafrani Pulav and Jeera Rice etc are best cooked in Perfect Choice Special....</p>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=295" className={styles.readMoreLink} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </div>
                  </div>
                  
                  <div className={styles.productItem}>
                    <div className={styles.productImage}>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=293" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/domestic/tibar.png" alt="Perfect Choice Tibar" />
                      </a>
                    </div>
                    <div className={styles.productContent}>
                      <h3>
                        <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=293" target="_blank" rel="noopener noreferrer">
                          Perfect Choice Tibar
                        </a>
                      </h3>
                      <h5>Basmati Rice</h5>
                      <p>Suitable for Veg and Non-veg Biryani recipes and Steam Rice. Perfect Choice Tibar Basmati Rice elongates to some ....</p>
                      <a href="https://www.perfectchoicebasmati.com/product-detail-page/?category_id=12&product_id=293" className={styles.readMoreLink} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </div>
                  </div>
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

export default DomesticMarket;
