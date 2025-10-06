import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card fade-in h-100">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={project.image} 
          alt={project.title}
          className="project-image"
        />
        <div className="position-absolute top-0 end-0 m-3">
          <span className="badge bg-secondary fs-6">{project.type}</span>
        </div>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h4" className="h5">{project.title}</Card.Title>
        <Card.Text className="flex-grow-1">{project.description}</Card.Text>
        
        <div className="project-stats mb-3">
          {project.stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="d-flex align-items-center mb-2">
                <IconComponent className="text-primary me-2" />
                <small className="text-muted me-2">{stat.label}:</small>
                <span className="fw-semibold">{stat.value}</span>
              </div>
            );
          })}
        </div>
        
        <Link to={`/projects/${project.id}`} className="btn btn-outline-primary">
          View Project <FaArrowRight className="ms-2" />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;