const RD_PROJECTS = [
  {
    num: "01",
    title: "Agave as a Climate-Resistant Crop",
    tag: "Drought resilience",
    desc: "A drought-resistant multi-crop system for the Central Valley. Agave tolerates extreme heat and minimal water — making it a candidate for the crops-of-the-future research agenda.",
    image: "/images/visuals/rd-projects/agave.jpg",
    imagePosition: "center center",
  },
  {
    num: "02",
    title: "Regenerating Citrus",
    tag: "Soil health & disease",
    desc: "100+ acres of conventional citrus under study, with cover crop resiliency trials running alongside orchard health monitoring. A major Central Valley crop under severe climate and disease pressure.",
    image: "/images/visuals/rd-projects/citrus2.jpg",
    imagePosition: "center 40%",
  },
  {
    num: "03",
    title: "Multi-Year Cover Crop Study",
    tag: "Long-term soil impact",
    desc: "Measuring benefits that persist beyond the cover crop lifecycle — tracking soil organic matter, water infiltration, and microbial activity over years, not months.",
    image: "/images/visuals/rd-projects/covercrop.jpg",
    imagePosition: "center 60%",
  },
  {
    num: "04",
    title: "Stopping the Burn",
    tag: "Ag waste & emissions",
    desc: "Reduction and repurposing of agricultural waste that is currently burned in the field. Developing alternatives that recover nutrients, reduce emissions, and add value to the farm system.",
    image: "/images/visuals/rd-projects/burn.jpeg",
    imagePosition: "center center",
  },
  {
    num: "05",
    title: "Sap Analysis",
    tag: "Plant nutrient monitoring",
    desc: "Real-time plant nutrient status monitoring through sap analysis. Helps farmers respond to deficiencies before they damage yield — potentially saving thousands in fertilizer costs.",
    image: "/images/visuals/rd-projects/sap-analysis.jpg",
    imagePosition: "center center",
  },
  {
    num: "06",
    title: "Soil-Water Hydrological Assessments",
    tag: "Water dynamics",
    desc: "Studying how water moves through healthy versus degraded soils — measuring infiltration, groundwater recharge, and drought resilience in water-scarce Central Valley conditions.",
    image: "/images/visuals/rd-projects/soil-water.jpg",
    imagePosition: "center 30%",
  },
];

function EdisonRDProjectsSection() {
  return (
    <section className="section edison-rd-section">
      <div className="container">
        <span className="eyebrow">R&D Projects under consideration</span>
        <h2 className="edison-rd-title">Six initial research projects. Each one answers a question adoption depends on.</h2>
        <div className="edison-rd-grid">
          {RD_PROJECTS.map((project) => (
            <article
              key={project.num}
              className="edison-rd-card"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundPosition: project.imagePosition,
              }}
            >
              <div className="edison-rd-card-overlay" />
              <div className="edison-rd-card-content">
                <div className="edison-rd-card-header">
                  <span className="edison-rd-num">{project.num}</span>
                  <span className="edison-rd-tag">{project.tag}</span>
                </div>
                <h3 className="edison-rd-card-title">{project.title}</h3>
                <p className="edison-rd-card-desc">{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EdisonRDProjectsSection;
