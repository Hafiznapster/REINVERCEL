import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ServicesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const services = [
    { path: '/services', icon: 'fas fa-list-ul', label: 'All Services' },
    { path: '/services/design-consultancy', icon: 'fas fa-drafting-compass', label: 'Design & Consultancy' },
    { path: '/services/solar-battery-ev', icon: 'fas fa-solar-panel', label: 'Solar, Battery & EV' },
    { path: '/services/wind-energy', icon: 'fas fa-wind', label: 'Wind Energy' },
    { path: '/services/energy-audit', icon: 'fas fa-chart-line', label: 'Energy Audit & Monitoring' },
    { path: '/services/maintenance-servicing', icon: 'fas fa-tools', label: 'Servicing' }
  ];

  const isServicesActive = location.pathname.startsWith('/services');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav-item dropdown me-4" ref={dropdownRef}>
      <a
        className={`nav-link dropdown-toggle ${isServicesActive ? 'active' : ''}`}
        href="#"
        role="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        Services
      </a>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {services.map((service, index) => (
          <React.Fragment key={service.path}>
            {index === 1 && <li><hr className="dropdown-divider" /></li>}
            <li>
              <Link
                className={`dropdown-item ${location.pathname === service.path ? 'active' : ''}`}
                to={service.path}
                onClick={handleLinkClick}
              >
                <i className={`${service.icon} me-2`}></i>
                {service.label}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ServicesDropdown;