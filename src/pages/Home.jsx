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
  useDocumentTitle('Al Maha Foods - Excellence in Basmati Rice Products and Services');

  return (
    <div className={styles.homePage}>
  <HeroSlider removeOverlay={true} />
      {/* Center all core content sections like inner pages */}
      <div className={styles.contentWrapper}>
        <WelcomeSection />
        <CertificationCard />
        <VisionBlock />
        <Suspense fallback={<div>Loading Map...</div>}>
          <InternationalPresence />
        </Suspense>
        <Suspense fallback={<div>Loading Map...</div>}>
          <DomesticPresence />
        </Suspense>
        <NewsSection />
        <BusinessSection />
        <FeaturedArticle />
      </div>
      <CTASection />
      {/* 2. Use the imported PDF path in your link. 
         This is an example. Apply this to your Footer or relevant component. */}
      <footer style={{ textAlign: 'center', padding: '20px' }}>
        <a href={PrivacyPolicyPdf} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </footer>
    </div>
  );
};

export default Home;
