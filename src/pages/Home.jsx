import HeroSlider from '../components/home/HeroSlider';
import WelcomeSection from '../components/home/WelcomeSection';
import CertificationCard from '../components/home/CertificationCard';
import VisionBlock from '../components/home/VisionBlock';
import InternationalPresence from '../components/home/InternationalPresence';
import DomesticPresence from '../components/home/DomesticPresence';
import NewsSection from '../components/home/NewsSection';
import BusinessSection from '../components/home/BusinessSection';
import FeaturedArticle from '../components/home/FeaturedArticle';
import CTASection from '../components/home/CTASection';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homePage}>
  <HeroSlider removeOverlay={true} />
      {/* Center all core content sections like inner pages */}
      <div className={styles.contentWrapper}>
        <WelcomeSection />
        <CertificationCard />
        <VisionBlock />
        <InternationalPresence />
        <DomesticPresence />
        <NewsSection />
        <BusinessSection />
        <FeaturedArticle />
      </div>
      <CTASection />
    </div>
  );
};

export default Home;

