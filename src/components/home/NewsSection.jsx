import { useInView } from 'react-intersection-observer';
import styles from '../../styles/components/NewsSection.module.css';

const newsItems = [
  {
    id: 1,
    title: 'Indian Basmati Rice Market Update August 2025',
    date: '15-August-2025',
    link: '/news/indian-basmati-rice-market-update-august-2025'
  },
  {
    id: 2,
    title: 'Indian Basmati Rice Market Update July 2025',
    date: '15-July-2025',
    link: '/news/indian-basmati-rice-market-update-july-2025'
  },
  {
    id: 3,
    title: 'Indian Basmati Rice Market Update June 2025',
    date: '15-June-2025',
    link: '/news/indian-basmati-rice-market-update-june-2025'
  }
];

const NewsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles.newsSection} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.content} ${inView ? styles.animate : ''}`}>
          <div className={styles.textColumn}>
            <div className={styles.divider}></div>
            <h2 className={styles.heading}>News</h2>
          </div>
          
          <div className={styles.newsColumn}>
            <div className={styles.divider}></div>
            <div className={styles.newsGrid}>
              {newsItems.map((item) => (
                <article key={item.id} className={styles.newsItem}>
                  <h3 className={styles.newsTitle}>
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p className={styles.newsDate}>{item.date}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

