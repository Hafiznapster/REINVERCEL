import { FaSolarPanel, FaHome, FaLeaf, FaBolt } from 'react-icons/fa';

export const projects = [
  {
    id: "monroe-solar-farm",
    title: "Monroe Solar Farm",
    type: "Solar Farm",
    capacity: "14MW",
    homesPowered: "10,000+",
    area: "50 acres",
    panels: "20,000+",
    image: "https://images.pexels.com/photos/9875431/pexels-photo-9875431.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Large-scale solar farm installation providing clean energy to thousands of homes while contributing to Ireland's renewable energy targets.",
    stats: [
      { icon: FaBolt, label: "Capacity", value: "14 MWp" },
      { icon: FaHome, label: "Homes Powered", value: "10,000+" },
      { icon: FaSolarPanel, label: "Solar Panels", value: "20,000+" },
      { icon: FaLeaf, label: "CO₂ Saved", value: "8,000 tons/year" }
    ],
    details: {
      location: "Monroe, Ireland",
      completionDate: "2023",
      technology: "Monocrystalline Silicon Panels",
      inverters: "String Inverters with Power Optimizers",
      mountingSystem: "Ground-mounted tracking system",
      expectedGeneration: "16,000 MWh/year",
      environmentalImpact: "Equivalent to removing 3,500 cars from the road"
    }
  },
  {
    id: "follain-project",
    title: "Follain Project",
    type: "Commercial Solar",
    capacity: "484 kWp",
    generated: "81+ MWh",
    co2Saved: "40 tons",
    image: "https://images.pexels.com/photos/9875492/pexels-photo-9875492.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Commercial rooftop solar installation showcasing efficient use of available roof space with high-performance solar panels and inverters.",
    stats: [
      { icon: FaBolt, label: "Capacity", value: "484 kWp" },
      { icon: FaSolarPanel, label: "Generated", value: "81+ MWh" },
      { icon: FaLeaf, label: "CO₂ Saved", value: "40 tons" },
      { icon: FaHome, label: "Energy Coverage", value: "85%" }
    ],
    details: {
      location: "Commercial Building, Ireland",
      completionDate: "2023",
      technology: "JA Solar panels with Huawei inverters",
      mountingSystem: "Ballasted rooftop system",
      paybackPeriod: "6.5 years",
      annualSavings: "€42,000",
      seiaiGrant: "€15,000 received"
    }
  },
  {
    id: "denis-mahony",
    title: "Denis Mahony Project",
    type: "Hybrid System",
    capacity: "122 kWp",
    production: "95 MWh/year",
    coverage: "60%",
    image: "https://images.pexels.com/photos/9875495/pexels-photo-9875495.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Innovative hybrid solar and battery storage system providing energy independence and significant cost savings for residential application.",
    stats: [
      { icon: FaBolt, label: "Capacity", value: "122 kWp" },
      { icon: FaSolarPanel, label: "Annual Production", value: "95 MWh" },
      { icon: FaHome, label: "Energy Coverage", value: "60%" },
      { icon: FaLeaf, label: "Payback Period", value: "3 years" }
    ],
    details: {
      location: "Residential Property, Ireland",
      completionDate: "2023",
      technology: "High-efficiency monocrystalline panels",
      batteryStorage: "Tesla Powerwall 2 - 13.5kWh",
      monitoring: "Real-time energy monitoring system",
      seiaiGrant: "€7,500 received",
      annualSavings: "€8,500"
    }
  }
];