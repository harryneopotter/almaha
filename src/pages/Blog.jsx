import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const allArticles = [
  // News Articles
  {
    id: 1,
    title: 'Indian Basmati Rice Market Update August 2025',
    date: '15-August-2025',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-august-2025',
    excerpt: 'Market conditions remained stable in August 2025 with steady demand from GCC and Asia.'
  },
  {
    id: 2,
    title: 'Indian Basmati Rice Market Update July 2025',
    date: '15-July-2025',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-july-2025',
    excerpt: 'Monsoon impact was moderate with logistics operating normally across major ports.'
  },
  {
    id: 3,
    title: 'Indian Basmati Rice Market Update June 2025',
    date: '15-June-2025',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-june-2025',
    excerpt: 'Procurement remained healthy with consistent arrivals supporting stable availability.'
  },
  {
    id: 4,
    title: 'Indian Basmati Rice Market Update May 2025',
    date: '15-May-2025',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-may-2025',
    excerpt: 'Market dynamics showed positive trends with increased export inquiries.'
  },
  {
    id: 5,
    title: 'Indian Basmati Rice Market Update April 2025',
    date: '17-April-2025',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-april-2025',
    excerpt: 'Spring season brought renewed activity in the basmati rice market.'
  },
  {
    id: 6,
    title: 'Indian Basmati Rice Market Update January 2025',
    date: '28-January-2025',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-january-2025',
    excerpt: 'New year started with optimistic market outlook and stable pricing.'
  },
  {
    id: 7,
    title: 'Indian Basmati Rice Market Update December 2024',
    date: '9-December-2024',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-december-2024',
    excerpt: 'Year-end market summary with strong export performance.'
  },
  {
    id: 8,
    title: 'Indian Basmati Rice Market Update November 2024',
    date: '13-November-2024',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-november-2024',
    excerpt: 'Festive season demand drove market activity in November.'
  },
  {
    id: 9,
    title: 'Indian Basmati Rice Market Update October 2024',
    date: '13-November-2024',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-october-2024',
    excerpt: 'October market analysis with focus on quality and pricing trends.'
  },
  {
    id: 10,
    title: 'Indian Basmati Rice Market Update September 2024',
    date: '13-November-2024',
    category: 'News',
    slug: 'indian-basmati-rice-market-update-september-2024',
    excerpt: 'Monsoon season impact on basmati rice production and exports.'
  },
  {
    id: 11,
    title: 'Basmati Rice Market Update March 2024',
    date: '21-March-2024',
    category: 'News',
    slug: 'basmati-rice-market-update-march-2024',
    excerpt: 'Spring market update with new crop arrival expectations.'
  },
  {
    id: 12,
    title: 'Basmati Rice Market Update February 2024',
    date: '28-February-2024',
    category: 'News',
    slug: 'basmati-rice-market-update-february-2024',
    excerpt: 'February market conditions and export performance analysis.'
  },
  {
    id: 13,
    title: 'Basmati Rice Market Update January 2024',
    date: '28-January-2024',
    category: 'News',
    slug: 'basmati-rice-market-update-january-2024',
    excerpt: 'New year market outlook and industry trends for 2024.'
  },
  // Business Articles
  {
    id: 14,
    title: 'From Strategy to Success: The Journey of a Visionary CEO | Business Connect',
    date: '2-August-2025',
    category: 'Business',
    slug: 'from-strategy-to-success-the-journey-of-a-visionary-ceo-business-connect',
    excerpt: 'Leadership insights and strategic vision driving Al Maha Foods success.'
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredArticles, setFilteredArticles] = useState(allArticles);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredArticles(allArticles);
    } else {
      setFilteredArticles(allArticles.filter(article => article.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = ['all', 'News', 'Business'];

  return (
    <div className={styles.blogPage}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div 
          className={styles.heroBackground}
          style={{
            backgroundImage: 'url("/assets/images/blog/blog-banner.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover'
          }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Blog</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          {/* Category Filter */}
          <div className={styles.filterSection}>
            <div className={styles.filterButtons}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'Show all' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className={styles.articlesGrid}>
            {filteredArticles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.articleMeta}>
                  <span className={styles.articleDate}>{article.date}</span>
                  <span className={styles.articleCategory}>{article.category}</span>
                </div>
                <h2 className={styles.articleTitle}>
                  <Link to={`/news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <Link to={`/news/${article.slug}`} className={styles.readMoreLink}>
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
