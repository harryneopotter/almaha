import { useEffect } from 'react';
import CTASection from '../components/home/CTASection';
import styles from './CSR.module.css';

function CSR() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.csrPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div 
          className={styles.heroBackground}
          style={{
            backgroundImage: 'url("/assets/images/csr/csr-banner.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover'
          }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Corporate Social Responsibility</h1>
          </div>
        </div>
      </section>

      {/* CSR Initiatives Section */}
      <section className={styles.csrInitiativesSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>CSR Initiatives</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <h2>CSR Initiatives by Al Maha</h2>
                <p>Al Maha Foods attributes its existence to the society and seeks to do its part for the society through its Corporate Social Responsibility (CSR) Initiative. Education, healthcare and rural development are the hallmarks of progress of mankind. It is in these fields that we carry out our CSR initiatives:</p>
                <ul>
                  <li>Creating viable infrastructure for child education.</li>
                  <li>Providing health care facilities to the community.</li>
                  <li>Creating awareness among farmers.</li>
                  <li>Provision of safe drinking water in most backward regions of the country.</li>
                </ul>
                <p>Our commitment to social responsibility extends beyond business operations, focusing on sustainable development and community welfare. Through these initiatives, we aim to create a positive impact on society while maintaining our core values of integrity and excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Activities Section */}
      <section className={styles.csrActivitiesSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>CSR Activities</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <h2>CSR Activities at Al Maha</h2>
                <p>Our CSR activities are designed to address critical social challenges and contribute to the overall development of communities. We focus on creating sustainable solutions that have a lasting impact on the lives of people.</p>
                <div className={styles.activitiesGrid}>
                  <div className={styles.activityItem}>
                    <h3>Education Support</h3>
                    <p>Building schools, providing educational materials, and supporting underprivileged children's education.</p>
                  </div>
                  <div className={styles.activityItem}>
                    <h3>Healthcare Initiatives</h3>
                    <p>Setting up medical camps, providing healthcare facilities, and supporting community health programs.</p>
                  </div>
                  <div className={styles.activityItem}>
                    <h3>Farmer Awareness</h3>
                    <p>Conducting training programs and awareness campaigns to help farmers adopt better agricultural practices.</p>
                  </div>
                  <div className={styles.activityItem}>
                    <h3>Water Conservation</h3>
                    <p>Implementing water conservation projects and providing safe drinking water in rural areas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility Section */}
      <section className={styles.socialResponsibilitySection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Social Responsibility</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <h2>Social Responsibility – Our Passion!!</h2>
                <div className={styles.csrGallery}>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/WhatsApp-Image-2024-01-01-at-2.58.37-PM.jpeg" alt="Library Project" />
                      <h5>Library Project</h5>
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/WhatsApp-Image-2024-01-01-at-2.59.32-PM.jpeg" alt="Library Project" />
                      <h5>Library Project</h5>
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/WhatsApp-Image-2024-01-01-at-3.00.02-PM.jpeg" alt="Library Table" />
                      <h5>Library Table</h5>
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/Farmer-Awareness-2.jpg" alt="Farmer awareness" />
                      <h5>Farmer awareness</h5>
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-1.jpg" alt="Amrit Mahotsav" />
                      <h5>Amrit Mahotsav</h5>
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-2.jpg" alt="CSR Initiative" />
                      <h5>CSR Initiative</h5>
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-3.jpg" alt="Community Support" />
                      <h5>Community Support</h5>
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-4.jpg" alt="Education Support" />
                      <h5>Education Support</h5>
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-5.jpg" alt="Health Initiative" />
                      <h5>Health Initiative</h5>
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-6.jpg" alt="Environmental Initiative" />
                      <h5>Environmental Initiative</h5>
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

export default CSR;
