import React from 'react';

const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: 'fas fa-leaf',
      title: 'Comprehensive Eco-friendly Energy Solutions',
      description: 'Complete renewable energy systems designed for maximum efficiency and environmental impact.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Expert Consultation and 24/7 Support',
      description: 'Professional guidance throughout your journey with round-the-clock technical support.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Up to 70% Reduction in Energy Bills',
      description: 'Significant cost savings through optimized renewable energy solutions and smart technology.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Customized Solutions for All Sectors',
      description: 'Tailored renewable energy systems for residential, commercial, and industrial applications.'
    }
  ];

  const stats = [
    { icon: 'fas fa-solar-panel', value: '20+', label: 'Projects' },
    { icon: 'fas fa-calendar-check', value: '2+', label: 'Years Exp.' },
    { icon: 'fas fa-thumbs-up', value: '98%', label: 'Satisfaction' },
    { icon: 'fas fa-leaf', value: '100%', label: 'Clean Energy' }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <div className="mb-2">
            <span className="badge bg-success px-3 py-2">WHY CHOOSE REIN</span>
          </div>
          <h2 className="display-5 fw-bold mb-3">
            Why Choose <span style={{ color: '#336021' }}>Our Solutions</span>
          </h2>
          <p className="lead text-muted">
            We combine technical expertise with a passion for sustainability to deliver exceptional results for our clients.
          </p>
        </div>
        
        <div className="row g-4 mb-5">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div className="d-flex align-items-start">
                <div className="me-3 flex-shrink-0">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ width: '60px', height: '60px', backgroundColor: '#336021' }}>
                    <i className={`${feature.icon} text-white fa-lg`}></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-6 mb-4">
            {/* Team Leader Section */}
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <img 
                      src="/images/vishnu.webp" 
                      alt="Vishnu Menon - Director" 
                      className="rounded-circle"
                      width="70" 
                      height="70"
                      loading="lazy"
                      style={{ objectFit: 'cover', aspectRatio: '1/1' }}
                    />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1">Vishnu Menon</h4>
                    <p className="text-muted mb-0">Director</p>
                  </div>
                </div>
                <blockquote className="mb-3">
                  <p className="fst-italic">
                    "Our team combines technical expertise with a passion for sustainability to deliver 
                    exceptional results for our clients."
                  </p>
                </blockquote>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge bg-success">
                    <i className="fas fa-award me-2"></i>Renewable Energy Expert
                  </span>
                  <div className="d-flex gap-2">
                    <a href="https://www.linkedin.com/in/vishnu-menon-rein/" target="_blank" 
                       className="btn btn-outline-primary btn-sm" aria-label="Connect with Vishnu Menon on LinkedIn">
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                    <a href="mailto:vishnu.menon@revolutionenergyindia.in" 
                       className="btn btn-outline-primary btn-sm" aria-label="Email Vishnu Menon">
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="row g-3">
              {stats.map((stat, index) => (
                <div key={index} className="col-6">
                  <div className="card border-0 shadow-sm text-center h-100">
                    <div className="card-body p-3">
                      <div className="mb-2">
                        <i className={`${stat.icon} fa-2x`} style={{ color: '#336021' }}></i>
                      </div>
                      <h3 className="fw-bold mb-1" style={{ color: '#336021' }}>{stat.value}</h3>
                      <p className="text-muted mb-0 small">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;