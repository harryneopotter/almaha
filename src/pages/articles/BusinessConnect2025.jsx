import React from 'react';
import ArticleLayout from '../../components/article/ArticleLayout';
import PdfViewer from '../../components/article/PdfViewer';

const BusinessConnect = () => {
  return (
    <ArticleLayout
      title="From Strategy to Success: The Journey of a Visionary CEO"
      date="01-August-2025"
      category="Business Connect"
      author="Al-Maha"
    >
      <PdfViewer pdfUrl="/assets/documents/Business-Connect-–-Al-Maha-Foods-International-Pvt.pdf" />
    </ArticleLayout>
  );
};

export default BusinessConnect;
