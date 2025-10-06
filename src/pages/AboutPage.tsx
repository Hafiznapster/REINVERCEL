import React from "react";

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: "linear-gradient(135deg, #336021 0%, #4a7c59 100%)",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "80px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <div className="mb-3">
                <span className="badge bg-light text-dark px-4 py-2 rounded-pill">
                  About Our Company
                </span>
              </div>
              <h1 className="display-4 fw-bold mb-4">
                Powering a <span className="text-warning">Sustainable</span>
                <br />
                Future with <span className="text-warning">Expert Team</span>
              </h1>
              <p className="lead mb-4">
                Learn about our mission, vision, and the dedicated team of
                professionals working to revolutionize the renewable energy
                landscape with innovative solutions.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="#team" className="btn btn-warning btn-lg">
                  <i className="fas fa-users me-2"></i>Meet Our Team
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-phone me-2"></i>Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-5 text-center">
                  <div className="mb-4" style={{ color: "#336021" }}>
                    <i className="fas fa-bullseye fa-3x"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-4">Our Mission</h3>
                  <p className="card-text">
                    To accelerate India's transition to sustainable energy by
                    providing innovative, reliable, and cost-effective renewable
                    energy solutions that empower communities and businesses to
                    achieve energy independence while contributing to a cleaner
                    environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-5 text-center">
                  <div className="mb-4" style={{ color: "#336021" }}>
                    <i className="fas fa-eye fa-3x"></i>
                  </div>
                  <h3 className="card-title fw-bold mb-4">Our Vision</h3>
                  <p className="card-text">
                    To be India's leading renewable energy company, recognized
                    for our commitment to sustainability, innovation, and
                    excellence in delivering clean energy solutions that create
                    lasting positive impact for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span
                  className="badge px-3 py-2"
                  style={{ backgroundColor: "#336021", color: "white" }}
                >
                  Our Values
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                What Drives Us <span style={{ color: "#336021" }}>Forward</span>
              </h2>
              <p className="lead">
                Our core values guide every decision we make and every project
                we undertake.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="mb-3" style={{ color: "#336021" }}>
                  <i className="fas fa-leaf fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">Sustainability</h4>
                <p>
                  Committed to environmental stewardship and sustainable
                  practices in all our operations.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="mb-3" style={{ color: "#336021" }}>
                  <i className="fas fa-lightbulb fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">Innovation</h4>
                <p>
                  Continuously exploring new technologies and solutions to
                  improve energy efficiency.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="mb-3" style={{ color: "#336021" }}>
                  <i className="fas fa-shield-alt fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">Reliability</h4>
                <p>
                  Delivering dependable solutions and maintaining long-term
                  relationships with our clients.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="mb-3" style={{ color: "#336021" }}>
                  <i className="fas fa-star fa-3x"></i>
                </div>
                <h4 className="fw-bold mb-3">Excellence</h4>
                <p>
                  Striving for the highest standards in quality, service, and
                  customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span
                  className="badge px-3 py-2"
                  style={{ backgroundColor: "#336021", color: "white" }}
                >
                  OUR EXPERT TEAM
                </span>
              </div>
              <h2 className="display-5 fw-bold mb-4">
                Expert Team <span style={{ color: "#336021" }}>Members</span>
              </h2>
              <p className="lead">
                Meet our dedicated professionals who are passionate about
                renewable energy and committed to delivering exceptional
                results.
              </p>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "350px" }}
                >
                  <img
                    src="/images/karthik.webp"
                    alt="Karthikeya Singh"
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: "rgba(51, 96, 33, 0.8)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <a
                      href="https://www.linkedin.com/in/kartikeya-singh-028685363"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        className="fab fa-linkedin-in fa-lg"
                        style={{ color: "#336021" }}
                      ></i>
                    </a>
                  </div>
                </div>
                <div className="card-body text-center p-4 d-flex flex-column">
                  <h4 className="fw-bold mb-2">Karthikeya Singh</h4>
                  <p className="text-muted mb-2">Senior Design Engineer</p>
                  <p className="small flex-grow-1">
                    Expert in renewable energy system design with extensive
                    experience in solar and wind energy projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "350px" }}
                >
                  <img
                    src="/images/vishnu.webp"
                    alt="Vishnu Menon"
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "65% 70%",
                      transform: "scale(0.9) translateY(20px)",
                    }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: "rgba(51, 96, 33, 0.8)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <a
                      href="https://www.linkedin.com/in/vishnu-menon-6130b7125"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i
                        className="fab fa-linkedin-in fa-lg"
                        style={{ color: "#336021" }}
                      ></i>
                    </a>
                  </div>
                </div>
                <div className="card-body text-center p-4 d-flex flex-column">
                  <h4 className="fw-bold mb-2">Vishnu Menon</h4>
                  <p className="text-muted mb-2">Director</p>
                  <p className="small flex-grow-1">
                    Visionary leader driving REIN's mission to revolutionize
                    India's renewable energy landscape with innovative
                    solutions.
                  </p>
                </div>
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
                Ready to Join the{" "}
                <span style={{ color: "#336021" }}>Clean Energy</span>{" "}
                Revolution?
              </h2>
              <p className="lead mb-4">
                Let's work together to create a sustainable future with
                renewable energy solutions tailored to your needs.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a
                  href="/contact"
                  className="btn btn-lg"
                  style={{ backgroundColor: "#336021", color: "white" }}
                >
                  <i className="fas fa-phone me-2"></i>Get Started
                </a>
                <a href="/services" className="btn btn-outline-success btn-lg">
                  <i className="fas fa-info-circle me-2"></i>Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
