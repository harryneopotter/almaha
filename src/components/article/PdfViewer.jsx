import React, { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';
import './PdfViewer.css';

export const PdfViewer = ({ pdfUrl }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [showToolbar, setShowToolbar] = useState(false);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pdfDocRef = useRef(null);
  const pageNumRef = useRef(1);
  const zoomLevelRef = useRef(1.0);

  // Initialize PDF.js
  const initPdfJs = async () => {
    if (!isInitialized) {
      const pdfjsWorker = await import('pdfjs-dist/legacy/build/pdf.worker.entry');
      GlobalWorkerOptions.workerSrc = pdfjsWorker.default;
      setIsInitialized(true);
    }
  };

  const loadPDF = async () => {
    try {
      // Get the full URL for the PDF
      const fullPdfUrl = `${window.location.origin}${pdfUrl}`;
      
      // Load the PDF document
      const loadingTask = getDocument(fullPdfUrl);
      
      pdfDocRef.current = await loadingTask.promise;
      
      // Initial render of first page
      renderPage(pageNumRef.current);
    } catch (error) {
      console.error('Error loading PDF:', error);
      if (containerRef.current) {
        containerRef.current.innerHTML = 'Error loading PDF. Please try again later.';
      }
    }
  };

  const renderPage = async (pageNum) => {
    if (!pdfDocRef.current) return;

    try {
      const page = await pdfDocRef.current.getPage(pageNum);
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Calculate viewport based on container width and zoom level
      const containerWidth = containerRef.current.clientWidth;
      const originalViewport = page.getViewport({ scale: 1 });
      const scale = (containerWidth / originalViewport.width) * zoomLevelRef.current;
      const viewport = page.getViewport({ scale });

      // Set canvas dimensions
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      await page.render(renderContext).promise;
    } catch (error) {
      console.error('Error rendering page:', error);
    }
  };

  const handlePrevPage = () => {
    if (pageNumRef.current <= 1) return;
    pageNumRef.current--;
    renderPage(pageNumRef.current);
  };

  const handleNextPage = () => {
    if (!pdfDocRef.current || pageNumRef.current >= pdfDocRef.current.numPages) return;
    pageNumRef.current++;
    renderPage(pageNumRef.current);
  };

  const handleZoomIn = () => {
    zoomLevelRef.current = Math.min(zoomLevelRef.current * 1.2, 3.0);
    renderPage(pageNumRef.current);
  };

  const handleZoomOut = () => {
    zoomLevelRef.current = Math.max(zoomLevelRef.current / 1.2, 0.5);
    renderPage(pageNumRef.current);
  };

  useEffect(() => {
    // Initialize PDF.js when component mounts
    const init = async () => {
      await initPdfJs();
      await loadPDF();
    };

    init().catch(console.error);

    // Handle window resize
    const handleResize = () => renderPage(pageNumRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      // Cleanup
      if (pdfDocRef.current) {
        pdfDocRef.current.destroy();
        pdfDocRef.current = null;
      }
    };
  }, [pdfUrl]);

  return (
    <div 
      className="pdfemb-viewer" 
      ref={containerRef}
      onMouseEnter={() => setShowToolbar(true)}
      onMouseLeave={() => setShowToolbar(false)}>
      <div className="pdfemb-pagescontainer grab-to-pan-grab">
        <div className="pdfemb-inner-div pdfemb-page1">
          <canvas ref={canvasRef} className="pdfemb-the-canvas" />
        </div>
      </div>
      <div 
        className="pdfemb-toolbar pdfemb-toolbar-hover pdfemb-toolbar-bottom"
        style={{ display: showToolbar ? 'block' : 'none' }}>
        <button 
          className={`pdfemb-prev ${pageNumRef.current <= 1 ? 'pdfemb-btndisabled' : ''}`}
          onClick={handlePrevPage}
          title="Previous page"
          type="button"
          disabled={pageNumRef.current <= 1}
        />
        <button 
          className={`pdfemb-next ${!pdfDocRef.current || pageNumRef.current >= pdfDocRef.current.numPages ? 'pdfemb-btndisabled' : ''}`}
          onClick={handleNextPage}
          title="Next page"
          type="button"
          disabled={!pdfDocRef.current || pageNumRef.current >= pdfDocRef.current.numPages}
        />
        <div className="pdfemb-page-area">
          Page <span className="pdfemb-page-num">{pageNumRef.current}</span> / <span className="pdfemb-page-count">{pdfDocRef.current?.numPages || 1}</span>
        </div>
        <button 
          className="pdfemb-zoomout"
          onClick={handleZoomOut}
          title="Zoom Out"
          type="button"
        />
        <button 
          className="pdfemb-zoomin"
          onClick={handleZoomIn}
          title="Zoom In"
          type="button"
        />
        <div>
          Zoom <span className="pdfemb-zoom">{Math.round(zoomLevelRef.current * 100)}%</span>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;

