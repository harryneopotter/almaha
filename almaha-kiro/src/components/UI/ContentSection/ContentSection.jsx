import PropTypes from 'prop-types';
import styles from './ContentSection.module.css';

const ContentSection = ({ 
  title,
  subtitle,
  children,
  background = 'white',
  padding = 'medium',
  textAlign = 'left',
  maxWidth = 'large',
  className = '',
  id
}) => {
  const sectionClasses = `${styles.contentSection} ${styles[background]} ${styles[padding]} ${styles[textAlign]} ${styles[maxWidth]} ${className}`.trim();

  return (
    <section id={id} className={sectionClasses}>
      <div className={styles.container}>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  background: PropTypes.oneOf(['white', 'gray', 'primary', 'transparent']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  maxWidth: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  className: PropTypes.string,
  id: PropTypes.string,
};

export default ContentSection;