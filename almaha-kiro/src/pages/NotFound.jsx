import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.notFound}>
        <div className={styles.container}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.message}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.homeButton}>
              Return to Home
            </Link>
            <Link to="/contact-us" className={styles.contactButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;