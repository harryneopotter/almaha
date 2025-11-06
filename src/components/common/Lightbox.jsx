import { useEffect, useState } from 'react';
import styles from './Lightbox.module.css';

function Lightbox({ images, currentIndex: initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const handleKeyboard = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
    };
    document.addEventListener('keydown', handleKeyboard);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, currentIndex]);

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.lightbox} onClick={handleBackdropClick}>
      <div className={styles.lightboxContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <i className="fa fa-times"></i>
        </button>

        {images.length > 1 && (
          <>
            <button className={styles.navButton} onClick={handlePrev} aria-label="Previous">
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className={`${styles.navButton} ${styles.navButtonRight}`} onClick={handleNext} aria-label="Next">
              <i className="fa fa-chevron-right"></i>
            </button>
          </>
        )}

        <img src={currentImage.src} alt={currentImage.alt} className={styles.lightboxImage} />
      </div>
    </div>
  );
}

export default Lightbox;
