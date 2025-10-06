import React from 'react';
import { Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { teamMembers } from '../../data/teamMembers';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">About REIN</h1>
              <p className="lead mb-4">
                Revolution Energy India is pioneering the transition to clean, sustainable energy 
                solutions across India, empowering communities and businesses with innovative 
                renewable energy technologies.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.pexels.com/photos/9875431/pexels-photo-9875431.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="About REIN" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission, Vision, Goals Tabs */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Tabs defaultActiveKey="mission" className="mb-4" justify>
                <Tab eventKey="mission" title="Our Mission">
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="text-primary mb-3">Our Mission</h4>
                      <p>
                        To revolutionize India's energy landscape by providing accessible, 
                        reliable, and cost-effective renewable energy solutions that contribute 
                        to a sustainable future for all.
                      </p>
                      <p>
                        We are committed to reducing carbon emissions, promoting energy independence, 
                        and creating economic opportunities through innovative clean energy technologies.
                      </p>
                    </Card.Body>
                  </Card>
                </Tab>
                <Tab eventKey="vision" title="Our Vision">
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="text-primary mb-3">Our Vision</h4>
                      <p>
                        To be India's leading renewable energy company, recognized for excellence 
                        in innovation, sustainability, and customer satisfaction.
                      </p>
                      <p>
                        We envision a future where clean energy is the primary source of power, 
                        contributing to a healthier environment and sustainable economic growth 
                        for generations to come.
                      </p>
                    </Card.Body>
                  </Card>
                </Tab>
                <Tab eventKey="goals" title="Our Goals">
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h4 className="text-primary mb-3">Our Goals</h4>
                      <ul>
                        <li className="mb-2">Deploy 100+ MW of renewable energy capacity by 2026</li>
                        <li className="mb-2">Achieve 99% customer satisfaction across all projects</li>
                        <li className="mb-2">Expand operations to 10+ states across India</li>
                        <li className="mb-2">Train and employ 500+ renewable energy professionals</li>
                        <li className="mb-2">Contribute to India's net-zero emissions goal by 2070</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                The principles that guide everything we do
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <Card className="service-card text-center h-100">
                <Card.Body>
                  <div className="service-icon mb-3">
                    <i className="fas fa-leaf text-primary" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <Card.Title as="h4" className="h5">Sustainability</Card.Title>
                  <Card.Text>
                    Environmental stewardship through clean energy solutions that protect 
                    our planet for future generations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="service-card text-center h-100">
                <Card.Body>
                  <div className="service-icon mb-3">
                    <i className="fas fa-lightbulb text-primary" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <Card.Title as="h4" className="h5">Innovation</Card.Title>
                  <Card.Text>
                    Cutting-edge technology and creative solutions to make renewable 
                    energy more efficient and accessible.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="service-card text-center h-100">
                <Card.Body>
                  <div className="service-icon mb-3">
                    <i className="fas fa-handshake text-primary" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <Card.Title as="h4" className="h5">Reliability</Card.Title>
                  <Card.Text>
                    Dependable service, quality installations, and long-term partnerships 
                    built on trust and performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="service-card text-center h-100">
                <Card.Body>
                  <div className="service-icon mb-3">
                    <i className="fas fa-star text-primary" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <Card.Title as="h4" className="h5">Excellence</Card.Title>
                  <Card.Text>
                    Commitment to the highest standards in every aspect of our work, 
                    from design to installation to service.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
              <p className="section-subtitle">
                Meet the experts driving India's renewable energy revolution
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {teamMembers.map((member) => (
              <Col lg={4} md={6} key={member.id} className="mb-4">
                <Card className="team-card">
                  <Card.Body>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="team-image"
                    />
                    <Card.Title as="h4">{member.name}</Card.Title>
                    <Card.Text className="text-primary fw-semibold mb-3">{member.position}</Card.Text>
                    <Card.Text className="mb-3">{member.description}</Card.Text>
                    
                    <div className="mb-3">
                      <small className="text-muted d-block mb-2">Qualifications:</small>
                      <ul className="list-unstyled">
                        {member.qualifications.map((qual, index) => (
                          <li key={index} className="small mb-1">• {qual}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="d-flex justify-content-center gap-3">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        <FaLinkedin className="me-1" /> LinkedIn
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        <FaEnvelope className="me-1" /> Email
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose REIN */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title text-white">Why Choose REIN?</h2>
              <p className="section-subtitle text-white">
                Your trusted partner for renewable energy transformation
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-certificate text-secondary mb-3" style={{ fontSize: '3rem' }}></i>
                <h5>Certified Expertise</h5>
                <p>
                  Our team holds industry certifications and has extensive experience 
                  in renewable energy system design and installation.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-tools text-secondary mb-3" style={{ fontSize: '3rem' }}></i>
                <h5>End-to-End Solutions</h5>
                <p>
                  From initial consultation to maintenance, we provide comprehensive 
                  services for all your renewable energy needs.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="text-center">
                <i className="fas fa-heart text-secondary mb-3" style={{ fontSize: '3rem' }}></i>
                <h5>Customer-Centric</h5>
                <p>
                  We prioritize customer satisfaction with personalized service, 
                  transparent communication, and ongoing support.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;