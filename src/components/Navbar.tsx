import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ServicesDropdown from './ServicesDropdown';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation - Optimized */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top d-none d-lg-block" style={{ backgroundColor: '#336021', minHeight: '50px', padding: '4px 0', zIndex: 1030 }}>
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ padding: '0' }}>
            <img src="/images/logo-02.png" alt="REIN Logo" height="28" width="auto" className="d-inline-block align-text-top" loading="eager" />
          </Link>
          <div className="navbar-nav ms-auto d-flex flex-row align-items-center">
            <Link className={`nav-link me-2 py-1 ${location.pathname === '/' ? 'active' : ''}`} to="/" style={{ fontSize: '0.9rem' }}>Home</Link>
            <Link className={`nav-link me-2 py-1 ${location.pathname === '/about' ? 'active' : ''}`} to="/about" style={{ fontSize: '0.9rem' }}>About</Link>
            <Link className={`nav-link me-2 py-1 ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects" style={{ fontSize: '0.9rem' }}>Projects</Link>
            <ServicesDropdown />
            <Link className={`nav-link me-2 py-1 ${location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs" style={{ fontSize: '0.9rem' }}>Blog</Link>
            <Link className={`nav-link me-2 py-1 ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" style={{ fontSize: '0.9rem' }}>Contact</Link>
            <Link to="/quote" className="btn btn-secondary btn-sm" style={{ fontSize: '0.8rem', padding: '6px 12px' }}>
              <i className="fas fa-calculator me-1"></i>Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar - Optimized */}
      <div className="mobile-top-bar d-lg-none" style={{ backgroundColor: '#336021', padding: '4px 0', minHeight: '40px' }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/">
              <img src="/images/logo-02.png" alt="REIN Logo" height="24" width="auto" loading="eager" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Optimized */}
      <nav className="mobile-bottom-nav d-lg-none fixed-bottom" style={{ backgroundColor: '#336021', padding: '2px 0', minHeight: '50px' }}>
        <div className="container">
          <div className="d-flex justify-content-around align-items-center">
            <Link to="/" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-home" style={{ fontSize: '0.8rem' }}></i></div>
              <small style={{ fontSize: '0.6rem' }}>Home</small>
            </Link>
            <Link to="/about" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/about' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-info-circle" style={{ fontSize: '0.8rem' }}></i></div>
              <small style={{ fontSize: '0.6rem' }}>About</small>
            </Link>
            <Link to="/services" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/services' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-cogs" style={{ fontSize: '0.8rem' }}></i></div>
              <small style={{ fontSize: '0.6rem' }}>Services</small>
            </Link>
            <Link to="/projects" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/projects' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-project-diagram" style={{ fontSize: '0.8rem' }}></i></div>
              <small style={{ fontSize: '0.6rem' }}>Projects</small>
            </Link>
            <Link to="/contact" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/contact' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-phone" style={{ fontSize: '0.8rem' }}></i></div>
              <small style={{ fontSize: '0.6rem' }}>Contact</small>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;