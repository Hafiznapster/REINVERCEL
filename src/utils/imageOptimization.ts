// Image optimization utilities
export const getOptimizedImageUrl = (src: string, width?: number, quality: number = 80): string => {
  // For Unsplash images, add optimization parameters
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    if (width) {
      url.searchParams.set('w', width.toString());
    }
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('auto', 'format');
    return url.toString();
  }
  
  // For local images, return as-is
  return src;
};

export const getImageDimensions = (src: string): { width: number; height: number } => {
  // Common image dimensions for optimization
  const dimensions: { [key: string]: { width: number; height: number } } = {
    'vishnu.webp': { width: 200, height: 200 },
    'logo-02.png': { width: 120, height: 40 },
    'logo-02.webp': { width: 120, height: 40 },
  };
  
  const filename = src.split('/').pop()?.split('?')[0];
  return dimensions[filename || ''] || { width: 400, height: 300 };
};

export const createResponsiveImage = (
  src: string,
  alt: string,
  className: string = '',
  loading: 'lazy' | 'eager' = 'lazy'
): string => {
  const dimensions = getImageDimensions(src);
  const optimizedSrc = getOptimizedImageUrl(src, dimensions.width);
  
  return `<img 
    src="${optimizedSrc}" 
    alt="${alt}" 
    class="${className}"
    width="${dimensions.width}"
    height="${dimensions.height}"
    loading="${loading}"
    style="aspect-ratio: ${dimensions.width}/${dimensions.height}; object-fit: cover;"
  />`;
};

// Preload critical images
export const preloadCriticalImages = (): void => {
  const criticalImages = [
    '/images/logo-02.webp',
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1744&q=80'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
