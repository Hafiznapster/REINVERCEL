import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  
  return (
    <Card className="service-card fade-in h-100">
      <Card.Body className="d-flex flex-column">
        <div className="service-icon text-primary mb-3">
          <IconComponent size={48} />
        </div>
        <Card.Title as="h3" className="h4">{service.title}</Card.Title>
        <Card.Text className="flex-grow-1">{service.shortDescription}</Card.Text>
        
        {service.features && (
          <ul className="list-unstyled mb-4">
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="mb-2">
                <i className="fas fa-check text-success me-2"></i>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto">
          <Button as={Link} to={`/services/${service.id}`} variant="primary">
            <FaArrowRight className="me-2" />
            Learn More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;