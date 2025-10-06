import React from 'react';
import { Link } from 'react-router-dom';

const MaintenanceServicingPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Enhanced Hero Section */}
      <header className="py-5" style={{ 
        background: 'linear-gradient(135deg, #336021 0%, #4a7c59 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-white">
              <div className="mb-3">
                <span className="badge bg-light text-dark px-4 py-2 rounded-pill">Our Servicing Solutions</span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Comprehensive <span className="text-warning">Maintenance Services</span>
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                Expert maintenance and servicing to ensure the optimal performance of your renewable energy systems 
                with cutting-edge technology and professional expertise.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="#services" className="btn btn-warning btn-lg">
                  <i className="fas fa-tools me-2"></i>Our Services
                </a>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-calendar-check me-2"></i>Schedule Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Service Overview */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  Professional Excellence
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Expert <span style={{ color: '#336021' }}>Maintenance Services</span>
              </h2>
              <p className="lead mb-4">
                At REIN, our commitment to renewable energy extends beyond project completion. We provide expert 
                maintenance and servicing to ensure the optimal performance of your solar panel system with 
                industry-leading standards and cutting-edge technology.
              </p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="card border-0 shadow-sm text-center p-3">
                    <div className="h3 fw-bold mb-1" style={{ color: '#336021' }}>99%</div>
                    <div className="small">Uptime Rate</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card border-0 shadow-sm text-center p-3">
                    <div className="h3 fw-bold mb-1" style={{ color: '#336021' }}>24/7</div>
                    <div className="small">Support</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src="/images/maintenance.jpg" 
                  alt="Solar Maintenance Services" 
                  className="img-fluid rounded shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-100 bg-light rounded shadow-lg d-flex align-items-center justify-content-center" 
                  style={{ display: 'none', height: '300px' }}
                >
                  <i className="fas fa-tools fa-4x" style={{ color: '#336021' }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Key Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  Core Services
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Our <span style={{ color: '#336021' }}>Maintenance Solutions</span>
              </h2>
              <p className="lead">
                Comprehensive maintenance services designed to maximize your renewable energy system's performance and longevity.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-calendar-check fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Routine Maintenance</h4>
                  <p className="mb-4">
                    Regular maintenance is essential to keep your solar panels operating at peak performance. Our team 
                    of trained technicians conducts thorough inspections to identify any issues or potential concerns. 
                    From cleaning the panels to checking electrical connections and monitoring system performance, we 
                    ensure that your solar array remains in optimal condition year-round.
                  </p>
                  <Link to="/contact" className="btn btn-outline-success">
                    <i className="fas fa-arrow-right me-2"></i>Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#ffc107' }}>
                    <i className="fas fa-stethoscope fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Diagnostic Checks</h4>
                  <p className="mb-4">
                    In the event of system malfunctions or performance fluctuations, our diagnostic checks provide a 
                    detailed analysis of your solar panel system. Utilizing advanced tools and techniques, we pinpoint 
                    the root cause of any issues and recommend appropriate solutions to restore optimal functionality.
                  </p>
                  <Link to="/contact" className="btn btn-outline-success">
                    <i className="fas fa-arrow-right me-2"></i>Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-wrench fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Repairs & Replacements</h4>
                  <p className="mb-4">
                    In cases where repairs or component replacements are necessary, our skilled technicians are equipped 
                    to handle a wide range of issues. Whether it's replacing damaged panels, repairing inverters, or 
                    addressing wiring issues, we prioritize efficiency and quality craftsmanship.
                  </p>
                  <Link to="/contact" className="btn btn-outline-success">
                    <i className="fas fa-arrow-right me-2"></i>Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  Enhancing Your Solar System
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Additional <span style={{ color: '#336021' }}>Services</span>
              </h2>
              <p className="lead">
                We offer additional services to optimize your solar panel system's performance and ensure you get 
                the most out of your renewable energy investment.
              </p>
            </div>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#ffc107' }}>
                    <i className="fas fa-chart-line fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Performance Optimization</h4>
                  <p>
                    As technology evolves and energy needs change, our team remains committed to optimizing the performance 
                    of your solar panel system. We stay abreast of the latest advancements and best practices in renewable 
                    energy to recommend upgrades or enhancements that improve efficiency, reliability, and overall system performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-headset fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Client Support</h4>
                  <p>
                    At REIN, exceptional customer service is at the core of everything we do. Our dedicated support team 
                    is available to address any questions or concerns you may have regarding your solar panel system. 
                    Whether it's troubleshooting issues, scheduling maintenance appointments, or providing guidance on 
                    maximizing energy savings, we're here to support you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Guarantee Section */}
      <section className="py-5" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center text-white">
              <div className="mb-3">
                <span className="badge bg-light text-dark px-3 py-2">Long-Term Partnership</span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Our <span className="text-warning">Guarantee</span>
              </h2>
              <p className="lead mb-4">
                We're committed to supporting your renewable energy journey for the long term.
              </p>
              <div className="mb-4">
                <h4 className="mb-4">Our Commitment to You:</h4>
                <p className="mb-4">
                  As our partner, you can rest easy knowing that when we complete a project we are not going to walk away. 
                  We have an in-house team of qualified experts who have the skills and knowledge to ensure your renewable 
                  energy equipment stays running long after initial commissioning.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-calendar-alt me-3 fa-lg"></i>
                      <span>Get in touch to secure your maintenance plan for 2, 5 or 10 years!</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-search me-3 fa-lg"></i>
                      <span>If you have an existing system and want to know if it is running in optimal condition? Please get in touch to schedule a review with our maintenance team.</span>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-warning btn-lg">
                  <i className="fas fa-calendar-check me-2"></i>Schedule a Maintenance Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceServicingPage;