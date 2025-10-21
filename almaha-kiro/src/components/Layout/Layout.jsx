import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const Layout = ({ children, headerTransparent = false, hasSlider = false, className = '' }) => {
  const layoutClasses = `${styles.layout} ${className}`.trim();
  
  const mainClasses = [
    styles.main,
    hasSlider && styles.hasSlider
  ].filter(Boolean).join(' ');

  return (
    <div className={layoutClasses}>
      <Header isTransparent={headerTransparent} />
      <main className={mainClasses}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerTransparent: PropTypes.bool,
  hasSlider: PropTypes.bool,
  className: PropTypes.string,
};

export default Layout;