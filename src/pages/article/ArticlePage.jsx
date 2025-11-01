import React from 'react';
import { PdfViewer } from '../../components/article/PdfViewer';
import './ArticlePage.css';

export const ArticlePage = ({ 
  title,
  date,
  category,
  author,
  pdfUrl 
}) => {
  return (
    <div className="article-page">
      <div className="post-title-wrapper">
        <h1 className="post-title">{title}</h1>
        <div className="post-info">
          <div className="date-info">{date}</div>
          <div className="category-info">
            <span>|</span>
            In <a href={`/category/${category.toLowerCase()}`}>{category}</a>
          </div>
          <div className="author-info">
            <span>|</span>
            By {author}
          </div>
        </div>
      </div>
      
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
};