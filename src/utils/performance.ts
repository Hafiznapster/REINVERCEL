import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Performance monitoring utility
export const initializePerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    // Monitor Core Web Vitals
    onCLS((metric) => {
      console.log('CLS:', metric);
      // You can send this to your analytics service
    });

    onINP((metric) => {
      console.log('INP:', metric);
    });

    onFCP((metric) => {
      console.log('FCP:', metric);
    });

    onLCP((metric) => {
      console.log('LCP:', metric);
    });

    onTTFB((metric) => {
      console.log('TTFB:', metric);
    });
  }
};

// Lazy load non-critical resources
export const lazyLoadResources = () => {
  // Lazy load Font Awesome after initial render
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
  fontAwesomeLink.media = 'print';
  fontAwesomeLink.onload = function() {
    this.media = 'all';
  };
  document.head.appendChild(fontAwesomeLink);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/images/logo-02.webp',
    '/images/3d.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
