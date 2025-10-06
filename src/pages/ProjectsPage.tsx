import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
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
              <h1 className="display-3 fw-bold mb-4">Our Projects</h1>
              <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                Showcasing our successful renewable energy installations across India, from residential 
                rooftops to large-scale commercial projects.
              </p>
              <div className="d-flex justify-content-center align-items-center my-4">
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
                <div className="mx-3" style={{ color: '#ffc107' }}>
                  <i className="fas fa-solar-panel fa-2x"></i>
                </div>
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Projects Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div>
                  <div className="mb-2">
                    <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                      Featured Projects
                    </span>
                  </div>
                  <h2 className="display-5 fw-bold mb-0">
                    Our <span style={{ color: '#336021' }}>Success Stories</span>
                  </h2>
                </div>
                <div className="d-none d-md-block">
                  <a href="/contact" className="btn btn-outline-success btn-lg">
                    <i className="fas fa-phone me-2"></i>Get Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Project Card 1 - Monroe Solar Farm */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                  <img 
                    src="/images/monroe.webp" 
                    alt="Monroe Solar Farm" 
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-100 h-100 bg-light align-items-center justify-content-center" 
                    style={{ display: 'none' }}
                  >
                    <i className="fas fa-solar-panel fa-4x" style={{ color: '#336021' }}></i>
                  </div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ backgroundColor: '#336021', color: 'white' }}>
                      Solar Farm
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title fw-bold">Monroe Solar Farm</h4>
                  <p className="card-text">
                    A 14MW solar farm project that overcame unique terrain challenges to deliver 
                    sustainable energy to over 3,500 homes.
                  </p>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-bolt me-2" style={{ color: '#336021' }}></i>
                        <span className="small">14MW Capacity</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-home me-2" style={{ color: '#336021' }}></i>
                        <span className="small">3,500+ Homes</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/projects/monroe-solar-farm" className="text-decoration-none" style={{ color: '#336021' }}>
                    View Project <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 2 - Follain Project */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                  <img 
                    src="/images/follain.webp" 
                    alt="Follain Solar Project" 
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-100 h-100 bg-light align-items-center justify-content-center" 
                    style={{ display: 'none' }}
                  >
                    <i className="fas fa-industry fa-4x" style={{ color: '#336021' }}></i>
                  </div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ backgroundColor: '#336021', color: 'white' }}>
                      Commercial Solar
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title fw-bold">Follain Project</h4>
                  <p className="card-text">
                    A 484 kWp solar installation for a commercial facility, reducing carbon 
                    emissions by 210 tons annually.
                  </p>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-solar-panel me-2" style={{ color: '#336021' }}></i>
                        <span className="small">484 kWp</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-leaf me-2" style={{ color: '#336021' }}></i>
                        <span className="small">210 Tons CO₂ Saved</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/projects/follain-project" className="text-decoration-none" style={{ color: '#336021' }}>
                    View Project <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 3 - Denis Mahony */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                  <img 
                    src="/images/mahony.webp" 
                    alt="Denis Mahony Project" 
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-100 h-100 bg-light align-items-center justify-content-center" 
                    style={{ display: 'none' }}
                  >
                    <i className="fas fa-cog fa-4x" style={{ color: '#336021' }}></i>
                  </div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ backgroundColor: '#336021', color: 'white' }}>
                      Hybrid System
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title fw-bold">Denis Mahony</h4>
                  <p className="card-text">
                    An integrated renewable energy system producing 95 MWh annually and covering 
                    60% of the facility's energy needs.
                  </p>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-chart-line me-2" style={{ color: '#336021' }}></i>
                        <span className="small">95 MWh/Year</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-percentage me-2" style={{ color: '#336021' }}></i>
                        <span className="small">60% Coverage</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/projects/denis-mahony-project" className="text-decoration-none" style={{ color: '#336021' }}>
                    View Project <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Get Consultation Button */}
          <div className="row mt-4 d-md-none">
            <div className="col-12 text-center">
              <a href="/contact" className="btn btn-outline-success">
                <i className="fas fa-phone me-2"></i>Get Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 fw-bold" style={{ color: '#336021' }}>50+</div>
              <p className="mb-0">Projects Completed</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 fw-bold" style={{ color: '#336021' }}>2MW+</div>
              <p className="mb-0">Total Capacity Installed</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 fw-bold" style={{ color: '#336021' }}>1000+</div>
              <p className="mb-0">Tons CO2 Reduced</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 fw-bold" style={{ color: '#336021' }}>100%</div>
              <p className="mb-0">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-white">
              <h2 className="display-6 fw-bold mb-3">Ready to Start Your Project?</h2>
              <p className="lead mb-0">
                Join our growing list of satisfied customers who have made the switch to renewable energy. 
                Get a free consultation today!
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a href="/contact" className="btn btn-warning btn-lg">
                <i className="fas fa-rocket me-2"></i>Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;