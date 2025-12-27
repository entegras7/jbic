'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../page.module.css';

const slides = [
  {
    src: '/slider/image1.jpg',
    alt: 'Advisor explaining coverage options to a client in an office',
  },
  {
    src: '/slider/image2.jpg',
    alt: 'Family discussing life and health insurance plans',
  },
  {
    src: '/slider/image3.jpg',
    alt: 'Business team planning risk and capital solutions',
  },
  {
    src: '/slider/image4.jpg',
    alt: 'Couple reviewing home and motor insurance documents',
  },
];

const INTERVAL_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.heroSlider} aria-label="Insurance stories slideshow">
      <div className={styles.heroSliderInner}>
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.heroSlide} ${
              i === index ? styles.heroSlideActive : ''
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={styles.heroSlideImage}
              sizes="(min-width: 900px) 40vw, 100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className={styles.heroDots} aria-hidden="true">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.heroDot} ${
              i === index ? styles.heroDotActive : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}
