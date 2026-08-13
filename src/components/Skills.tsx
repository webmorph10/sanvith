const skillCards = [
  {
    icon: "◫",
    title: "Data Science & Analytics",
    text: "Building data pipelines, ML models, and analytics systems that turn raw data into decisions.",
  },
  {
    icon: "◌",
    title: "Web3 Development",
    text: "Smart contracts, DeFi protocols, and decentralized applications on EVM chains.",
  },
  {
    icon: "◎",
    title: "Automation Systems",
    text: "Workflow automation, integrations, and scalable tooling.",
  },
  {
    icon: "✦",
    title: "Product Building",
    text: "End-to-end product development from concept to launch.",
  },
  {
    icon: "✎",
    title: "UI/UX & Branding",
    text: "Design systems, visual identity, and user experiences.",
  },
  {
    icon: "↗",
    title: "Growth & Strategy",
    text: "Go-to-market execution, content systems, and scaling ops.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrap skills-section">
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow">Expertise</div>
          <h2 className="skills-title">
            Skills &amp; <span>Capabilities</span>
          </h2>
        </div>

        <div className="skills-grid-large">
          {skillCards.map((card) => (
            <article key={card.title} className="skill-tile panel">
              <div className="skill-tile-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
