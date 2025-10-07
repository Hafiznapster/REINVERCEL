import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  quality?: number;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  loading = 'lazy',
  width,
  height,
  quality = 75,
  sizes = '100vw'
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if browser supports WebP
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // Optimize image URL
    const optimizeImageUrl = (originalSrc: string) => {
      if (originalSrc.includes('unsplash.com')) {
        const url = new URL(originalSrc);
        if (width) {
          url.searchParams.set('w', width.toString());
        }
        url.searchParams.set('q', quality.toString());
        url.searchParams.set('auto', 'format');
        url.searchParams.set('fit', 'crop');
        
        // Add WebP support if supported
        if (supportsWebP()) {
          url.searchParams.set('fm', 'webp');
        }
        
        return url.toString();
      }
      return originalSrc;
    };

    setImageSrc(optimizeImageUrl(src));
  }, [src, width, quality]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to original src if optimized version fails
    setImageSrc(src);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
      loading={loading}
      width={width}
      height={height}
      sizes={sizes}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default OptimizedImage;
