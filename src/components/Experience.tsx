import { experience, certifications, strengths } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow">Experience</div>
          <h2 className="section-title">Hands-on work</h2>
          <p className="section-copy">Practical exposure across development, analytics, and applied product building.</p>
        </div>

        <div className="exp-panel panel">
          <div className="exp-top">
            <div>
              <div className="role">{experience.role}</div>
              <div className="company">{experience.company}</div>
            </div>
            <div className="date-pill">Jul 2026 — Present</div>
          </div>

          <ul className="exp-list">
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        <div className="certs">
          {certifications.map((certification) => (
            <div key={certification} className="cert-item panel">
              <div className="cert-mark">✓</div>
              <div>
                <strong>{certification.split(" — ")[0]}</strong>
                <small>{certification.split(" — ")[1]}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="softs">
          <div className="soft-title">Soft skills</div>
          <div className="soft-list">
            {strengths.map((strength) => (
              <span key={strength}>{strength}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
