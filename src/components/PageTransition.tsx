import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
    
    // Trigger animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-content ${isVisible ? 'fade-in-up' : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;