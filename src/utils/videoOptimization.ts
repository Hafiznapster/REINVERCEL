// Video optimization utilities
export const checkVideoSupport = (): boolean => {
  const video = document.createElement('video');
  return !!(video.canPlayType && video.canPlayType('video/mp4').replace(/no/, ''));
};

export const getOptimalVideoSource = (): string => {
  // Check if user is on mobile (likely slower connection)
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Use a smaller, optimized video for mobile
    return 'https://videos.pexels.com/video-files/5469358/5469358-hd_1920_1080_24fps.mp4';
  }
  
  // Use local WebM for desktop (better compression)
  return '/images/18.webm';
};

export const preloadVideo = (src: string): Promise<HTMLVideoElement> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.src = src;
    video.preload = 'metadata';
    
    video.addEventListener('loadeddata', () => {
      resolve(video);
    });
    
    video.addEventListener('error', () => {
      reject(new Error(`Failed to load video: ${src}`));
    });
    
    // Timeout after 5 seconds
    setTimeout(() => {
      reject(new Error(`Video loading timeout: ${src}`));
    }, 5000);
  });
};

export const createVideoElement = (src: string): HTMLVideoElement => {
  const video = document.createElement('video');
  video.src = src;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.style.width = '100%';
  video.style.height = '100%';
  video.style.objectFit = 'cover';
  
  return video;
};
