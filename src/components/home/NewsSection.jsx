import { useInView } from 'react-intersection-observer';
import styles from '../../styles/components/NewsSection.module.css';

const newsItems = [
  {
    id: 1,
    title: 'Indian Basmati Rice Market Update November 2025',
    date: '15-November-2025',
    link: '/news/flyer-november-2025'
  },
  {
    id: 2,
    title: 'Indian Basmati Rice Market Update October 2025',
    date: '15-October-2025',
    link: '/news/flyer-october-2025'
  },
  {
    id: 3,
    title: 'Indian Basmati Rice Market Update September 2025',
    date: '15-September-2025',
    link: '/news/flyer-september-2025'
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
