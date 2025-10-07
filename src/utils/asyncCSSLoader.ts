// Async CSS loader to prevent render blocking
export const loadCSSAsync = (href: string, media: string = 'all'): Promise<void> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    document.head.appendChild(link);
  });
};

export const preloadCSS = (href: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = href;
  link.onload = () => {
    link.rel = 'stylesheet';
  };
  document.head.appendChild(link);
};

export const loadNonCriticalCSS = (): void => {
  // Load non-critical CSS after page load
  window.addEventListener('load', () => {
    // Load additional CSS files that are not critical
    const nonCriticalCSS = [
      // Add any non-critical CSS files here
    ];
    
    nonCriticalCSS.forEach(css => {
      loadCSSAsync(css).catch(console.error);
    });
  });
};

export const optimizeCSSLoading = (): void => {
  // This function will be called to optimize CSS loading
  loadNonCriticalCSS();
};