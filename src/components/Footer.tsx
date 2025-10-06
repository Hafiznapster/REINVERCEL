import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="mb-4">
              <img src="/images/logo-02.png" alt="REIN Logo" height="40" className="mb-3" />
              <p className="text-light opacity-75">
                REIN is dedicated to providing sustainable energy solutions that help reduce carbon 
                footprints while saving costs. Our mission is to accelerate the transition to clean, 
                renewable energy.
              </p>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-light text-decoration-none opacity-75">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-light text-decoration-none opacity-75">About Us</a></li>
              <li className="mb-2"><a href="#services" className="text-light text-decoration-none opacity-75">Services</a></li>
              <li className="mb-2"><a href="#projects" className="text-light text-decoration-none opacity-75">Projects</a></li>
              <li className="mb-2"><a href="#contact" className="text-light text-decoration-none opacity-75">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#solar" className="text-light text-decoration-none opacity-75">Solar Installation</a></li>
              <li className="mb-2"><a href="#wind" className="text-light text-decoration-none opacity-75">Wind Energy Solutions</a></li>
              <li className="mb-2"><a href="#audit" className="text-light text-decoration-none opacity-75">Energy Audit & Monitoring</a></li>
              <li className="mb-2"><a href="#maintenance" className="text-light text-decoration-none opacity-75">Maintenance & Support</a></li>
              <li className="mb-2"><a href="#design" className="text-light text-decoration-none opacity-75">Consultancy Services</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="text-light opacity-75 mb-3">
              Subscribe to our newsletter to receive updates on the latest renewable energy trends and our services.
            </p>
            <form className="d-flex">
              <input 
                type="email" 
                className="form-control me-2" 
                placeholder="Your Email Address" 
                required 
              />
              <button type="submit" className="btn btn-success">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <hr className="my-4 opacity-25" />
        
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0 text-light opacity-75">&copy; 2025 REIN. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-light text-decoration-none opacity-75">Privacy Policy</a>
              </li>
              <li className="list-inline-item mx-2 opacity-50">|</li>
              <li className="list-inline-item">
                <a href="#" className="text-light text-decoration-none opacity-75">Terms of Service</a>
              </li>
              <li className="list-inline-item mx-2 opacity-50">|</li>
              <li className="list-inline-item">
                <a href="#" className="text-light text-decoration-none opacity-75">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;