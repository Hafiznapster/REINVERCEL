import React from 'react';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../Navigation/MobileNavigation';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <MobileNavigation />
      <main className="flex-grow-1" style={{ paddingTop: '76px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;