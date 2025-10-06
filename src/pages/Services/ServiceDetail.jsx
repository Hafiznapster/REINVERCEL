import React from "react";
import { useParams, Link } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    "follain-project": {
      title: "Follain Solar Project",
      subtitle: "484 kWp Commercial Installation",
      category: "Commercial Solar Installation",
      description:
        "A 484 kWp commercial solar photovoltaic system in Cork, Ireland, delivering exceptional performance with 81+ MWh generated and 40 tons of CO₂ emissions prevented.",
      image: "/images/follain.webp",
      stats: [
        { number: "484", label: "kWp Capacity" },
        { number: "81+", label: "MWh Generated" },
        { number: "40", label: "Tons CO₂ Saved" },
        { number: "20%", label: "Grid Offset" },
      ],
      details: {
        client: "Follain",
        location: "Cork, Ireland",
        completed: "May 2024",
        duration: "3 Weeks",
      },
      specifications: {
        panels: {
          type: "590W JA Solar High-Efficiency",
          configuration: "46 Strings",
          mounting: "Enerack Mounting Gear",
          capacity: "484 kWp",
        },
        inverters: {
          brand: "Huawei Advanced Inverters",
          units: "3 Inverters",
          capacity: "330 kW",
          efficiency: "98.6%",
        },
      },
      features: [
        {
          icon: "fas fa-solar-panel",
          title: "High-Efficiency Panels",
          description:
            "590W JA Solar panels providing maximum energy generation in limited roof space with superior performance.",
        },
        {
          icon: "fas fa-bolt",
          title: "Exceptional Output",
          description:
            "81+ MWh of clean electricity generated, offsetting 20% of the facility's grid consumption.",
        },
        {
          icon: "fas fa-leaf",
          title: "Environmental Impact",
          description:
            "40 tons of CO₂ emissions prevented, equivalent to planting approximately 53 mature trees.",
        },
        {
          icon: "fas fa-gauge-high",
          title: "Advanced Technology",
          description:
            "Three Huawei inverters delivering 330 kW of AC capacity with exceptional reliability and efficiency.",
        },
      ],
    },
    "denis-mahony-project": {
      title: "Denis Mahony Project",
      subtitle: "122 kWp Hybrid Solar System",
      category: "Hybrid Solar System",
      description:
        "A 122 kWp hybrid solar system in Dublin & Kilbarrack, producing 95 MWh annually and meeting 60% of the client's energy needs with exceptional 3-year payback period.",
      image: "/images/mahony.webp",
      stats: [
        { number: "122", label: "kWp Capacity" },
        { number: "95", label: "MWh/Year" },
        { number: "60%", label: "Energy Coverage" },
        { number: "3", label: "Year Payback" },
      ],
      details: {
        client: "Denis Mahony",
        location: "Dublin & Kilbarrack",
        completed: "May 2024",
        grant: "SEAI Grant",
      },
      specifications: {
        panels: {
          type: "JA Solar 500W PV Panels",
          capacity: "122 kWp",
          mounting: "Renusol Mounting System",
          roofType: "Flat & Trapezoidal Roofing",
        },
        inverters: {
          type: "Two 50kW Solax Inverters",
          production: "95 MWh Annual",
          coverage: "60% of Client's Needs",
          systemType: "Hybrid Solar System",
        },
      },
      features: [
        {
          icon: "fas fa-solar-panel",
          title: "High-Efficiency System",
          description:
            "JA Solar 500W PV panels with Renusol mounting system for optimal energy generation.",
        },
        {
          icon: "fas fa-bolt",
          title: "95 MWh Annual Output",
          description:
            "Clean electricity production meeting 60% of the facility's energy requirements.",
        },
        {
          icon: "fas fa-leaf",
          title: "16.12 Tons CO₂ Reduction",
          description:
            "Significant environmental impact through reduced carbon emissions.",
        },
        {
          icon: "fas fa-coins",
          title: "3-Year Payback Period",
          description:
            "Exceptional ROI supported by SEAI grant and energy cost savings.",
        },
      ],
    },
    "monroe-solar-farm": {
      title: "Monroe Solar Farm",
      subtitle: "14 MWp Solar Farm Project",
      category: "Solar Farm Project",
      description:
        "A 14 megawatts peak (MWp) capacity solar farm powering more than 10,000 homes with clean, sustainable electricity for the next twenty years.",
      image: "/images/monroe.webp",
      stats: [
        { number: "14", label: "MWp Capacity" },
        { number: "10K+", label: "Homes Powered" },
        { number: "50", label: "Acres" },
        { number: "20K+", label: "Solar Panels" },
      ],
      details: {
        type: "Solar Farm",
        area: "50 Acres",
        completion: "April 2024",
        operations: "May 2024",
      },
      specifications: {
        panels: {
          total: "20,000+ Solar PV Modules",
          area: "50 Acres",
          type: "Ground-Mounted Solar Farm",
          capacity: "14 MWp",
        },
        grid: {
          connection: "National Grid",
          homes: "10,000+ Homes",
          period: "20 Years",
          start: "May 2024",
        },
      },
      features: [
        {
          icon: "fas fa-solar-panel",
          title: "20,000+ Solar Panels",
          description:
            "High-efficiency photovoltaic modules covering approximately 50 acres of land, harnessing the sun's energy to generate power.",
        },
        {
          icon: "fas fa-bolt",
          title: "14 MWp Capacity",
          description:
            "Generating enough clean electricity to power more than 10,000 homes for twenty years.",
        },
        {
          icon: "fas fa-leaf",
          title: "Environmental Impact",
          description:
            "Annual carbon offset equivalent to planting approximately 7.26 million trees.",
        },
        {
          icon: "fas fa-monument",
          title: "Archaeological Preservation",
          description:
            "Special measures to protect sensitive areas within the site for future generations.",
        },
      ],
    },
  };

  const service = services[serviceId];

  if (!service) {
    return (
      <div className="container py-5" style={{ paddingTop: "120px" }}>
        <div className="text-center">
          <h1>Project Not Found</h1>
          <p>The requested project could not be found.</p>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Project Hero Section */}
      <section
        className="position-relative"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #336021 0%, #4a7c59 100%)",
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{ top: 0, left: 0, zIndex: 1 }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-100 h-100"
            style={{ objectFit: "cover", opacity: 0.3 }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div
            className="position-absolute w-100 h-100"
            style={{ background: "rgba(51, 96, 33, 0.8)", top: 0, left: 0 }}
          ></div>
        </div>

        {/* Project Name Overlay */}
        <div
          className="position-absolute text-center text-white"
          style={{
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <h1 className="display-4 fw-bold">{service.title}</h1>
          <p className="lead">{service.subtitle}</p>
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8">
              <div className="text-white">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="mb-4">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" className="text-white-50">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/projects" className="text-white-50">
                        Projects
                      </Link>
                    </li>
                    <li className="breadcrumb-item active text-white">
                      {service.title}
                    </li>
                  </ol>
                </nav>

                <div className="mb-3">
                  <span className="badge bg-light text-dark px-4 py-2 rounded-pill">
                    {service.category}
                  </span>
                </div>

                <h1 className="display-4 fw-bold mb-4">
                  {service.title.split(" ")[0]}{" "}
                  <span className="text-warning">
                    {service.title.split(" ").slice(1).join(" ")}
                  </span>
                  <br />
                  Sustainable Energy{" "}
                  <span className="text-warning">Excellence</span>
                </h1>

                <p className="lead mb-5">{service.description}</p>

                {/* Stats */}
                <div className="row g-4">
                  {service.stats.map((stat, index) => (
                    <div key={index} className="col-6 col-md-3">
                      <div className="text-center">
                        <h3 className="text-warning fw-bold">{stat.number}</h3>
                        <p className="mb-0">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="mb-3">
                <span
                  className="badge px-3 py-2"
                  style={{ backgroundColor: "#336021", color: "white" }}
                >
                  Project Overview
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                {service.category}{" "}
                <span style={{ color: "#336021" }}>Excellence</span>
              </h2>
              <p className="lead mb-4">{service.description}</p>

              <div className="row g-3">
                {Object.entries(service.details).map(([key, value]) => (
                  <div key={key} className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="me-3" style={{ color: "#336021" }}>
                        <i className="fas fa-building"></i>
                      </div>
                      <div>
                        <h6 className="mb-1 text-capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </h6>
                        <p className="mb-0">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid rounded-3 shadow-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-100 h-100 bg-light rounded-3 align-items-center justify-content-center"
                  style={{ display: "none" }}
                >
                  <i
                    className="fas fa-solar-panel fa-4x"
                    style={{ color: "#336021" }}
                  ></i>
                </div>
                <div className="position-absolute top-0 end-0 m-3 bg-warning text-dark px-3 py-2 rounded">
                  <span className="fw-bold">{service.stats[0].number}</span>
                  <small className="d-block">{service.stats[0].label}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span
                  className="badge px-3 py-2"
                  style={{ backgroundColor: "#336021", color: "white" }}
                >
                  Technical Specifications
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                System <span style={{ color: "#336021" }}>Details</span>
              </h2>
              <p className="lead">
                Advanced technology and strategic design optimization for
                maximum performance and reliability.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {Object.entries(service.specifications).map(
              ([category, specs], index) => (
                <div key={index} className="col-lg-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3" style={{ color: "#336021" }}>
                          <i className="fas fa-solar-panel fa-2x"></i>
                        </div>
                        <h4 className="mb-0 text-capitalize">
                          {category.replace(/([A-Z])/g, " $1")} System
                        </h4>
                      </div>
                      {Object.entries(specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="d-flex justify-content-between align-items-center py-2 border-bottom"
                        >
                          <span className="fw-medium text-capitalize">
                            {key.replace(/([A-Z])/g, " $1")}:
                          </span>
                          <span className="text-muted">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <div className="mb-3">
                <span
                  className="badge px-3 py-2"
                  style={{ backgroundColor: "#336021", color: "white" }}
                >
                  Key Features
                </span>
              </div>
              <h2 className="display-6 fw-bold mb-4">
                Project <span style={{ color: "#336021" }}>Highlights</span>
              </h2>
              <p className="lead">
                The {service.title} incorporates several innovative features
                that make it a standout renewable energy installation.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {service.features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="text-center">
                  <div className="mb-4" style={{ color: "#336021" }}>
                    <i className={`${feature.icon} fa-3x`}></i>
                  </div>
                  <h4 className="fw-bold mb-3">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: "#336021" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h2 className="display-6 fw-bold mb-4">
                Ready to Start Your{" "}
                <span className="text-warning">Solar Project?</span>
              </h2>
              <p className="lead mb-4">
                Join {service.details.client || "our satisfied clients"} and
                other forward-thinking organizations in making the switch to
                renewable energy. Get a free consultation today!
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-warning btn-lg">
                  <i className="fas fa-phone me-2"></i>Get Free Consultation
                </Link>
                <Link to="/projects" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-eye me-2"></i>View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
