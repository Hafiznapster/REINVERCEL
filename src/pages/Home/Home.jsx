import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCogs, FaPhone, FaLeaf, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa';
import HeroSection from '../../components/Hero/HeroSection';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { companyInfo } from '../../data/companyInfo';
import { services } from '../../data/services';
import { teamMembers } from '../../data/teamMembers';

const Home = () => {
  const heroButtons = [
    { text: 'Our Services', link: '/services', variant: 'primary', icon: FaCogs },
    { text: "Let's Talk", link: '/contact', variant: 'outline-light', icon: FaPhone }
  ];

  const values = [
    {
      icon: FaLeaf,
      title: 'Sustainability',
      description: 'Committed to environmental protection through clean energy solutions'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Cutting-edge technology and innovative approaches to renewable energy'
    },
    {
      icon: FaUsers,
      title: 'Reliability',
      description: 'Dependable service and long-term partnerships with our clients'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Highest quality standards in every project we undertake'
    }
  ];

  return (
    <div>
      <HeroSection
        title="Powering a <br><span class='text-secondary'>Sustainable Future</span><br>with Clean Energy"
        subtitle="Leading renewable energy solutions provider in India, specializing in solar, wind, and sustainable energy systems for a greener tomorrow."
        buttons={heroButtons}
      />

      {/* Statistics Section */}
      <section className="stats-section">
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="stat-item fade-in">
                <div className="stat-number">{companyInfo.statistics.projects}</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="stat-item fade-in">
                <div className="stat-number">{companyInfo.statistics.experience}</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="stat-item fade-in">
                <div className="stat-number">{companyInfo.statistics.satisfaction}</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="stat-item fade-in">
                <div className="stat-number">{companyInfo.statistics.cleanEnergy}</div>
                <div className="stat-label">Clean Energy</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                Guiding principles that drive our commitment to renewable energy excellence
              </p>
            </Col>
          </Row>
          <Row>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Col lg={3} md={6} key={index} className="mb-4">
                  <Card className="service-card text-center">
                    <Card.Body>
                      <div className="service-icon mb-3">
                        <IconComponent size={48} />
                      </div>
                      <Card.Title as="h4" className="h5">{value.title}</Card.Title>
                      <Card.Text>{value.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* About Preview Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title text-start">About REIN</h2>
              <p className="lead">
                Revolution Energy India (REIN) is at the forefront of the renewable energy revolution, 
                providing comprehensive clean energy solutions across India.
              </p>
              <p>
                With expertise in solar, wind, and hybrid energy systems, we're committed to helping 
                businesses and communities transition to sustainable energy sources while reducing costs 
                and environmental impact.
              </p>
              <Button as={Link} to="/about" variant="primary" size="lg">
                Learn More About Us
              </Button>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.pexels.com/photos/9875431/pexels-photo-9875431.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Solar Energy Solutions" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Comprehensive renewable energy solutions tailored to your needs
              </p>
            </Col>
          </Row>
          <Row>
            {services.slice(0, 3).map((service, index) => (
              <Col lg={4} md={6} key={service.id} className="mb-4">
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center">
              <Button as={Link} to="/services" variant="outline-primary" size="lg">
                View All Services
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Leader Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Meet Our Director</h2>
              <p className="section-subtitle">
                Leading REIN with expertise and vision for a sustainable future
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <Card className="team-card">
                <Card.Body>
                  <img 
                    src={teamMembers[0].image} 
                    alt={teamMembers[0].name}
                    className="team-image"
                  />
                  <Card.Title as="h4">{teamMembers[0].name}</Card.Title>
                  <Card.Text className="text-primary fw-semibold">{teamMembers[0].position}</Card.Text>
                  <Card.Text>{teamMembers[0].description}</Card.Text>
                  <div className="social-links">
                    <a href={teamMembers[0].linkedin} target="_blank" rel="noopener noreferrer" className="me-3">
                      LinkedIn Profile
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose REIN Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title text-white">Why Choose REIN?</h2>
              <p className="section-subtitle text-white">
                Your trusted partner for renewable energy solutions
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <FaLeaf size={48} className="text-secondary mb-3" />
                <h5>Eco-Friendly Solutions</h5>
                <p className="mb-0">100% clean energy systems with minimal environmental impact</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <FaUsers size={48} className="text-secondary mb-3" />
                <h5>Expert Consultation</h5>
                <p className="mb-0">Professional guidance from industry experts throughout your project</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <FaCogs size={48} className="text-secondary mb-3" />
                <h5>Custom Solutions</h5>
                <p className="mb-0">Tailored renewable energy systems designed for your specific needs</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <FaAward size={48} className="text-secondary mb-3" />
                <h5>Quality Assurance</h5>
                <p className="mb-0">Premium equipment and professional installation with warranties</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;