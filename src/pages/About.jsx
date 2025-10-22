import { useEffect } from 'react';
import CTASection from '../components/home/CTASection';
import styles from './About.module.css';

function About() {
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
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>About</h2>
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
                <a href="/assets/documents/Al-Maha-Company-Catlogue-for-about-us-page.pdf" className={styles.downloadBtn} target="_blank" rel="noopener noreferrer">
                  Download Company Catalog
                </a>
                <a href="/assets/documents/Whistle-Blower-Policy-PDF.pdf" className={styles.downloadBtn} target="_blank" rel="noopener noreferrer">
                  Whistle Blower Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className={styles.visionSection}>
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
                    <img src="/assets/images/about/ship-icon.png" alt="Ship" />
                    <p>To be Among the Top 50 Exporters of Rice to GCC and Asia</p>
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
          <div className={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Mission</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.description}>
                <p><strong>At Al Maha Foods</strong>, we are dedicated to delivering exceptional rice products that meet the highest standards of excellence. Our mission began with the goal of supplying top-tier Basmati rice to discerning customers around the world, and we have since expanded our operations to encompass a range of premium food offerings.</p>
                <p>We have a global clientele that spans across different continents and are rated as star export house. Our commitment to quality has earned us several certifications and accreditations that validate our dedication to maintaining the highest standards in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className={styles.valuesSection}>
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
              <div className={styles.companyCulture}>
                <h3 className={styles.cultureTitle}><strong>Company Culture</strong></h3>
                <p className={styles.cultureDescription}>
                  Al Maha Foods Company culture reflects our ideology and basic principles being followed in all our business relationship. 
                  This defines core value system imbibed in our entire team. Here under is our Company Culture.
                </p>
                
                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <h4><strong>Honesty</strong></h4>
                    <p>Truthfulness, fair presentation of what is known or perceived by an individual without any hiding and not involving oneself in unfair behavioural practices.</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Integrity</strong></h4>
                    <p>One adheres to strict moral or ethical code of conduct. And abiding by principle of honesty. Doing what is said by an individual, keeping ones promises in a fair and good manner.</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Loyalty</strong></h4>
                    <p>Intellectual and/or emotional commitment to a course of action. Loyalty is not something one owes to someone but something that you owe to yourself. Loyalty is all about being faithful and truthful to your self to your organisation and others.</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Team Spirit</strong></h4>
                    <p>Organised efforts as a group. The spirit of a team that makes all the members wanting to succeed as a group. This means collectiveness and togetherness with all the team members, helping each other to achieve the set targets or goals.</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Open for Ideas</strong></h4>
                    <p>To accept and respect ideas and views of others with a collective approach to reach at the best ideas for the working of the team. Willingness to consider new ideas.</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Free and Straight Forward Expression</strong></h4>
                    <p>One should feel free to share and inform ones Ideas, vision and action plans in an open way. The sharing and passing of knowledge and information should be concise, clear and straight forward.</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Transparency in work</strong></h4>
                    <p>Free flow and sharing of related knowledge and information with all the concerned. It means working in an atmosphere of mutual trust and faith with no hidden agendas and be transparent in all our dealings.</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Dependability</strong></h4>
                    <p>A trait of being reliable to the degree of certainty. Being able to set and meet targets and goals in a time-bound and a highly dependable manner. Ability without dependability is a liablility</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Responsibility</strong></h4>
                    <p>A form of trustworthiness, a trait of being answerable towards ones actions. Responsibility is the sense in which one makes conscientious efforts for achieving and or maintaining required results. This means proper custody, care, and performance of the assigned task with an obligation to reach at successful conclusion in a highly responsible manner.</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Accountability</strong></h4>
                    <p>Being answerable for the results of an assigned task. Being answerable for actions and decisions taken. This means an obligation to perform, to account for the responsibilities conferred. Accountability generates credibility.</p>
                  </div>
                  
                  <div className={styles.valueItem}>
                    <h4><strong>Long Term Planning</strong></h4>
                    <p>All the actions should defray a long term vision. All the planning should be done keeping a long term perspective and a bigger picture in view. This is an approach to have far-sightedness. A vision to see something unseen.</p>
                  </div>
                </div>
                
                <p className={styles.cultureConclusion}>
                  These core values are to be reflected in all our deeds. We at Al Maha Foods believe that an individual has to be true to oneself first and then to the family, society and the organization. This remains the foundation of our Company culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={styles.teamSection}>
        <div className={styles.container}>
          <div className_={styles.contentWrapper}>
            {/* Left Column - Sidebar */}
            <div className={styles.leftColumn}>
              <div className={styles.leftDivider}></div>
              <h2 className={styles.heading}>Team</h2>
            </div>

            {/* Right Column - Main Content */}
            <div className={styles.rightColumn}>
              <div className={styles.rightDivider}></div>
              <div className={styles.teamContent}>
                <div className={styles.teamImage}>
                  <img src="/assets/images/about/team-image.jpg" alt="Our Team" />
                </div>
                <div className={styles.description}>
                  <p>Our team consists of experienced professionals who are passionate about delivering the best quality rice products and services. With years of expertise in the industry, our team ensures that every product meets our high standards and customer expectations.</p>
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
