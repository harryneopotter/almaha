import { Suspense, lazy } from 'react';
import HeroSlider from '../components/home/HeroSlider';
import WelcomeSection from '../components/home/WelcomeSection';
import CertificationCard from '../components/home/CertificationCard';
import VisionBlock from '../components/home/VisionBlock';
import NewsSection from '../components/home/NewsSection';
import BusinessSection from '../components/home/BusinessSection';
import FeaturedArticle from '../components/home/FeaturedArticle';
import CTASection from '../components/home/CTASection';
import PrivacyPolicyPdf from '../../Privacy-Policy-Al-maha.pdf'; // 1. Import the PDF
import useDocumentTitle from '../hooks/useDocumentTitle';
import styles from '../styles/Home.module.css';

const InternationalPresence = lazy(() => import('../components/home/InternationalPresence'));
const DomesticPresence = lazy(() => import('../components/home/DomesticPresence'));

const Home = () => {
  useDocumentTitle('Al Maha Foods - Excellence in Basmati Rice Products and Services'); // 2. Set the document title

  return (
    <div className={styles.homePage}>
      <HeroSlider removeOverlay={true} />
      {/* Center all core content sections like inner pages */}
      <div className={styles.contentWrapper}>
        <WelcomeSection />
        <CertificationCard />
      </div>
      {/* VisionBlock is full-bleed, outside contentWrapper, positioned after WelcomeSection/CertificationCard */}
      <VisionBlock />
      {/* Continue with rest of content sections */}
      <div className={styles.contentWrapper}>
        <Suspense fallback={<div>Loading Map...</div>}>
          <InternationalPresence />
        </Suspense>
        <Suspense fallback={<div>Loading Map...</div>}>
          <DomesticPresence />
        </Suspense>
        <NewsSection />
        <BusinessSection />
        <FeaturedArticle />
        {/* CTASection has gray background but content is contained */}
        <CTASection />
      </div>
    </div>
  );
};

export default Home;
