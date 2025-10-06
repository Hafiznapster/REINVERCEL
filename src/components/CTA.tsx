import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#336021' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <h2 className="display-6 fw-bold mb-3 text-white">
              Ready to Switch to Clean Energy?
            </h2>
            <p className="lead mb-0 text-white opacity-75">
              Join thousands of satisfied customers who have made the switch to renewable energy. 
              Get a free consultation today and start saving on your energy costs!
            </p>
          </div>
          <div className="col-lg-4 text-lg-end text-center">
            <a href="#contact" className="btn btn-light btn-lg shadow">
              <i className="fas fa-phone me-2"></i>Get Free Quote
            </a>
            <p className="mt-2 mb-0 text-white opacity-75 small">
              No obligation • Free consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;