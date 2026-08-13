import { objective, education } from "../data";

export default function About() {
  return (
    <section id="about" className="section-wrap about-section">
      <div className="wrap">
        <div className="about-copy">
          <div className="eyebrow">About</div>
          <h2 className="section-title">Engineer. Builder. Executor.</h2>
          <p className="section-copy">{objective}</p>

          <div className="about-quote">
            <p>
              I enjoy working across the stack — from data pipelines and machine learning workflows to product thinking and polished interfaces. My focus is on building systems that are useful, scalable, and execution-ready.
            </p>
          </div>

          <div className="smaller-list">
            <span>AI &amp; ML</span>
            <span>Python</span>
            <span>Web3</span>
            <span>Data Analytics</span>
            <span>Product Thinking</span>
          </div>
        </div>

        <div className="mini-card panel timeline-box" style={{ gridColumn: '1 / -1' }}>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-year">Expected 2027</div>
              <div className="timeline-title">{education.degree}</div>
              <div className="timeline-sub">{education.school}</div>
              <span className="timeline-score">{education.cgpa}</span>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-year">2023</div>
              <div className="timeline-title">Pre-University Studies</div>
              <div className="timeline-sub">St. Philomena PU College, Puttur</div>
              <span className="timeline-score">80.4%</span>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-year">2021</div>
              <div className="timeline-title">Secondary School</div>
              <div className="timeline-sub">St. Philomena High School</div>
              <span className="timeline-score">70.24%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
