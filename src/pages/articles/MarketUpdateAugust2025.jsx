import React from 'react';
import ArticleLayout from '../../components/article/ArticleLayout';
import PdfViewer from '../../components/article/PdfViewer';

const MarketUpdateAugust = () => {
  return (
    <ArticleLayout
      title="Indian Basmati Rice Market Update August 2025"
      date="15-August-2025"
      category="News"
      author="self.sachin@gmail.com"
    >
      <PdfViewer pdfUrl="/assets/documents/indian-basmati-rice-market-update-august-2025.pdf" />
    </ArticleLayout>
  );
};

export default MarketUpdateAugust;
