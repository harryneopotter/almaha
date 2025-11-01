import React from 'react';
import PropTypes from 'prop-types';
import './ArticleHeader.css';

const ArticleHeader = ({ title, date, category, author }) => {
  return (
    <header className="article-header">
      <h1 className="article-title">{title}</h1>
      <div className="post-info">
        <div className="date-info">{date}</div>
        <div className="category-info">
          <span>|</span>In <a href={`/category/${category.toLowerCase()}`}>{category}</a>
        </div>
        <div className="author-info">
          <span>|</span>By <a href={`/author/${author.toLowerCase()}`}>{author}</a>
        </div>
      </div>
    </header>
  );
};

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ArticleHeader;
