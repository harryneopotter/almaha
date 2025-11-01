import React from 'react';
import PropTypes from 'prop-types';
import './ArticleLayout.css';
import ArticleHeader from './ArticleHeader';

const ArticleLayout = ({ title, date, category, author, children }) => {
  return (
    <article className="article-container">
      <div className="article-wrapper">
        <div className="article-content">
          <ArticleHeader
            title={title}
            date={date}
            category={category}
            author={author}
          />

          <section className="article-body">
            {children}
          </section>
        </div>
      </div>
    </article>
  );
};

ArticleLayout.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ArticleLayout;