import { useEffect } from 'react';
import CTASection from '../components/home/CTASection';
import useDocumentTitle from '../hooks/useDocumentTitle';
import styles from './CultureAtAlMaha.module.css';
import HeroSlider from '../components/HeroSlider';

function CultureAtAlMaha() {
  useDocumentTitle('Culture at Al Maha - Al Maha Foods');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.culturePage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <HeroSlider
          images={[
            '/assets/images/careers/career-banner.jpg',
            '/assets/images/careers/228A0840-1-1.jpg'
          ]}
          interval={3000}
          height={styles.heroBanner?.height || '450px'}
          showOverlay={false}
        />
        {/* intentionally no overlay text on the slider; images only */}
      </section>

  {/* Work With Us Section */}
  <section id="apply-now" className={styles.workWithUsSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Work With US</h2>
              <div className={styles.sidebarImage}>
                <img src="/assets/images/careers/GPW_1.jpg" alt="Work With Us" />
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <h3><strong>Bringing The Best out of the Team</strong></h3>
                <p>Al Maha Foods fosters a positive and collaborative office culture that values teamwork, respect, and open communication. The company encourages employee growth and development through regular training programs and opportunities for advancement. The office environment is designed to promote productivity and creativity, with comfortable workstations and modern facilities. The company also promotes work-life balance and wellness initiatives, such as flexible work arrangements, health and wellness programs, and social events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className={styles.companyCultureSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Company Culture</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.cultureValues}>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-4.png" alt="Honesty" />
                  <h3>Honesty</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-5.png" alt="Integrity" />
                  <h3>Integrity</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-6.png" alt="Loyalty" />
                  <h3>Loyalty</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-3.png" alt="Team Spirit" />
                  <h3>Team Spirit</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-10-1.png" alt="Open for ideas" />
                  <h3>Open for ideas</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-10.png" alt="Free and Straight Forward Expression" />
                  <h3>Free and Straight Forward Expression</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-8.png" alt="Transparency in Work" />
                  <h3>Transparency in Work</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-9.png" alt="Dependability" />
                  <h3>Dependability</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-11.png" alt="Responsibility" />
                  <h3>Responsibility</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group.jpg" alt="Accountability" />
                  <h3>Accountability</h3>
                </div>
                <div className={styles.valueItem}>
                  <img src="/assets/images/careers/Group-8-1.png" alt="Long Term Planning" />
                  <h3>Long Term Planning</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Culture Section */}
      <section className={styles.workCultureSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Work Culture @ almaha</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.workCultureValues}>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-2-2.png" alt="Be Productive" />
                  <h3>Be Productive</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-11.png" alt="Be result Oriented" />
                  <h3>Be result Oriented</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-10-1.png" alt="Be disciplined" />
                  <h3>Be disciplined</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-9-1.png" alt="Be professional" />
                  <h3>Be professional</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-8-1.png" alt="Set goals and achieve them" />
                  <h3>Set goals and achieve them in day to day work</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-7-1.png" alt="Accomplish work in a time bound manner" />
                  <h3>Accomplish work in a time bound manner</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-6-1.png" alt="Do it now approach" />
                  <h3>Do it now approach</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-4-1.png" alt="Always aim perfection" />
                  <h3>Always aim for perfection with zero errors</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-5-1.png" alt="Execute new assignments with happiness" />
                  <h3>Execute new assignments with happiness</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-3-1.png" alt="Be helpful and accommodative" />
                  <h3>Be helpful and accommodative</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-2-1.png" alt="Be up to date in your sphere of work" />
                  <h3>Be up to date in your sphere of work</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-1-1.png" alt="Work with pleasure, not with pressure" />
                  <h3>Work with pleasure, not with pressure</h3>
                </div>
                <div className={styles.workValueItem}>
                  <img src="/assets/images/careers/Group-10.png" alt="Be enthusiastic, positive and keep smiling" />
                  <h3>Be enthusiastic, positive and keep smiling</h3>
                </div>
              </div>
              
              <div className={styles.scoreCard}>
                <h2>Al Maha Score</h2>
                <img src="/assets/images/careers/Score-Card-27x15-Inches-1-1.png" alt="Al Maha Score Card" />
              </div>
              
              <div className={styles.scoreCard}>                
              <img src="/assets/images/careers/GPTW-poster.jpg" alt="Al Maha Score Card 2" />
              </div>

              <div className={styles.guinnessCertificate}>
                <h2>Guinness Certificate</h2>
                <img src="/assets/images/careers/1jpg.jpg" alt="Guinness Certificate" />
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Life at Al Maha Section */}
  <section id="life-at-almaha" className={styles.lifeAtAlMahaSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Life@almaha</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.lifeGallery}>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/2-4.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/1-1-2.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/3-2.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/4-2.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/5-2.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/6-2.jpg" alt="Life at Al Maha" />
                </div>
              
              
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/life-@almaha-3.png" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A0136.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A0267.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A0521.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A0621.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A0836.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A9650.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A9768.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/new24.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/new25.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/new28.2.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/Picture-33.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/picture0001-25.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/picture0001-43.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/picture0001-83.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A0086.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A0106.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A0110.jpg" alt="Life at Al Maha" />
                </div>
                <div className={styles.galleryItem}>
                  <img src="/assets/images/careers/228A0122.jpg" alt="Life at Al Maha" />
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

export default CultureAtAlMaha;
