import React, { useState, useRef, useEffect } from 'react';
import { checkVideoSupport, getOptimalVideoSource, preloadVideo } from '../utils/videoOptimization';

const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const initializeVideo = async () => {
      // Check if video is supported
      if (!checkVideoSupport()) {
        console.log('Video not supported, showing fallback');
        setVideoError(true);
        setIsLoading(false);
        return;
      }

      const video = videoRef.current;
      if (video) {
        const handleError = () => {
          console.log('Video failed to load, showing fallback image');
          setVideoError(true);
          setIsLoading(false);
        };

        const handleLoadedData = () => {
          setVideoLoaded(true);
          setIsLoading(false);
        };

        video.addEventListener('error', handleError);
        video.addEventListener('loadeddata', handleLoadedData);

        // Try to preload the video first
        try {
          const optimalSource = getOptimalVideoSource();
          await preloadVideo(optimalSource);
          
          // Try to play the video
          video.play().catch((error) => {
            console.log('Video autoplay failed:', error);
            setVideoError(true);
          });
        } catch (error) {
          console.log('Video preload failed:', error);
          setVideoError(true);
        }

        // Set a timeout to show fallback if video takes too long to load
        const timeout = setTimeout(() => {
          if (isLoading) {
            console.log('Video loading timeout, showing fallback');
            setVideoError(true);
            setIsLoading(false);
          }
        }, 8000); // 8 second timeout

        return () => {
          video.removeEventListener('error', handleError);
          video.removeEventListener('loadeddata', handleLoadedData);
          clearTimeout(timeout);
        };
      }
    };

    initializeVideo();
  }, []);

  return (
    <section id="home" className="hero-section position-relative" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      {/* Video Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -2 }}>
        {/* Loading indicator */}
        {isLoading && !videoError && (
          <div 
            className="w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ 
              background: 'linear-gradient(135deg, #336021 0%, #4aab3d 100%)',
              zIndex: 1
            }}
          >
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        
        {!videoError ? (
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-100 h-100" 
            style={{ objectFit: 'cover', opacity: videoLoaded ? 1 : 0 }}
            onError={() => setVideoError(true)}
            preload="metadata"
          >
            <source src={getOptimalVideoSource()} type={getOptimalVideoSource().includes('webm') ? 'video/webm' : 'video/mp4'} />
            <source src="https://videos.pexels.com/video-files/5469358/5469358-hd_1920_1080_24fps.mp4" type="video/mp4" />
            <source src="/images/18.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div 
            className="w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ 
              background: 'linear-gradient(135deg, #336021 0%, #4aab3d 100%)',
              objectFit: 'cover' 
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1744&q=80" 
              alt="Solar Panels Background" 
              className="w-100 h-100"
              style={{ objectFit: 'cover', aspectRatio: '1744/1163' }}
              loading="eager"
              width="1744"
              height="1163"
              onError={(e) => {
                // If even the fallback image fails, show a solid color background
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #336021 0%, #4aab3d 100%)';
              }}
            />
          </div>
        )}
      </div>
      
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: -1 }}></div>
      
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 col-md-8">
            <div className="hero-content text-white">
              <div className="mb-3">
                <span className="badge bg-success px-3 py-2">SUSTAINABLE ENERGY SOLUTIONS</span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Powering a <span style={{ color: '#e68c3a' }}>Sustainable</span><br />
                Future with <span style={{ color: '#e68c3a' }}>Clean Energy</span>
              </h1>
              <p className="lead mb-4">
                Harness the power of renewable energy to reduce your carbon footprint and save on energy costs 
                with our innovative solar, wind, and sustainable energy solutions.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#services" className="btn btn-success btn-lg">
                  <i className="fas fa-cogs me-2"></i>Our Services
                </a>
                <a href="/quote" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-calculator me-2"></i>Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;