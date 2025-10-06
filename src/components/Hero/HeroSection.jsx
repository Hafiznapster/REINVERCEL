import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = ({ 
  title, 
  subtitle, 
  videoSrc = "https://videos.pexels.com/video-files/5469358/5469358-hd_1920_1080_24fps.mp4", 
  buttons = [] 
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-video-background">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} md={8}>
            <div className="hero-content">
              <div className="hero-tag fade-in">
                <span className="badge">SUSTAINABLE ENERGY SOLUTIONS</span>
              </div>
              <h1 className="hero-title fade-in" dangerouslySetInnerHTML={{ __html: title }} />
              <p className="hero-subtitle fade-in">{subtitle}</p>
              <div className="hero-buttons fade-in">
                {buttons.map((button, index) => {
                  const IconComponent = button.icon;
                  return (
                    <Button 
                      key={index}
                      as={Link} 
                      to={button.link}
                      variant={button.variant}
                      className="me-3 mb-3"
                      size="lg"
                    >
                      {IconComponent && <IconComponent className="me-2" />}
                      {button.text}
                    </Button>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;