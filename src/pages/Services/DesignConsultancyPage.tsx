import React from 'react';
import { Link } from 'react-router-dom';

const DesignConsultancyPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero/Introduction Section */}
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
                <span className="badge bg-light text-dark px-4 py-2 rounded-pill">Our Design & Consultancy Approach</span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Comprehensive <span className="text-warning">Project Lifecycle</span>
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                At REIN, we provide meticulous design and consultancy services for renewable energy projects, 
                addressing technical, economic, and environmental considerations at every stage.
              </p>
              <div className="d-flex justify-content-center align-items-center my-4">
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
                <div className="mx-3" style={{ color: '#ffc107' }}>
                  <i className="fas fa-drafting-compass fa-2x"></i>
                </div>
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Core Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-magnifying-glass-chart fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Site Assessment & Feasibility</h4>
                  <p>
                    The initial phase involves thorough site assessment and feasibility studies. Our engineers analyze 
                    factors such as available resources (solar irradiance, wind speed), geographical location, land use, 
                    grid connection options, and regulatory requirements. This comprehensive evaluation forms the foundation 
                    for decision-making throughout the project lifecycle.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#ffc107' }}>
                    <i className="fas fa-drafting-compass fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Custom Design Solutions</h4>
                  <p>
                    Once feasibility is confirmed, our in-house engineers collaborate to develop tailored solutions 
                    optimized for your site's unique characteristics and energy needs. For solar projects, this involves 
                    designing efficient photovoltaic arrays, considering factors like panel orientation, tilt angles, 
                    and shading. Wind projects require meticulous turbine selection, layout optimization, and aerodynamic analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-clipboard-check fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Regulatory Compliance</h4>
                  <p>
                    Our consultants play a crucial role in navigating regulatory frameworks and securing necessary permits 
                    and approvals. We ensure compliance with local zoning laws, environmental regulations, and interconnection 
                    standards, mitigating risks and facilitating seamless project execution for all your renewable energy initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Phases Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  Project Phases
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                From Concept to <span style={{ color: '#336021' }}>Completion</span>
              </h2>
              <p className="lead">
                Our comprehensive approach ensures successful implementation of renewable energy projects through 
                carefully managed phases.
              </p>
            </div>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-helmet-safety fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Construction Oversight</h4>
                  <p>
                    During the construction phase, our consultants oversee the implementation of design plans, ensuring 
                    adherence to quality standards, safety protocols, and project timelines. Effective project management 
                    and coordination among stakeholders are paramount to overcoming challenges and optimizing resource 
                    utilization for maximum efficiency and cost-effectiveness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#ffc107' }}>
                    <i className="fas fa-chart-line fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Post-Construction Services</h4>
                  <p>
                    After project completion, we provide ongoing consultancy services to monitor system performance, 
                    conduct periodic maintenance, and optimize operational efficiency. Our consultants leverage data 
                    analytics and predictive modeling to identify potential issues proactively, ensuring optimal energy 
                    production and return on investment over the project's lifespan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Design Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  Our Expertise
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Specialized <span style={{ color: '#336021' }}>Design Services</span>
              </h2>
              <p className="lead">
                We offer specialized design and consultancy services across various renewable energy technologies.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                icon: 'fas fa-solar-panel',
                title: 'Solar PV Design',
                items: ['Rooftop & ground-mounted systems', 'Shading analysis & optimization', 'Yield predictions & simulations', 'Electrical system design'],
                color: 'success'
              },
              {
                icon: 'fas fa-wind',
                title: 'Wind Energy Design',
                items: ['Wind resource assessment', 'Turbine selection & siting', 'Layout optimization', 'Noise & environmental impact'],
                color: 'warning'
              },
              {
                icon: 'fas fa-car-battery',
                title: 'Energy Storage',
                items: ['Battery system sizing', 'Hybrid system integration', 'Control system design', 'Economic optimization'],
                color: 'success'
              },
              {
                icon: 'fas fa-plug-circle-bolt',
                title: 'Grid Integration',
                items: ['Grid connection studies', 'Power quality analysis', 'Protection system design', 'Compliance verification'],
                color: 'warning'
              }
            ].map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center">
                    <div className={`mb-4 text-${service.color}`}>
                      <i className={`${service.icon} fa-3x`}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{service.title}</h4>
                    <ul className="list-unstyled text-start">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-2">
                          <i className="fas fa-check text-success me-2"></i>{item}
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

      {/* Multidisciplinary Approach Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="mb-4" style={{ color: '#336021' }}>
                <i className="fas fa-lightbulb fa-4x"></i>
              </div>
              <h2 className="display-6 fw-bold mb-4">Our Multidisciplinary Approach</h2>
              <div>
                <p className="lead mb-4">
                  The design and consultancy process of any renewable energy project entails a multidisciplinary approach, 
                  integrating technical expertise, regulatory knowledge, and strategic planning. By collaborating closely 
                  with clients and stakeholders, our consultants strive to deliver innovative solutions that drive the 
                  transition towards a sustainable energy future.
                </p>
                <p className="mb-4">
                  Our team includes electrical engineers, mechanical engineers, environmental specialists, financial analysts, 
                  and project managers who work together to address all aspects of your renewable energy project.
                </p>
                <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: '#336021', color: 'white' }}>
                  <i className="fas fa-calendar-alt me-2"></i>Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">
                Ready to Start Your <span style={{ color: '#336021' }}>Project Design?</span>
              </h2>
              <p className="lead mb-4">
                Get expert design and consultancy services for your renewable energy project. Contact us today for 
                a comprehensive consultation!
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: '#336021', color: 'white' }}>
                  <i className="fas fa-phone me-2"></i>Let's Talk
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

export default DesignConsultancyPage;