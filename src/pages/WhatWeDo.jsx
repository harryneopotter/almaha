import React from 'react';
import styles from './WhatWeDo.module.css';
import QualityAssuranceSection from './sections/QualityAssuranceSection';
import ExportsSection from './sections/ExportsSection';
import DomesticMarketSection from './sections/DomesticMarketSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CTASection from '../components/home/CTASection';
import useDocumentTitle from '../hooks/useDocumentTitle';

const WhatWeDo = () => {
  const location = useLocation();

  useDocumentTitle('What We Do - Al Maha Foods');

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div className={styles.whatWeDoPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div
          className={styles.heroBackground}
          style={{
            backgroundImage: 'url("/assets/images/home/home-banner-quality.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover',
          }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>What We Do</h1>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section id="quality-assurance" className={styles.section}>
        <QualityAssuranceSection />
      </section>

      {/* Exports Section */}
      <section id="exports" className={styles.section}>
        <ExportsSection />
      </section>

      {/* Domestic Market Section */}
      <section id="domestic-market" className={styles.section}>
        <DomesticMarketSection />
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default WhatWeDo;
