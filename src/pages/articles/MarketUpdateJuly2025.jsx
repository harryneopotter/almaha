import React from 'react';
import ArticleLayout from '../../components/article/ArticleLayout';
import PdfViewer from '../../components/article/PdfViewer';

const MarketUpdateJuly = () => {
  return (
    <ArticleLayout
      title="Indian Basmati Rice Market Update July 2025"
      date="15-July-2025"
      category="News"
      author="self.sachin@gmail.com"
    >
      <PdfViewer pdfUrl="/assets/documents/Indian-Basmati-Rice-Market-Update-–-July-2025.pdf" />
    </ArticleLayout>
  );
};

export default MarketUpdateJuly;
