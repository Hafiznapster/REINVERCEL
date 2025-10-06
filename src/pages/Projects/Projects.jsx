import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Our Projects</h1>
              <p className="lead mb-4">
                Explore our portfolio of successful renewable energy installations. 
                From large-scale solar farms to residential hybrid systems, see how 
                we're making a difference across India.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-5">
        <Container>
          <Row>
            {projects.map((project) => (
              <Col lg={4} md={6} key={project.id} className="mb-4">
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Project Stats */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Project Impact</h2>
              <p className="section-subtitle">
                The measurable difference our projects are making
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="display-4 fw-bold text-primary mb-2">15+</div>
                <h5>MW Installed</h5>
                <p className="text-muted">Total renewable energy capacity deployed</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="display-4 fw-bold text-primary mb-2">12K+</div>
                <h5>Homes Powered</h5>
                <p className="text-muted">Households benefiting from clean energy</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="display-4 fw-bold text-primary mb-2">8K+</div>
                <h5>Tons CO₂ Saved</h5>
                <p className="text-muted">Annual carbon emissions reduction</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="display-4 fw-bold text-primary mb-2">200+</div>
                <h5>MWh Generated</h5>
                <p className="text-muted">Clean energy produced annually</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Technologies We Use</h2>
              <p className="section-subtitle">
                Cutting-edge equipment and proven technologies for optimal performance
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-solar-panel text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                <h5>Premium Solar Panels</h5>
                <p>
                  High-efficiency monocrystalline and polycrystalline panels from 
                  leading manufacturers like JA Solar and Canadian Solar.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-microchip text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                <h5>Smart Inverters</h5>
                <p>
                  Advanced inverter technology from Huawei, SMA, and Fronius for 
                  maximum efficiency and monitoring capabilities.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-battery-full text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                <h5>Energy Storage</h5>
                <p>
                  Tesla Powerwall and other leading battery storage systems for 
                  energy independence and backup power.
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
              <h2 className="mb-4">Start Your Project Today</h2>
              <p className="lead mb-4">
                Ready to join our growing list of satisfied customers? Contact us 
                for a free consultation and see how renewable energy can work for you.
              </p>
              <Button as={Link} to="/contact" variant="secondary" size="lg">
                Get Free Quote
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Projects;