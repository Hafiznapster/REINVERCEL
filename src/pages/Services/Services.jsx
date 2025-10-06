import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Our Services</h1>
              <p className="lead mb-4">
                Comprehensive renewable energy solutions designed to meet your specific needs. 
                From consultation to installation and maintenance, we provide end-to-end services 
                for a sustainable energy future.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <Container>
          <Row>
            {services.map((service) => (
              <Col lg={4} md={6} key={service.id} className="mb-4">
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Service Benefits */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Why Choose Our Services?</h2>
              <p className="section-subtitle">
                Professional renewable energy solutions with proven results
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-money-bill-wave text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                <h5>Cost Savings</h5>
                <p>
                  Reduce your energy bills by up to 90% with our efficient renewable 
                  energy systems and take advantage of available grants.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-leaf text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                <h5>Environmental Impact</h5>
                <p>
                  Significantly reduce your carbon footprint and contribute to a 
                  cleaner, more sustainable future for generations.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-shield-alt text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                <h5>Energy Security</h5>
                <p>
                  Achieve energy independence with reliable renewable systems that 
                  protect you from rising energy costs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="mb-4">Ready to Go Green?</h2>
              <p className="lead mb-4">
                Get started with a free consultation and discover how renewable energy 
                can benefit your home or business.
              </p>
              <Button as={Link} to="/contact" variant="secondary" size="lg">
                Get Free Consultation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;