import React from 'react';
import { Link } from 'react-router-dom';

const SolarBatteryEVPage: React.FC = () => {
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
              <h1 className="display-3 fw-bold mb-4">Solar, Battery & EV Solutions</h1>
              <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                Comprehensive solar, battery storage, and EV charging solutions for residential and commercial applications.
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

      {/* Service Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  Our Energy Solutions
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Solar, Battery & EV <span style={{ color: '#336021' }}>Solutions</span>
              </h2>
              <p className="lead mb-4">
                At REIN, we are dedicated to ushering in a sustainable future through innovative renewable energy solutions. 
                Our focus on Solar, Battery, and Electric Vehicle (EV) technologies reflects our commitment to reducing carbon 
                emissions, promoting energy independence, and driving environmental stewardship.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="/images/solar.webp" 
                alt="Solar Battery EV Solutions" 
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
                <i className="fas fa-solar-panel fa-4x" style={{ color: '#336021' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-6 fw-bold mb-4">
                Key <span style={{ color: '#336021' }}>Services</span>
              </h2>
              <p className="lead">
                Our comprehensive approach combines solar, battery, and EV technologies to create integrated solutions 
                that maximize energy efficiency, reliability, and sustainability.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#ffc107' }}>
                    <i className="fas fa-solar-panel fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Solar Energy</h4>
                  <p>
                    Solar power stands at the forefront of renewable energy solutions, harnessing the abundant energy 
                    of the sun to generate clean electricity. Our solar energy offerings encompass a range of solutions, 
                    from rooftop solar panels for residential applications to large-scale solar farms for commercial 
                    and industrial clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#336021' }}>
                    <i className="fas fa-battery-full fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Battery Storage</h4>
                  <p>
                    Battery storage plays a pivotal role in maximizing the efficiency and reliability of renewable 
                    energy systems. Our battery storage solutions enable the capture and storage of excess solar 
                    energy during periods of peak production, allowing for seamless energy management and grid independence.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{ color: '#ffc107' }}>
                    <i className="fas fa-car fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Electric Vehicles (EVs)</h4>
                  <p>
                    As advocates for sustainable transportation, we promote the adoption of Electric Vehicles (EVs) 
                    as a key component of our renewable energy ecosystem. Our EV charging infrastructure solutions 
                    make it convenient and accessible for individuals and businesses to transition to electric transportation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: '#336021', color: 'white' }}>
                  For a Sustainable Tomorrow
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                You are <span style={{ color: '#336021' }}>guaranteed to</span>
              </h2>
              <p className="lead">
                At REIN, we understand that the future of energy lies in integration. Our holistic approach combines 
                solar, battery, and EV technologies to create integrated solutions that maximize energy efficiency, 
                reliability, and sustainability.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fas fa-bolt', text: 'Save on electricity', color: 'success' },
              { icon: 'fas fa-fire', text: 'Save on your heating bills with hot water coupled systems', color: 'warning' },
              { icon: 'fas fa-battery-half', text: 'Store excess energy from the day to reduce your bills at night', color: 'success' },
              { icon: 'fas fa-award', text: 'SEAI grant available', color: 'warning' },
              { icon: 'fas fa-coins', text: 'Feed-in tariff for excess energy', color: 'success' },
              { icon: 'fas fa-leaf', text: 'Reduce your carbon footprint', color: 'warning' },
              { icon: 'fas fa-shield-alt', text: 'Future proof against rising energy costs', color: 'success' },
              { icon: 'fas fa-truck', text: 'Reduce your fleet costs by switching to EV', color: 'warning' },
              { icon: 'fas fa-calendar-alt', text: 'Long life span with 25 years warranty on products', color: 'success' },
              { icon: 'fas fa-clock', text: 'Quick installation by an expert team', color: 'warning' }
            ].map((benefit, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-3 text-center">
                    <div className={`mb-3 text-${benefit.color}`}>
                      <i className={`${benefit.icon} fa-2x`}></i>
                    </div>
                    <h6 className="fw-bold">{benefit.text}</h6>
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
              <div className="mb-3">
                <span className="badge bg-light text-dark px-3 py-2">Building a Brighter Future</span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Together, we have the power to transform the way we produce, store, and consume energy
              </h2>
              <p className="lead mb-4">
                At REIN, we invite you to join us in building a brighter, cleaner future powered by solar, 
                battery, and EV technologies.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-warning btn-lg">
                  <i className="fas fa-phone me-2"></i>Contact Us Today
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

export default SolarBatteryEVPage;