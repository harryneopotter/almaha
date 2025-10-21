import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Article.module.css';

const NEWS_CONTENT = {
  'indian-basmati-rice-market-update-august-2025': {
    title: 'Indian Basmati Rice Market Update August 2025',
    date: '15-August-2025',
    body: [
      'Market conditions remained stable in August 2025 with steady demand from GCC and Asia.',
      'Price movements were within expected ranges with quality premiums persisting for top grades.'
    ],
  },
  'indian-basmati-rice-market-update-july-2025': {
    title: 'Indian Basmati Rice Market Update July 2025',
    date: '15-July-2025',
    body: [
      'Monsoon impact was moderate with logistics operating normally across major ports.',
      'Export inquiries showed an uptick ahead of festive season demand.'
    ],
  },
  'indian-basmati-rice-market-update-june-2025': {
    title: 'Indian Basmati Rice Market Update June 2025',
    date: '15-June-2025',
    body: [
      'Procurement remained healthy with consistent arrivals supporting stable availability.',
      'Freight rates softened marginally providing relief to FOB pricing.'
    ],
  },
  'indian-basmati-rice-market-update-may-2025': {
    title: 'Indian Basmati Rice Market Update May 2025',
    date: '15-May-2025',
    body: [
      'Market dynamics showed positive trends with increased export inquiries.',
      'Quality parameters remained consistent across all major varieties.'
    ],
  },
  'indian-basmati-rice-market-update-april-2025': {
    title: 'Indian Basmati Rice Market Update April 2025',
    date: '17-April-2025',
    body: [
      'Spring season brought renewed activity in the basmati rice market.',
      'New crop expectations created positive sentiment among buyers.'
    ],
  },
  'indian-basmati-rice-market-update-january-2025': {
    title: 'Indian Basmati Rice Market Update January 2025',
    date: '28-January-2025',
    body: [
      'New year started with optimistic market outlook and stable pricing.',
      'Export commitments remained strong with diversified geographical presence.'
    ],
  },
  'indian-basmati-rice-market-update-december-2024': {
    title: 'Indian Basmati Rice Market Update December 2024',
    date: '9-December-2024',
    body: [
      'Year-end market summary with strong export performance.',
      'Quality assurance protocols ensured consistent product standards.'
    ],
  },
  'indian-basmati-rice-market-update-november-2024': {
    title: 'Indian Basmati Rice Market Update November 2024',
    date: '13-November-2024',
    body: [
      'Festive season demand drove market activity in November.',
      'Supply chain efficiency improved with better logistics coordination.'
    ],
  },
  'indian-basmati-rice-market-update-october-2024': {
    title: 'Indian Basmati Rice Market Update October 2024',
    date: '13-November-2024',
    body: [
      'October market analysis with focus on quality and pricing trends.',
      'Export volumes maintained steady growth trajectory.'
    ],
  },
  'indian-basmati-rice-market-update-september-2024': {
    title: 'Indian Basmati Rice Market Update September 2024',
    date: '13-November-2024',
    body: [
      'Monsoon season impact on basmati rice production and exports.',
      'Quality parameters remained within acceptable ranges despite weather challenges.'
    ],
  },
  'basmati-rice-market-update-march-2024': {
    title: 'Basmati Rice Market Update March 2024',
    date: '21-March-2024',
    body: [
      'Spring market update with new crop arrival expectations.',
      'Market sentiment remained positive with steady demand patterns.'
    ],
  },
  'basmati-rice-market-update-february-2024': {
    title: 'Basmati Rice Market Update February 2024',
    date: '28-February-2024',
    body: [
      'February market conditions and export performance analysis.',
      'Quality standards maintained across all product lines.'
    ],
  },
  'basmati-rice-market-update-january-2024': {
    title: 'Basmati Rice Market Update January 2024',
    date: '28-January-2024',
    body: [
      'New year market outlook and industry trends for 2024.',
      'Strategic initiatives focused on sustainable growth and quality enhancement.'
    ],
  },
};

function NewsArticle() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article = NEWS_CONTENT[slug];

  if (!article) {
    return (
      <div className={styles.articlePage}>
        <section className={styles.mainSection}>
          <div className={styles.container}>
            <h1 className={styles.title}>Article not found</h1>
            <p>
              The requested article was not found. Return to <Link to="/">Home</Link>.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.articlePage}>
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.meta}>
            <span className={styles.date}>{article.date}</span>
            <span className={styles.separator}>|</span>
            <span className={styles.category}>In News</span>
            <span className={styles.separator}>|</span>
            <span className={styles.author}>by admin</span>
          </div>
          <div className={styles.body}>
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsArticle;


