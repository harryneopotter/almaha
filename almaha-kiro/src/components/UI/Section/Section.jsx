import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ 
  children, 
  variant = 'default', 
  padding = 'medium', 
  background = 'transparent',
  className = '',
  id,
  ...props 
}) => {
  const sectionClass = `${styles.section} ${styles[variant]} ${styles[padding]} ${styles[background]} ${className}`.trim();
  
  return (
    <section id={id} className={sectionClass} {...props}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'hero', 'feature', 'content']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  background: PropTypes.oneOf(['transparent', 'white', 'gray', 'primary', 'secondary']),
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Section;