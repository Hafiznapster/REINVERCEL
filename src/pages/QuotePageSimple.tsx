import React from 'react';
import QuoteForm from '../components/QuoteForm';

const QuotePageSimple: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Simple Hero Section */}
      <section className="py-5" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-white">
              <h1 className="display-4 fw-bold mb-4">Get Your Free Solar Quote</h1>
              <p className="lead mb-4">Professional solar solutions for your home</p>
              <a href="#quote-form" className="btn btn-warning btn-lg">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Benefits */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 mb-5">
              <h2 className="fw-bold">Why Choose Solar?</h2>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-dollar-sign text-success fs-1 mb-3"></i>
              <h4>Save Money</h4>
              <p>Reduce electricity bills by up to 90%</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-leaf text-success fs-1 mb-3"></i>
              <h4>Go Green</h4>
              <p>Reduce your carbon footprint</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-home text-success fs-1 mb-3"></i>
              <h4>Increase Value</h4>
              <p>Boost your property value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-12 mb-5">
              <h2 className="fw-bold">Our Process</h2>
            </div>
            <div className="col-md-3 mb-4">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '60px', height: '60px' }}>
                1
              </div>
              <h5>Get Quote</h5>
              <p>Fill out our form</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '60px', height: '60px' }}>
                2
              </div>
              <h5>Assessment</h5>
              <p>Site evaluation</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '60px', height: '60px' }}>
                3
              </div>
              <h5>Design</h5>
              <p>Custom solution</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '60px', height: '60px' }}>
                4
              </div>
              <h5>Install</h5>
              <p>Professional setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-bold mb-4">Ready to Start?</h2>
              <a href="#quote-form" className="btn btn-success btn-lg me-3">
                Get Quote
              </a>
              <a href="tel:9633126288" className="btn btn-outline-success btn-lg">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePageSimple;