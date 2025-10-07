import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ServicesDropdown from './ServicesDropdown';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation - Optimized */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top d-none d-lg-block" style={{ backgroundColor: '#336021', minHeight: '60px', padding: '8px 0' }}>
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ padding: '0' }}>
            <img src="/images/logo-02.png" alt="REIN Logo" height="32" width="auto" className="d-inline-block align-text-top" loading="eager" />
          </Link>
          <div className="navbar-nav ms-auto d-flex flex-row align-items-center">
            <Link className={`nav-link me-3 py-1 ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            <Link className={`nav-link me-3 py-1 ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
            <Link className={`nav-link me-3 py-1 ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects">Projects</Link>
            <ServicesDropdown />
            <Link className={`nav-link me-3 py-1 ${location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs">Blog</Link>
            <Link className={`nav-link me-3 py-1 ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
            <Link to="/quote" className="btn btn-secondary btn-sm">
              <i className="fas fa-calculator me-1"></i>Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar - Optimized */}
      <div className="mobile-top-bar d-lg-none" style={{ backgroundColor: '#336021', padding: '6px 0', minHeight: '50px' }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/">
              <img src="/images/logo-02.png" alt="REIN Logo" height="28" width="auto" loading="eager" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Optimized */}
      <nav className="mobile-bottom-nav d-lg-none fixed-bottom" style={{ backgroundColor: '#336021', padding: '4px 0', minHeight: '60px' }}>
        <div className="container">
          <div className="d-flex justify-content-around align-items-center">
            <Link to="/" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-home fa-sm"></i></div>
              <small style={{ fontSize: '0.7rem' }}>Home</small>
            </Link>
            <Link to="/about" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/about' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-info-circle fa-sm"></i></div>
              <small style={{ fontSize: '0.7rem' }}>About</small>
            </Link>
            <Link to="/services" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/services' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-cogs fa-sm"></i></div>
              <small style={{ fontSize: '0.7rem' }}>Services</small>
            </Link>
            <Link to="/projects" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/projects' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-project-diagram fa-sm"></i></div>
              <small style={{ fontSize: '0.7rem' }}>Projects</small>
            </Link>
            <Link to="/contact" className={`text-white text-center text-decoration-none py-1 ${location.pathname === '/contact' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-phone fa-sm"></i></div>
              <small style={{ fontSize: '0.7rem' }}>Contact</small>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;