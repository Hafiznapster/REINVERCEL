// Critical CSS optimization
export const inlineCriticalCSS = (): void => {
  // This function will be called to inline critical CSS
  // The critical CSS is already inlined in the HTML file
  console.log('Critical CSS already inlined in HTML');
};

export const loadNonCriticalCSS = (): void => {
  // Load non-critical CSS after page load
  window.addEventListener('load', () => {
    // Load additional CSS files that are not critical
    const nonCriticalCSS = [
      // Add any non-critical CSS files here
    ];
    
    nonCriticalCSS.forEach(css => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = css;
      link.media = 'all';
      document.head.appendChild(link);
    });
  });
};

export const optimizeCSSLoading = (): void => {
  // This function will be called to optimize CSS loading
  inlineCriticalCSS();
  loadNonCriticalCSS();
};
