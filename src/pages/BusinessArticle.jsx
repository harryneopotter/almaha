import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import styles from './Article.module.css';
import ArticleLayout from '../components/article/ArticleLayout';
import PdfViewer from '../components/article/PdfViewer';

function BusinessArticle() {
  useDocumentTitle('From Strategy to Success: The Journey of a Visionary CEO | Business Connect - Al Maha Foods');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Render the Business Connect PDF using the shared ArticleLayout + PdfViewer
  return (
    <ArticleLayout
      title="From Strategy to Success: The Journey of a Visionary CEO | Business Connect"
      date="2-August-2025"
      category="Business"
      author="admin"
    >
      <PdfViewer pdfUrl="/assets/documents/Business-Connect-Al-Maha-Foods-International-Pvt.pdf" />
    </ArticleLayout>
  );
}

export default BusinessArticle;


