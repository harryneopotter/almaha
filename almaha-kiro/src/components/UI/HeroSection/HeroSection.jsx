import PropTypes from 'prop-types';
import styles from './HeroSection.module.css';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  height = 'medium',
  overlay = true,
  textAlign = 'left',
  children,
  className = ''
}) => {
  const sectionClasses = `${styles.heroSection} ${styles[height]} ${styles[textAlign]} ${className}`.trim();
  
  const sectionStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section className={sectionClasses} style={sectionStyle}>
      {overlay && backgroundImage && <div className={styles.overlay}></div>}
      <div className={styles.container}>
        <div className={styles.content}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          {description && <p className={styles.description}>{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
  height: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  overlay: PropTypes.bool,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default HeroSection;