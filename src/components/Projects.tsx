import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow">Projects</div>
          <h2 className="section-title">Selected work</h2>
          <p className="section-copy">
            A couple of applied projects built around data, AI reasoning, and practical product impact.
          </p>
        </div>

        <div className="project-stack">
          {projects.map((project) => (
            <article key={project.name} className="project-card panel">
              <div className="project-head">
                <div>
                  <div className="project-type">{project.fullName}</div>
                  <h3 className="project-name">{project.name}</h3>
                </div>
                <div className="project-year">{project.year}</div>
              </div>

              <p>{project.description}</p>

              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="stack-row">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-pill">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
