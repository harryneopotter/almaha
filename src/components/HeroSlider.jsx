import React, { useEffect, useState, useRef } from 'react';
import styles from './HeroSlider.module.css';

export default function HeroSlider({ images = [], interval = 3000, height = '450px', showOverlay = true, children }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return;
    timeoutRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timeoutRef.current);
  }, [images, interval]);

  return (
    <div className={styles.slider} style={{ height }}>
      {images.map((src, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden={i === index ? 'false' : 'true'}
        />
      ))}

      {showOverlay && (
        <>
          <div className={styles.overlay} />
          <div className={styles.content}>{children}</div>
        </>
      )}
    </div>
  );
}
