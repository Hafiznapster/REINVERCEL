import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <div className="mb-2">
            <span className="badge bg-success px-3 py-2">ABOUT US</span>
          </div>
          <h2 className="display-5 fw-bold mb-3">
            Leading the <span style={{ color: '#336021' }}>Renewable Energy</span> Revolution
          </h2>
        </div>
        
        <div className="row">
          <div className="col-lg-8 col-md-7 mb-4">
            <div className="pe-lg-4">
              <p className="lead">
                At REIN, we are dedicated to shaping a cleaner and more sustainable future through the power of 
                renewable energy. With a passion for excellence and innovation, our team provides comprehensive 
                solutions that empower individuals, businesses, and communities to embrace a greener way of life 
                while enjoying significant cost savings.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-users fa-3x" style={{ color: '#336021' }}></i>
                </div>
                <h4 className="fw-bold mb-3">Our Expert Team</h4>
                <p className="text-muted">Dedicated professionals working towards a sustainable future</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <i className="fas fa-bullseye fa-2x" style={{ color: '#336021' }}></i>
                  </div>
                  <h4 className="fw-bold mb-0">Our Mission</h4>
                </div>
                <p className="text-muted">
                  To accelerate the global transition to sustainable energy through innovative solutions 
                  and cutting-edge technology that makes renewable energy accessible and affordable for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <i className="fas fa-eye fa-2x" style={{ color: '#336021' }}></i>
                  </div>
                  <h4 className="fw-bold mb-0">Our Vision</h4>
                </div>
                <p className="text-muted">
                  A world powered by clean, renewable energy that is accessible and affordable for everyone, 
                  creating a sustainable future for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;