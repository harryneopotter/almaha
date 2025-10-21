import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ children, variant = 'default', padding = 'medium', shadow = true, className = '', ...props }) => {
  const cardClass = `${styles.card} ${styles[variant]} ${styles[padding]} ${shadow ? styles.shadow : ''} ${className}`.trim();
  
  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'bordered', 'elevated']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  shadow: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;