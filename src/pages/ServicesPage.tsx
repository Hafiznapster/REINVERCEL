import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Page Header */}
      <header className="py-5" style={{ 
        background: 'linear-gradient(135deg, #336021 0%, #4a7c59 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-white">
              <h1 className="display-3 fw-bold mb-4">Our Services</h1>
              <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                Comprehensive renewable energy solutions tailored to meet your specific needs and requirements.
              </p>
              <div className="d-flex justify-content-center align-items-center my-4">
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
                <div className="mx-3" style={{ color: '#ffc107' }}>
                  <i className="fas fa-cogs fa-2x"></i>
                </div>
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  What We Offer
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Complete <span style={{ color: '#336021' }}>Renewable Energy</span> Solutions
              </h2>
              <p className="lead">
                From initial consultation to ongoing maintenance, we provide end-to-end renewable energy 
                services that help you achieve energy independence and sustainability goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 stagger-animation">
            {/* Solar Energy Services */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body p-5">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-solar-panel fa-3x"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-3">Solar Energy Solutions</h3>
                  <p className="card-text mb-4">
                    Complete solar installation services including rooftop solar systems, ground-mounted 
                    installations, and solar battery storage solutions for residential, commercial, and 
                    industrial applications.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Rooftop Solar Installation
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Ground-Mounted Systems
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Solar Battery Storage
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Grid-Tie & Off-Grid Systems
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>EV Charging Integration
                    </li>
                  </ul>
                  <Link to="/services/solar-battery-ev" className="btn" style={{ backgroundColor: '#336021', color: 'white' }}>
                    <i className="fas fa-arrow-right me-2"></i>Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Wind Energy Services */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body p-5">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-wind fa-3x"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-3">Wind Energy Solutions</h3>
                  <p className="card-text mb-4">
                    Professional wind turbine installation and maintenance services for both commercial 
                    and residential applications, helping you harness the power of wind for clean energy 
                    generation.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Wind Resource Assessment
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Turbine Installation
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Grid Connection
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Performance Monitoring
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Maintenance Services
                    </li>
                  </ul>
                  <Link to="/services/wind-energy" className="btn" style={{ backgroundColor: '#336021', color: 'white' }}>
                    <i className="fas fa-arrow-right me-2"></i>Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Design & Consultancy */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body p-5">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-drafting-compass fa-3x"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-3">Design & Consultancy</h3>
                  <p className="card-text mb-4">
                    Expert design and consultancy services for renewable energy projects of all scales. 
                    Our experienced team provides comprehensive planning and engineering solutions.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Feasibility Studies
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>System Design
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Engineering Services
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Project Management
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Regulatory Compliance
                    </li>
                  </ul>
                  <Link to="/services/design-consultancy" className="btn" style={{ backgroundColor: '#336021', color: 'white' }}>
                    <i className="fas fa-arrow-right me-2"></i>Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Energy Audit & Monitoring */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body p-5">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-chart-line fa-3x"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-3">Energy Audit, Monitoring & Management</h3>
                  <p className="card-text mb-4">
                    Comprehensive energy services designed to optimize your energy consumption, reduce costs, 
                    and promote sustainability through expert audit, monitoring, and management solutions.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Energy Audit Services
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Real-time Energy Monitoring
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Energy Management Systems
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Cost Reduction Strategies
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Performance Optimization
                    </li>
                  </ul>
                  <Link to="/services/energy-audit" className="btn" style={{ backgroundColor: '#336021', color: 'white' }}>
                    <i className="fas fa-arrow-right me-2"></i>Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Servicing & Maintenance */}
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body p-5">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-tools fa-3x"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-3">Servicing & Maintenance</h3>
                  <p className="card-text mb-4">
                    Regular maintenance, repair, and optimization services for all your renewable energy 
                    systems to ensure peak performance and longevity.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Preventive Maintenance
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>System Repairs
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Performance Optimization
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>Component Replacement
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>24/7 Emergency Support
                    </li>
                  </ul>
                  <Link to="/services/maintenance-servicing" className="btn" style={{ backgroundColor: '#336021', color: 'white' }}>
                    <i className="fas fa-arrow-right me-2"></i>Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-6 fw-bold mb-4">
                Additional <span style={{ color: '#336021' }}>Services</span>
              </h2>
              <p className="lead">
                Supporting services to ensure your renewable energy systems operate at peak performance.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="text-center">
                <div className="mb-4" style={{ color: '#336021' }}>
                  <i className="fas fa-tools fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">Maintenance & Support</h4>
                <p className="mb-4">
                  Regular maintenance services to ensure optimal performance and longevity of your 
                  renewable energy systems.
                </p>
                <Link to="/services/maintenance-servicing" className="btn btn-outline-success">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="text-center">
                <div className="mb-4" style={{ color: '#336021' }}>
                  <i className="fas fa-car-battery fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">EV Charging Solutions</h4>
                <p className="mb-4">
                  Electric vehicle charging station installation and integration with renewable energy systems.
                </p>
                <Link to="/services/solar-battery-ev" className="btn btn-outline-success">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="text-center">
                <div className="mb-4" style={{ color: '#336021' }}>
                  <i className="fas fa-certificate fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">Certification & Compliance</h4>
                <p className="mb-4">
                  Assistance with regulatory compliance, certifications, and government incentive applications.
                </p>
                <Link to="/contact" className="btn btn-outline-success">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-white">
              <h2 className="display-6 fw-bold mb-3">Ready to Get Started?</h2>
              <p className="lead mb-0">
                Contact our experts today to discuss your renewable energy needs and get a customized 
                solution for your project.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/contact" className="btn btn-warning btn-lg">
                <i className="fas fa-phone me-2"></i>Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;