import React from 'react';
import { Link } from 'react-router-dom';

const EnergyAuditPage: React.FC = () => {
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
                <span className="badge bg-light text-dark px-4 py-2 rounded-pill">Our Energy Services</span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Comprehensive <span className="text-warning">Energy Solutions</span>
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                We provide expert energy services designed to optimize your energy consumption, reduce costs, 
                and promote sustainability.
              </p>
              <div className="d-flex justify-content-center align-items-center my-4">
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
                <div className="mx-3" style={{ color: '#ffc107' }}>
                  <i className="fas fa-chart-line fa-2x"></i>
                </div>
                <div style={{ height: '2px', width: '60px', backgroundColor: '#ffc107' }}></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Core Energy Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-magnifying-glass-chart fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Energy Audit</h4>
                  <p>
                    Our Energy Audit services are designed to provide a thorough assessment of your energy consumption 
                    patterns, identifying areas of inefficiency and opportunities for improvement. Our team of certified 
                    professionals conducts detailed on-site inspections, analyzing equipment performance, building systems, 
                    and energy usage data.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#ffc107' }}>
                    <i className="fas fa-chart-line fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Energy Monitoring</h4>
                  <p>
                    Continuous monitoring of energy consumption is essential for proactive management and ongoing optimization. 
                    Our monitoring solutions enable real-time tracking of energy usage across facilities, allowing for 
                    immediate identification of anomalies or inefficiencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-gears fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Energy Management</h4>
                  <p>
                    We will install the system, monitor & review the data and advise on energy savings for your business. 
                    Our management services encompass strategic planning, implementation of energy-saving measures, 
                    and ongoing performance evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  Benefits
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Why Choose Our <span style={{ color: '#336021' }}>Energy Services</span>
              </h2>
              <p className="lead">
                Our energy audit, monitoring, and management services offer numerous benefits that can transform 
                your energy consumption patterns and lead to significant cost savings.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                icon: 'fas fa-money-bill-trend-up',
                title: 'Cost Reduction',
                description: 'Identify energy waste and implement solutions that can reduce your energy bills by up to 30%, providing significant cost savings over time.',
                color: 'success'
              },
              {
                icon: 'fas fa-leaf',
                title: 'Environmental Impact',
                description: 'Reduce your carbon footprint and contribute to environmental sustainability through optimized energy consumption and reduced emissions.',
                color: 'warning'
              },
              {
                icon: 'fas fa-gauge-high',
                title: 'Performance Optimization',
                description: 'Enhance the performance and lifespan of your equipment through proper energy management and preventive maintenance.',
                color: 'success'
              },
              {
                icon: 'fas fa-certificate',
                title: 'Compliance',
                description: 'Ensure compliance with energy regulations and standards, avoiding potential penalties while enhancing your organization\'s reputation.',
                color: 'warning'
              }
            ].map((benefit, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center">
                    <div className={`mb-4 text-${benefit.color}`}>
                      <i className={`${benefit.icon} fa-3x`}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  Our Process
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                How We <span style={{ color: '#336021' }}>Deliver Results</span>
              </h2>
              <p className="lead">
                Our comprehensive approach ensures that we deliver tailored energy solutions that meet your 
                specific needs and objectives.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                number: '01',
                title: 'Initial Assessment',
                description: 'We begin with a thorough assessment of your current energy usage patterns, infrastructure, and requirements to establish a baseline.',
                color: 'success'
              },
              {
                number: '02',
                title: 'Data Collection',
                description: 'Our team collects comprehensive data using advanced monitoring tools to analyze energy consumption across all systems and equipment.',
                color: 'warning'
              },
              {
                number: '03',
                title: 'Analysis & Planning',
                description: 'We analyze the collected data to identify inefficiencies and develop a customized energy management plan with actionable recommendations.',
                color: 'success'
              },
              {
                number: '04',
                title: 'Implementation & Monitoring',
                description: 'We implement the recommended solutions and establish ongoing monitoring systems to ensure continuous optimization and improvement.',
                color: 'warning'
              }
            ].map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center">
                    <div className={`mb-4 rounded-circle d-inline-flex align-items-center justify-content-center bg-${step.color} text-white`} 
                         style={{ width: '60px', height: '60px' }}>
                      <span className="fw-bold">{step.number}</span>
                    </div>
                    <h4 className="fw-bold mb-3">{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: '#336021' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h2 className="display-6 fw-bold mb-4">
                Ready to Optimize Your <span className="text-warning">Energy Usage?</span>
              </h2>
              <p className="lead mb-4">
                Get expert energy audit, monitoring, and management services to reduce costs and improve efficiency. 
                Contact us today for a comprehensive consultation!
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-warning btn-lg">
                  <i className="fas fa-phone me-2"></i>Let's Talk
                </Link>
                <Link to="/projects" className="btn btn-outline-light btn-lg">
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

export default EnergyAuditPage;