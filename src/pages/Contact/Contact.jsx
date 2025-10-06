import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCopy } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm/ContactForm';
import { companyInfo } from '../../data/companyInfo';

const Contact = () => {
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead mb-4">
                Ready to start your renewable energy journey? Get in touch with our 
                experts for a free consultation and personalized quote.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mb-4">
              <Card className="shadow-sm">
                <Card.Header>
                  <h3 className="h4 mb-0">Send us a message</h3>
                </Card.Header>
                <Card.Body className="p-4">
                  <ContactForm />
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              {/* Contact Information */}
              <Card className="mb-4 shadow-sm">
                <Card.Header>
                  <h4 className="h5 mb-0">Contact Information</h4>
                </Card.Header>
                <Card.Body>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <FaPhone className="text-primary me-2" />
                      <strong>Phone</strong>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>{companyInfo.phone}</span>
                      <Button 
                        variant="outline-secondary" 
                        size="sm"
                        onClick={() => handleCopyToClipboard(companyInfo.phone)}
                      >
                        <FaCopy />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <FaEnvelope className="text-primary me-2" />
                      <strong>Email</strong>
                    </div>
                    {companyInfo.emails.map((email, index) => (
                      <div key={index} className="d-flex align-items-center justify-content-between mb-1">
                        <a href={`mailto:${email}`} className="text-decoration-none">
                          {email}
                        </a>
                        <Button 
                          variant="outline-secondary" 
                          size="sm"
                          onClick={() => handleCopyToClipboard(email)}
                        >
                          <FaCopy />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <FaMapMarkerAlt className="text-primary me-2" />
                      <strong>Address</strong>
                    </div>
                    <p className="mb-0 small">{companyInfo.address}</p>
                  </div>
                </Card.Body>
              </Card>

              {/* Business Hours */}
              <Card className="mb-4 shadow-sm">
                <Card.Header>
                  <h4 className="h5 mb-0">Business Hours</h4>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </Card.Body>
              </Card>

              {/* Response Time */}
              <Card className="bg-success text-white">
                <Card.Body>
                  <h5>Quick Response</h5>
                  <p className="mb-0">
                    We typically respond to inquiries within 2-4 hours during 
                    business hours. Emergency support available 24/7.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-4">
              <h2 className="section-title">Find Us</h2>
              <p className="section-subtitle">
                Visit our office in Chennai for in-person consultations
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="ratio ratio-21x9 rounded shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.048049457813!2d80.24061431482166!3d12.969184190862845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9c0a5b3b0b%3A0x1a1a1a1a1a1a1a1a!2sPerungudi%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="REIN Office Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Common questions about our renewable energy services
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title as="h5">How long does installation take?</Card.Title>
                  <Card.Text>
                    Most residential installations are completed within 1-3 days, 
                    while commercial projects may take 1-2 weeks depending on size and complexity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title as="h5">What grants are available?</Card.Title>
                  <Card.Text>
                    Various SEAI grants are available for solar installations, ranging from 
                    €900-€2400 for residential systems and up to 30% for commercial projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title as="h5">Do you provide maintenance?</Card.Title>
                  <Card.Text>
                    Yes, we offer comprehensive maintenance packages including regular 
                    inspections, cleaning, and performance monitoring to ensure optimal system performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title as="h5">What's the typical payback period?</Card.Title>
                  <Card.Text>
                    Most solar installations pay for themselves within 3-7 years through 
                    energy savings, grants, and feed-in tariffs, then provide free electricity for 20+ years.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;