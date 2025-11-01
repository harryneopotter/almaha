import React from 'react';
import ArticleLayout from '../../components/article/ArticleLayout';
import PdfViewer from '../../components/article/PdfViewer';

const MarketUpdateJune = () => {
  return (
    <ArticleLayout
      title="Indian Basmati Rice Market Update June 2025"
      date="15-June-2025"
      category="News"
      author="self.sachin@gmail.com"
    >
      <PdfViewer pdfUrl="/assets/documents/Flyer_June_2025-1.pdf" />
    </ArticleLayout>
  );
};

export default MarketUpdateJune;