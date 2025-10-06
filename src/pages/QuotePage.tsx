import React from 'react';
import QuoteForm from '../components/QuoteForm';

const QuotePage: React.FC = () => {
  // Add scroll debugging
  React.useEffect(() => {
    // Ensure body can scroll
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    // Remove any height restrictions
    document.body.style.height = 'auto';
    document.documentElement.style.height = 'auto';
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="quote-page-container" style={{ minHeight: 'auto', height: 'auto' }}>
      {/* Hero Section */}
      <section className="position-relative" style={{ paddingTop: '100px', paddingBottom: '80px', backgroundColor: '#336021' }}>
        {/* Background Pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1 }}>
          <div className="position-absolute" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>

        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-white pe-lg-5">
                <div className="mb-3">
                  <span className="badge bg-light text-success px-3 py-2 fw-semibold">FREE SOLAR QUOTE</span>
                </div>
                <h1 className="display-3 fw-bold mb-4">
                  Get Your <span className="text-warning">Free</span><br />
                  Solar Quote Today
                </h1>
                <p className="lead mb-5 opacity-90">
                  Take the first step towards energy independence. Our experts will provide you with a 
                  personalized solar solution tailored to your home and energy needs.
                </p>
                
                <div className="row g-3 mb-5">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="bg-white bg-opacity-20 rounded-circle p-2 me-3 flex-shrink-0">
                        <i className="fas fa-check text-white"></i>
                      </div>
                      <span className="fw-semibold">Free Consultation</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="bg-white bg-opacity-20 rounded-circle p-2 me-3 flex-shrink-0">
                        <i className="fas fa-check text-white"></i>
                      </div>
                      <span className="fw-semibold">Custom Design</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="bg-white bg-opacity-20 rounded-circle p-2 me-3 flex-shrink-0">
                        <i className="fas fa-check text-white"></i>
                      </div>
                      <span className="fw-semibold">Professional Installation</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="bg-white bg-opacity-20 rounded-circle p-2 me-3 flex-shrink-0">
                        <i className="fas fa-check text-white"></i>
                      </div>
                      <span className="fw-semibold">25-Year Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  <a href="#quote-form" className="btn btn-warning btn-lg px-4 py-3 fw-semibold">
                    <i className="fas fa-calculator me-2"></i>Get Free Quote
                  </a>
                  <a href="tel:9633126288" className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold">
                    <i className="fas fa-phone me-2"></i>Call Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div className="position-relative">
                  <div className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" 
                       style={{ width: '200px', height: '200px' }}>
                    <i className="fas fa-solar-panel text-white" style={{ fontSize: '5rem' }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 fw-semibold">WHY CHOOSE SOLAR</span>
              </div>
              <h2 className="display-5 fw-bold mb-4">Transform Your Energy Future</h2>
              <p className="lead text-muted">
                Discover the life-changing benefits of switching to clean, renewable solar energy
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="text-center h-100">
                <div className="card border-0 shadow-sm h-100 hover-lift">
                  <div className="card-body p-4">
                    <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                         style={{ width: '80px', height: '80px' }}>
                      <i className="fas fa-dollar-sign text-success fs-2"></i>
                    </div>
                    <h4 className="fw-bold mb-3 text-success">Save Money</h4>
                    <p className="text-muted mb-4">
                      Reduce your electricity bills by up to 90% and protect yourself from rising energy costs with solar power.
                    </p>
                    <div className="bg-light rounded p-3">
                      <small className="text-muted fw-semibold">Average Savings: ₹50,000+ per year</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center h-100">
                <div className="card border-0 shadow-sm h-100 hover-lift">
                  <div className="card-body p-4">
                    <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                         style={{ width: '80px', height: '80px' }}>
                      <i className="fas fa-leaf text-success fs-2"></i>
                    </div>
                    <h4 className="fw-bold mb-3 text-success">Go Green</h4>
                    <p className="text-muted mb-4">
                      Reduce your carbon footprint and contribute to a cleaner, more sustainable future for generations.
                    </p>
                    <div className="bg-light rounded p-3">
                      <small className="text-muted fw-semibold">Reduce CO₂: 4+ tons per year</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center h-100">
                <div className="card border-0 shadow-sm h-100 hover-lift">
                  <div className="card-body p-4">
                    <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                         style={{ width: '80px', height: '80px' }}>
                      <i className="fas fa-home text-success fs-2"></i>
                    </div>
                    <h4 className="fw-bold mb-3 text-success">Increase Value</h4>
                    <p className="text-muted mb-4">
                      Solar panels can increase your property value by up to 4% according to recent studies.
                    </p>
                    <div className="bg-light rounded p-3">
                      <small className="text-muted fw-semibold">Property Value: +4% increase</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 fw-semibold">OUR PROCESS</span>
              </div>
              <h2 className="display-5 fw-bold mb-4">Simple 4-Step Process</h2>
              <p className="lead text-muted">
                From quote to installation, we make going solar easy and hassle-free
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="position-relative mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-3" 
                       style={{ width: '80px', height: '80px', fontSize: '1.5rem' }}>
                    1
                  </div>
                  <div className="position-absolute top-50 start-100 translate-middle-y d-none d-lg-block" 
                       style={{ width: '100px', height: '2px', backgroundColor: '#dee2e6' }}></div>
                </div>
                <h5 className="fw-bold mb-3">Get Quote</h5>
                <p className="text-muted">Fill out our simple form to receive your personalized solar quote within 24 hours</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="position-relative mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-3" 
                       style={{ width: '80px', height: '80px', fontSize: '1.5rem' }}>
                    2
                  </div>
                  <div className="position-absolute top-50 start-100 translate-middle-y d-none d-lg-block" 
                       style={{ width: '100px', height: '2px', backgroundColor: '#dee2e6' }}></div>
                </div>
                <h5 className="fw-bold mb-3">Site Assessment</h5>
                <p className="text-muted">Our certified experts visit your property for detailed evaluation and measurements</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="position-relative mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-3" 
                       style={{ width: '80px', height: '80px', fontSize: '1.5rem' }}>
                    3
                  </div>
                  <div className="position-absolute top-50 start-100 translate-middle-y d-none d-lg-block" 
                       style={{ width: '100px', height: '2px', backgroundColor: '#dee2e6' }}></div>
                </div>
                <h5 className="fw-bold mb-3">Custom Design</h5>
                <p className="text-muted">We create a tailored solar solution optimized for your home and energy needs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-3" 
                       style={{ width: '80px', height: '80px', fontSize: '1.5rem' }}>
                    4
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Installation</h5>
                <p className="text-muted">Professional installation and system activation with comprehensive warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Start Saving?</h2>
              <p className="lead text-muted mb-5">
                Join thousands of satisfied customers who have made the switch to clean, affordable solar energy.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="#quote-form" className="btn btn-success btn-lg px-5 py-3 fw-semibold">
                  <i className="fas fa-calculator me-2"></i>Get Your Free Quote
                </a>
                <a href="tel:9633126288" className="btn btn-outline-success btn-lg px-5 py-3 fw-semibold">
                  <i className="fas fa-phone me-2"></i>Call: 9633126288
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;