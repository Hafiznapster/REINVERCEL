import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyNotification, setCopyNotification] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration with your actual credentials
      const result = await emailjs.send(
        'service_ynplrof',     // Your EmailJS service ID
        'template_qz7myg9',    // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        'wvDuNJnsPNn0OFV-A'   // Your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setShowSuccessModal(true);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Auto-hide success modal after 5 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setShowErrorModal(true);
      
      // Auto-hide error modal after 5 seconds
      setTimeout(() => {
        setShowErrorModal(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyNumber = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopyNotification('Phone number copied!');
      setTimeout(() => setCopyNotification(''), 3000);
    } catch (error) {
      setCopyNotification('Failed to copy number');
      setTimeout(() => setCopyNotification(''), 3000);
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      {/* Success Modal Popup */}
      {showSuccessModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-body text-center p-5">
                <div className="mb-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '80px', height: '80px', backgroundColor: '#336021' }}>
                    <i className="fas fa-check text-white fa-2x"></i>
                  </div>
                  <h3 className="fw-bold mb-3" style={{ color: '#336021' }}>Message Sent Successfully!</h3>
                  <p className="lead mb-4">
                    Thank you for contacting REIN! We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <button 
                      className="btn btn-success"
                      onClick={() => setShowSuccessModal(false)}
                    >
                      <i className="fas fa-thumbs-up me-2"></i>Great!
                    </button>
                    <button 
                      className="btn btn-outline-success"
                      onClick={() => setShowSuccessModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal Popup */}
      {showErrorModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-body text-center p-5">
                <div className="mb-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '80px', height: '80px', backgroundColor: '#dc3545' }}>
                    <i className="fas fa-exclamation-triangle text-white fa-2x"></i>
                  </div>
                  <h3 className="fw-bold mb-3" style={{ color: '#dc3545' }}>Message Failed to Send</h3>
                  <p className="lead mb-4">
                    Sorry, there was an error sending your message. Please try again or contact us directly at vishnu.menon@revolutionenergyindia.in
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <button 
                      className="btn btn-danger"
                      onClick={() => setShowErrorModal(false)}
                    >
                      <i className="fas fa-times me-2"></i>Try Again
                    </button>
                    <button 
                      className="btn btn-outline-danger"
                      onClick={() => setShowErrorModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Copy Notification Toast */}
      {copyNotification && (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
          <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              <i className="fas fa-copy text-success me-2"></i>
              <strong className="me-auto">Copied!</strong>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setCopyNotification('')}
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              {copyNotification}
            </div>
          </div>
        </div>
      )}
      
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <div className="mb-2">
              <span className="badge bg-success px-3 py-2">GET IN TOUCH</span>
            </div>
            <h2 className="display-5 fw-bold mb-3">
              Ready to Switch to <span style={{ color: '#336021' }}>Clean Energy?</span>
            </h2>
            <p className="lead">
              Fill out the form below and our team will get back to you within 24 hours to discuss 
              your renewable energy needs.
            </p>
          </div>
        </div>
        
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="service" className="form-label">Service Interest</label>
                      <select
                        name="service"
                        id="service"
                        className="form-control"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="solar">Solar Installation</option>
                        <option value="wind">Wind Energy</option>
                        <option value="energy-audit">Energy Audit</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-success btn-lg w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="row g-4">
              {/* Call Us Card */}
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" 
                             style={{ width: '60px', height: '60px', backgroundColor: '#336021' }}>
                          <i className="fas fa-phone text-white fa-lg"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="fw-bold mb-2">Call Us</h4>
                        <h5 className="mb-2" style={{ color: '#336021' }}>
                          <button 
                            className="btn btn-link p-0 text-decoration-none fw-semibold"
                            style={{ color: '#336021' }}
                            onClick={() => copyNumber('9633126288')}
                          >
                            9633126288
                          </button>
                        </h5>
                        <p className="mb-0 text-muted">Click to copy number</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Email Us Card */}
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" 
                             style={{ width: '60px', height: '60px', backgroundColor: '#336021' }}>
                          <i className="fas fa-envelope text-white fa-lg"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="fw-bold mb-2">Email Us</h4>
                        <p className="mb-1">
                          <a href="mailto:vishnu.menon@revolutionenergyindia.in" 
                             className="text-decoration-none" style={{ color: '#336021' }}>
                            vishnu.menon@revolutionenergyindia.in
                          </a>
                        </p>
                        <p className="mb-0">
                          <a href="mailto:info@revolutionenergyindia.in" 
                             className="text-decoration-none" style={{ color: '#336021' }}>
                            info@revolutionenergyindia.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visit Us Card */}
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <div className="me-4">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" 
                             style={{ width: '60px', height: '60px', backgroundColor: '#336021' }}>
                          <i className="fas fa-map-marker-alt text-white fa-lg"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h4 className="fw-bold mb-2">Visit Us</h4>
                        <p className="mb-0 text-muted">
                          No 27 New, MGR Main Rd, Kandhanchavadi,<br />
                          Perungudi, Chennai, Tamil Nadu 600096, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4657686057393!2d80.24863007486515!3d13.007999714280781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a0673d1e8f%3A0x5b8f47d9b7e62f19!2sMGR%20Main%20Rd%2C%20Kandhanchavadi%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600096!5e0!3m2!1sen!2sin!4v1689321234567!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;