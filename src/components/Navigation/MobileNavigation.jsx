import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCogs, FaProjectDiagram, FaPhone } from 'react-icons/fa';

const MobileNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/about', icon: FaUser, label: 'About' },
    { path: '/services', icon: FaCogs, label: 'Services' },
    { path: '/projects', icon: FaProjectDiagram, label: 'Projects' },
    { path: '/contact', icon: FaPhone, label: 'Contact' }
  ];

  return (
    <div className="mobile-nav-bottom d-lg-none">
      <div className="container">
        <div className="row">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path || 
                           (item.path === '/services' && location.pathname.includes('/services'));
            
            return (
              <div key={item.path} className="col">
                <Link 
                  to={item.path} 
                  className={`mobile-nav-item d-flex flex-column align-items-center ${isActive ? 'active' : ''}`}
                >
                  <div className="mobile-nav-icon">
                    <IconComponent />
                  </div>
                  <span>{item.label}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;