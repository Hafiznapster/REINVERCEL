import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaMapMarkerAlt, FaCogs } from 'react-icons/fa';
import { projects } from '../../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <Container className="py-5">
        <Row>
          <Col className="text-center">
            <h2>Project not found</h2>
            <Button as={Link} to="/projects" variant="primary">
              Back to Projects
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-3 bg-light">
        <Container>
          <Row>
            <Col>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li className="breadcrumb-item active">{project.title}</li>
                </ol>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Hero */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <img 
                src={project.image} 
                alt={project.title}
                className="img-fluid rounded shadow w-100 mb-4"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </Col>
            <Col lg={4}>
              <div className="mb-3">
                <Badge bg="primary" className="fs-6">{project.type}</Badge>
              </div>
              <h1 className="display-5 fw-bold mb-3">{project.title}</h1>
              <p className="lead mb-4">{project.description}</p>
              
              {/* Key Stats */}
              <Card className="mb-4">
                <Card.Header>
                  <h4 className="h5 mb-0">Key Statistics</h4>
                </Card.Header>
                <Card.Body>
                  {project.stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="d-flex align-items-center mb-3">
                        <IconComponent className="text-primary me-3" size={20} />
                        <div>
                          <small className="text-muted d-block">{stat.label}</small>
                          <strong>{stat.value}</strong>
                        </div>
                      </div>
                    );
                  })}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Details */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8}>
              <Card className="mb-4">
                <Card.Header>
                  <h3 className="h4 mb-0">Project Overview</h3>
                </Card.Header>
                <Card.Body>
                  <p>{project.description}</p>
                  
                  {project.details && (
                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <FaMapMarkerAlt className="text-primary me-2" />
                          <strong>Location:</strong> {project.details.location}
                        </div>
                        <div className="mb-3">
                          <FaCalendar className="text-primary me-2" />
                          <strong>Completed:</strong> {project.details.completionDate}
                        </div>
                        <div className="mb-3">
                          <FaCogs className="text-primary me-2" />
                          <strong>Technology:</strong> {project.details.technology}
                        </div>
                      </Col>
                      <Col md={6}>
                        {project.details.expectedGeneration && (
                          <div className="mb-3">
                            <strong>Annual Generation:</strong> {project.details.expectedGeneration}
                          </div>
                        )}
                        {project.details.paybackPeriod && (
                          <div className="mb-3">
                            <strong>Payback Period:</strong> {project.details.paybackPeriod}
                          </div>
                        )}
                        {project.details.annualSavings && (
                          <div className="mb-3">
                            <strong>Annual Savings:</strong> {project.details.annualSavings}
                          </div>
                        )}
                      </Col>
                    </Row>
                  )}
                </Card.Body>
              </Card>

              {project.details?.environmentalImpact && (
                <Card className="mb-4">
                  <Card.Header>
                    <h3 className="h4 mb-0">Environmental Impact</h3>
                  </Card.Header>
                  <Card.Body>
                    <p>{project.details.environmentalImpact}</p>
                  </Card.Body>
                </Card>
              )}
            </Col>

            <Col lg={4}>
              {/* Technical Specs */}
              <Card className="mb-4">
                <Card.Header>
                  <h4 className="h5 mb-0">Technical Specifications</h4>
                </Card.Header>
                <Card.Body>
                  {project.details && (
                    <>
                      {project.details.inverters && (
                        <div className="mb-2">
                          <small className="text-muted">Inverters:</small>
                          <div>{project.details.inverters}</div>
                        </div>
                      )}
                      {project.details.mountingSystem && (
                        <div className="mb-2">
                          <small className="text-muted">Mounting:</small>
                          <div>{project.details.mountingSystem}</div>
                        </div>
                      )}
                      {project.details.batteryStorage && (
                        <div className="mb-2">
                          <small className="text-muted">Battery:</small>
                          <div>{project.details.batteryStorage}</div>
                        </div>
                      )}
                      {project.details.monitoring && (
                        <div className="mb-2">
                          <small className="text-muted">Monitoring:</small>
                          <div>{project.details.monitoring}</div>
                        </div>
                      )}
                    </>
                  )}
                </Card.Body>
              </Card>

              {/* Grant Information */}
              {project.details?.seiaiGrant && (
                <Card className="mb-4 bg-success text-white">
                  <Card.Body>
                    <h5>Grant Support</h5>
                    <p className="mb-0">
                      SEAI Grant Received: <strong>{project.details.seiaiGrant}</strong>
                    </p>
                  </Card.Body>
                </Card>
              )}

              {/* Contact */}
              <Card>
                <Card.Body>
                  <h5>Interested in a Similar Project?</h5>
                  <p>
                    Contact us to discuss how we can create a custom renewable 
                    energy solution for your needs.
                  </p>
                  <div className="d-grid">
                    <Button as={Link} to="/contact" variant="primary">
                      Get Quote
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Back Button */}
      <section className="py-3">
        <Container>
          <Row>
            <Col>
              <Button as={Link} to="/projects" variant="outline-primary">
                <FaArrowLeft className="me-2" />
                Back to All Projects
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProjectDetail;