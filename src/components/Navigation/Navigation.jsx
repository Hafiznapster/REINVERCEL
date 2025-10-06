import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <Navbar expand="lg" variant="dark" fixed="top" className="d-none d-lg-block" style={{ backgroundColor: 'rgba(51, 96, 33, 0.95)', backdropFilter: 'blur(10px)' }}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <span className="h4 mb-0 text-white fw-bold">REIN</span>
          </Navbar.Brand>
          
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Nav.Link>
            
            <NavDropdown title="Services" className={location.pathname.includes('/services') ? 'active' : ''}>
              <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/services/design-consultancy">Design & Consultancy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/solar-battery-ev">Solar, Battery & EV</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/wind-energy">Wind Energy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/energy-audit">Energy Audit & Monitoring</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/maintenance">Maintenance & Servicing</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="btn btn-secondary ms-2">
              <FaPhone className="me-2" />Let's Talk
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Mobile Top Bar */}
      <Navbar variant="dark" fixed="top" className="d-lg-none" style={{ backgroundColor: 'rgba(51, 96, 33, 0.95)', backdropFilter: 'blur(10px)' }}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <span className="h4 mb-0 text-white fw-bold">REIN</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;