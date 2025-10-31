import { useEffect } from 'react';
import CTASection from '../components/home/CTASection';
import useDocumentTitle from '../hooks/useDocumentTitle';
import styles from './CSR.module.css';

function CSR() {
  useDocumentTitle('Corporate Social Responsibility - Al Maha Foods');

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
              {/* Heading moved from right column to left column per design */}
              <h2 className={styles.heading}>CSR Initiatives by Al Maha</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <p>Al Maha Foods attributes its existence to the society and seeks to do its part for the society through its Corporate Social Responsibility (CSR) Initiative. Education, healthcare and rural development are the hallmarks of progress of mankind. It is in these fields that we carry out our CSR initiatives:</p>
                <ul>
                  <li>Creating viable infrastructure for child education.</li>
                  <li>Providing health care facilities to the community.</li>
                  <li>Creating awareness among farmers.</li>
                  <li>Provision of safe drinking water in most backward regions of the country.</li>
                </ul>
                <p>Al Maha Foods executes its CSR projects in collaboration with local NGOs and government bodies. These projects are aimed at:</p>
                <ul>
                  <li>Upliftment of local communities.</li>
                  <li>Use of sustainable practices in operations.</li>
                  <li>Favourable impact on the environment.</li>
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
              <h2 className={styles.heading}>CSR Activities at Al Maha</h2>
            </div>

            {/* Right Column - Main Content (video only as requested) */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                {/* Keep only the video for CSR Activities per request */}
                <div className={styles.activitiesMedia}>
                  <video controls muted playsInline>
                    <source src={"https://almahafoods.com/wp-content/uploads/2023/05/Untitled.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
              <h2 className={styles.heading}>Social Responsibility – Our Passion!!</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <div className={styles.csrGallery}>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/WhatsApp-Image-2024-01-01-at-2.58.37-PM.jpeg" alt="Library Project" />
                      
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/WhatsApp-Image-2024-01-01-at-2.59.32-PM.jpeg" alt="Library Project" />
                      
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/WhatsApp-Image-2024-01-01-at-3.00.02-PM.jpeg" alt="Library Table" />
                      
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/Farmer-Awareness-2.jpg" alt="Farmer awareness" />
                      
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-1.jpg" alt="Amrit Mahotsav" />
                      
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr10-1.jpg" alt="Farmer Awareness" />
                      
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr8.jpg" alt="Farmer Awareness" />
                      
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-6.jpg" alt="Farmer Awareness" />
                      
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr9.jpg" alt="Health & Safety" />
                      
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr7.jpg" alt="Farmer Awareness" />
                      
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-5.jpg" alt="Farmer Awareness" />
                      
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-4.jpg" alt="Education & Training" />
                      
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-3.jpg" alt="Cleaning" />
                      
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/csr-2.jpg" alt="Covid 19 Ration Kit" />
                      
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/Safe-Drinking-Water-1.jpg" alt="Safe Drinking Water" />
                      
                    </div>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/Health-Sector.jpg" alt="Health Sector" />
                      
                    </div>
                  </div>
                  <div className={styles.galleryRow}>
                    <div className={styles.galleryBlock}>
                      <img src="/assets/images/csr/Child-Education.jpg" alt="Child Education" />
                      
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
