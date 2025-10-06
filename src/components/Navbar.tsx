import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ServicesDropdown from './ServicesDropdown';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top d-none d-lg-block" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo-02.png" alt="REIN Logo" height="40" className="d-inline-block align-text-top" />
          </Link>
          <div className="navbar-nav ms-auto d-flex flex-row">
            <Link className={`nav-link me-4 ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            <Link className={`nav-link me-4 ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
            <Link className={`nav-link me-4 ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects">Projects</Link>
            <ServicesDropdown />
            <Link className={`nav-link me-4 ${location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs">Blog</Link>
            <Link className={`nav-link me-4 ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
            <Link to="/quote" className="btn btn-secondary">
              <i className="fas fa-calculator me-2"></i>Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="mobile-top-bar d-lg-none" style={{ backgroundColor: '#336021', padding: '10px 0' }}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <Link to="/">
              <img src="/images/logo-02.png" alt="REIN Logo" height="35" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav d-lg-none fixed-bottom" style={{ backgroundColor: '#336021', padding: '8px 0' }}>
        <div className="container">
          <div className="d-flex justify-content-around">
            <Link to="/" className={`text-white text-center text-decoration-none ${location.pathname === '/' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-home"></i></div>
              <small>Home</small>
            </Link>
            <Link to="/about" className={`text-white text-center text-decoration-none ${location.pathname === '/about' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-info-circle"></i></div>
              <small>About</small>
            </Link>
            <Link to="/services" className={`text-white text-center text-decoration-none ${location.pathname === '/services' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-cogs"></i></div>
              <small>Services</small>
            </Link>
            <Link to="/projects" className={`text-white text-center text-decoration-none ${location.pathname === '/projects' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-project-diagram"></i></div>
              <small>Projects</small>
            </Link>
            <Link to="/blogs" className={`text-white text-center text-decoration-none ${location.pathname === '/blogs' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-blog"></i></div>
              <small>Blog</small>
            </Link>
            <Link to="/contact" className={`text-white text-center text-decoration-none ${location.pathname === '/contact' ? 'opacity-100' : 'opacity-75'}`}>
              <div><i className="fas fa-phone"></i></div>
              <small>Contact</small>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;