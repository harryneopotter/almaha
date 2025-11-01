import React from 'react';
import ArticleLayout from '../../components/article/ArticleLayout';
import PdfViewer from '../../components/article/PdfViewer';

const MarketUpdateMay = () => {
  return (
    <ArticleLayout
      title="Indian Basmati Rice Market Update May 2025"
      date="15-May-2025"
      category="News"
      author="self.sachin@gmail.com"
    >
      <PdfViewer pdfUrl="/market-updates/indian-basmati-rice-may-2025.pdf" />
    </ArticleLayout>
  );
};

export default MarketUpdateMay;