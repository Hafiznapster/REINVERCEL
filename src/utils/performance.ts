// Performance monitoring utilities
export const measurePerformance = () => {
  // Measure Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  // Measure page load time
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart);
    console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.fetchStart);
    console.log('First Paint:', performance.getEntriesByName('first-paint')[0]?.startTime);
    console.log('First Contentful Paint:', performance.getEntriesByName('first-contentful-paint')[0]?.startTime);
  });
};

// Optimize image loading
export const optimizeImageLoading = () => {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
};

// Preload critical resources - Enhanced for LCP optimization
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/images/logo-02.webp',
    'https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2',
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75&fm=webp'
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    if (resource.includes('.woff2')) {
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
    } else if (resource.includes('unsplash.com')) {
      link.as = 'image';
      link.type = 'image/webp';
    } else {
      link.as = 'image';
    }
    document.head.appendChild(link);
  });
};

// LCP optimization
export const optimizeLCP = () => {
  // Preload the largest contentful paint element
  const lcpElement = document.querySelector('img[loading="eager"]');
  if (lcpElement) {
    const src = lcpElement.getAttribute('src');
    if (src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    }
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  measurePerformance();
  optimizeImageLoading();
  preloadCriticalResources();
  optimizeLCP();
};

// Alias for App.tsx compatibility
export const initializePerformanceMonitoring = measurePerformance;
export const lazyLoadResources = optimizeImageLoading;