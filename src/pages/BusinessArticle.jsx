import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.css';

function BusinessArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.articlePage}>
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>From Strategy to Success: The Journey of a Visionary CEO | Business Connect</h1>
          <div className={styles.meta}>
            <span className={styles.date}>2-August-2025</span>
            <span className={styles.separator}>|</span>
            <span className={styles.category}>In Business</span>
            <span className={styles.separator}>|</span>
            <span className={styles.author}>by admin</span>
          </div>
          <div className={styles.body}>
            <p>
              This is a placeholder business article page linked from the Home page Business section. Provide the full
              content here or integrate a CMS source when available.
            </p>
            <p>
              For now, this page ensures navigation integrity and prevents broken links during the WordPress to React migration.
            </p>
          </div>
          <p>
            <Link to="/">← Back to Home</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default BusinessArticle;


