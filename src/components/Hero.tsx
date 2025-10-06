import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section position-relative" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      {/* Video Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -2 }}>
        <video autoPlay muted loop playsInline className="w-100 h-100" style={{ objectFit: 'cover' }}>
          <source src="/images/18.webm" type="video/webm" />
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1744&q=80" 
            alt="Solar Panels Background" 
            className="w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        </video>
      </div>
      
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: -1 }}></div>
      
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 col-md-8">
            <div className="hero-content text-white">
              <div className="mb-3">
                <span className="badge bg-success px-3 py-2">SUSTAINABLE ENERGY SOLUTIONS</span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Powering a <span style={{ color: '#e68c3a' }}>Sustainable</span><br />
                Future with <span style={{ color: '#e68c3a' }}>Clean Energy</span>
              </h1>
              <p className="lead mb-4">
                Harness the power of renewable energy to reduce your carbon footprint and save on energy costs 
                with our innovative solar, wind, and sustainable energy solutions.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#services" className="btn btn-success btn-lg">
                  <i className="fas fa-cogs me-2"></i>Our Services
                </a>
                <a href="/quote" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-calculator me-2"></i>Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;