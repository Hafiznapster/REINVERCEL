import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaHeart } from 'react-icons/fa';
import { companyInfo } from '../../data/companyInfo';
import { services } from '../../data/services';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5>REIN - Revolution Energy India</h5>
            <p className="mb-3">
              Powering a sustainable future with clean energy solutions. 
              Leading the renewable energy revolution in India.
            </p>
            <div className="social-links">
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={companyInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/">Home</Link></li>
              <li className="mb-2"><Link to="/about">About Us</Link></li>
              <li className="mb-2"><Link to="/projects">Projects</Link></li>
              <li className="mb-2"><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              {services.slice(0, 5).map((service) => (
                <li key={service.id} className="mb-2">
                  <Link to={`/services/${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5>Newsletter</h5>
            <p className="mb-3">Subscribe to get updates on renewable energy trends and our latest projects.</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="me-2"
              />
              <Button variant="primary" type="submit">Subscribe</Button>
            </Form>
          </Col>
        </Row>
        
        <hr className="my-4" style={{ borderColor: '#444' }} />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">&copy; 2025 REIN. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">
              Designed with <FaHeart className="text-danger" /> for a greener future
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;