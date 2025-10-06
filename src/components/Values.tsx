import React from 'react';

const Values: React.FC = () => {
  const values = [
    {
      icon: 'fas fa-leaf',
      title: 'Sustainability',
      description: 'Committed to environmental stewardship and sustainable practices in all our operations.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Continuously exploring new technologies and solutions to improve energy efficiency.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Reliability',
      description: 'Delivering dependable solutions and maintaining long-term relationships with our clients.'
    },
    {
      icon: 'fas fa-star',
      title: 'Excellence',
      description: 'Striving for the highest standards in quality, service, and customer satisfaction.'
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <div className="mb-2">
            <span className="badge bg-success px-3 py-2">OUR VALUES</span>
          </div>
          <h2 className="display-5 fw-bold mb-3">
            What Drives Us <span style={{ color: '#336021' }}>Forward</span>
          </h2>
          <p className="lead text-muted">
            Our core values guide every decision we make and every project we undertake.
          </p>
        </div>
        
        <div className="row g-4">
          {values.map((value, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="text-center h-100 p-4">
                <div className="mb-3">
                  <i className={`${value.icon} fa-3x`} style={{ color: '#336021' }}></i>
                </div>
                <h4 className="fw-bold mb-3">{value.title}</h4>
                <p className="text-muted">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;