import React from 'react';
import { Link } from 'react-router-dom';

const WindEnergyPage: React.FC = () => {
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
              <h1 className="display-3 fw-bold mb-4">Wind Energy</h1>
              <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                Wind turbine installation and maintenance services for residential, commercial, and industrial applications, 
                harnessing the power of wind.
              </p>
              <div className="d-flex justify-content-center align-items-center my-4">
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
                <div className="mx-3" style={{ color: '#ffc107' }}>
                  <i className="fas fa-wind fa-2x"></i>
                </div>
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Service Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  Clean Wind Power
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Professional <span style={{ color: '#336021' }}>Wind Energy Solutions</span>
              </h2>
              <p className="lead mb-4">
                Our wind energy solutions harness the natural power of wind to generate clean, renewable electricity 
                for homes, businesses, and industrial facilities. From small residential turbines to large commercial 
                wind farms, we provide comprehensive wind energy services.
              </p>
              <div className="mb-4">
                {[
                  'High-efficiency wind turbines with proven performance',
                  'Comprehensive wind resource assessment',
                  'Professional installation and maintenance'
                ].map((highlight, index) => (
                  <div key={index} className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle me-3" style={{ color: '#336021' }}></i>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="/images/wind.webp" 
                alt="Wind Energy Solutions" 
                className="img-fluid rounded shadow"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'flex';
                }}
              />
              <div 
                className="w-100 bg-light rounded shadow d-flex align-items-center justify-content-center" 
                style={{ display: 'none', height: '300px' }}
              >
                <i className="fas fa-wind fa-4x" style={{ color: '#336021' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-6 fw-bold mb-4">
                Our <span style={{ color: '#336021' }}>Wind Solutions</span>
              </h2>
              <p className="lead">
                Complete range of wind energy solutions designed to harness the power of wind for clean electricity generation.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                icon: 'fas fa-search-location',
                title: 'Wind Resource Assessment',
                description: 'Comprehensive wind resource evaluation to determine the viability and potential of wind energy at your site.',
                features: ['Wind speed measurement', 'Site analysis and mapping', 'Feasibility studies', 'Energy yield predictions']
              },
              {
                icon: 'fas fa-wind',
                title: 'Turbine Installation',
                description: 'Professional installation of wind turbines for residential, commercial, and industrial applications.',
                features: ['Site preparation', 'Foundation construction', 'Turbine assembly', 'Safety compliance']
              },
              {
                icon: 'fas fa-plug',
                title: 'Grid Connection',
                description: 'Complete electrical infrastructure and grid connection services for wind energy systems.',
                features: ['Electrical design', 'Grid interconnection', 'Power conditioning', 'Utility coordination']
              },
              {
                icon: 'fas fa-chart-line',
                title: 'Performance Monitoring',
                description: 'Advanced monitoring systems to track wind turbine performance and optimize energy production.',
                features: ['Real-time monitoring', 'Performance analytics', 'Remote diagnostics', 'Optimization reports']
              },
              {
                icon: 'fas fa-tools',
                title: 'Maintenance Services',
                description: 'Comprehensive maintenance and repair services to ensure optimal wind turbine performance and longevity.',
                features: ['Preventive maintenance', 'Component replacement', 'Emergency repairs', 'Performance optimization']
              },
              {
                icon: 'fas fa-industry',
                title: 'Commercial Wind Farms',
                description: 'Large-scale wind farm development and management for commercial and industrial clients.',
                features: ['Project development', 'Multi-turbine installations', 'Farm management', 'Power purchase agreements']
              }
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center">
                    <div className="mb-4" style={{ color: '#336021' }}>
                      <i className={`${service.icon} fa-3x`}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    <ul className="list-unstyled text-start">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="mb-2">
                          <i className="fas fa-check text-success me-2"></i>{feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wind Turbine Types */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-6 fw-bold mb-4">
                Wind Turbine <span style={{ color: '#336021' }}>Types</span>
              </h2>
              <p className="lead">
                We offer various types of wind turbines to suit different applications and site conditions.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                icon: 'fas fa-home',
                title: 'Residential Turbines',
                description: 'Small-scale wind turbines designed for residential properties and small businesses.',
                specs: [
                  { label: 'Capacity', value: '1-10 kW' },
                  { label: 'Height', value: '10-30 meters' },
                  { label: 'Application', value: 'Homes, farms' }
                ]
              },
              {
                icon: 'fas fa-building',
                title: 'Commercial Turbines',
                description: 'Medium-scale wind turbines for commercial and industrial applications.',
                specs: [
                  { label: 'Capacity', value: '100 kW - 1 MW' },
                  { label: 'Height', value: '50-80 meters' },
                  { label: 'Application', value: 'Businesses, industries' }
                ]
              },
              {
                icon: 'fas fa-industry',
                title: 'Utility-Scale Turbines',
                description: 'Large-scale wind turbines for utility and commercial wind farm projects.',
                specs: [
                  { label: 'Capacity', value: '1.5-3 MW+' },
                  { label: 'Height', value: '80-120 meters' },
                  { label: 'Application', value: 'Wind farms, utilities' }
                ]
              }
            ].map((turbine, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center">
                    <div className="mb-4" style={{ color: '#336021' }}>
                      <i className={`${turbine.icon} fa-3x`}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{turbine.title}</h4>
                    <p className="mb-4">{turbine.description}</p>
                    <div className="text-start">
                      {turbine.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                          <span className="fw-medium">{spec.label}:</span>
                          <span className="text-muted">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-white">
              <h2 className="display-6 fw-bold mb-4">
                Benefits of <span className="text-warning">Wind Energy</span>
              </h2>
              <p className="lead mb-4">
                Wind energy offers numerous advantages as a clean, renewable source of electricity generation.
              </p>
              <div className="mb-4">
                {[
                  'Zero emissions during operation',
                  'Inexhaustible renewable resource',
                  'Low operating and maintenance costs',
                  'Excellent return on investment'
                ].map((benefit, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <i className="fas fa-leaf me-3 fa-lg"></i>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                {[
                  { number: '25+', label: 'Years Lifespan' },
                  { number: '35%+', label: 'Efficiency Rate' },
                  { number: '24/7', label: 'Power Generation' },
                  { number: '95%+', label: 'Uptime' }
                ].map((stat, index) => (
                  <div key={index} className="col-6">
                    <div className="card border-0 shadow-sm text-center p-3">
                      <h3 className="fw-bold mb-1" style={{ color: '#336021' }}>{stat.number}</h3>
                      <p className="mb-0 small">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-6 fw-bold mb-4">
                Wind Energy <span style={{ color: '#336021' }}>Process</span>
              </h2>
              <p className="lead">
                Our comprehensive approach ensures successful wind energy project implementation from assessment to commissioning.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              { number: '01', icon: 'fas fa-search', title: 'Assessment', description: 'Wind resource and site assessment' },
              { number: '02', icon: 'fas fa-drafting-compass', title: 'Design', description: 'Custom turbine and system design' },
              { number: '03', icon: 'fas fa-file-contract', title: 'Permits', description: 'Regulatory approvals and permits' },
              { number: '04', icon: 'fas fa-hammer', title: 'Construction', description: 'Foundation and turbine installation' },
              { number: '05', icon: 'fas fa-plug', title: 'Connection', description: 'Grid connection and testing' },
              { number: '06', icon: 'fas fa-cog', title: 'Operation', description: 'Commissioning and monitoring' }
            ].map((step, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-sm-6">
                <div className="text-center">
                  <div className="mb-3 rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold" 
                       style={{ width: '50px', height: '50px', backgroundColor: '#336021' }}>
                    {step.number}
                  </div>
                  <div className="mb-3" style={{ color: '#336021' }}>
                    <i className={`${step.icon} fa-2x`}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{step.title}</h5>
                  <p className="small">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">
                Ready to Harness <span style={{ color: '#336021' }}>Wind Power?</span>
              </h2>
              <p className="lead mb-4">
                Start your wind energy project with our professional wind turbine solutions. Get a free wind resource assessment today!
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: '#336021', color: 'white' }}>
                  <i className="fas fa-phone me-2"></i>Get Free Assessment
                </Link>
                <Link to="/projects" className="btn btn-outline-success btn-lg">
                  <i className="fas fa-eye me-2"></i>View Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindEnergyPage;