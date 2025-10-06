import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/movddbga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      {submitStatus === 'success' && (
        <Alert variant="success" className="mb-4">
          <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!
        </Alert>
      )}
      {submitStatus === 'error' && (
        <Alert variant="danger" className="mb-4">
          <strong>Oops!</strong> Failed to send message. Please try again or contact us directly.
        </Alert>
      )}
      
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              {...register('name', { required: 'Name is required' })}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              {...register('phone')}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Service Interest</Form.Label>
            <Form.Select {...register('service')}>
              <option value="">Select a service</option>
              <option value="design-consultancy">Design & Consultancy</option>
              <option value="solar-battery-ev">Solar, Battery & EV</option>
              <option value="wind-energy">Wind Energy</option>
              <option value="energy-audit">Energy Audit & Monitoring</option>
              <option value="maintenance">Maintenance & Servicing</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-4">
        <Form.Label>Message *</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Tell us about your project or requirements..."
          {...register('message', { required: 'Message is required' })}
          isInvalid={!!errors.message}
        />
        <Form.Control.Feedback type="invalid">
          {errors.message?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        disabled={isSubmitting}
        className="px-4"
      >
        <FaPaperPlane className="me-2" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </Form>
  );
};

export default ContactForm;