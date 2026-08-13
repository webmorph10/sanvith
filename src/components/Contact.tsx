import { personal } from "../data";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = `mailto:${personal.email}`;
  };

  return (
    <section id="contact" className="section-wrap contact-section">
      <div className="wrap contact-hero">
        <div className="contact-copy">
          <div className="eyebrow">Contact</div>
          <h2 className="contact-headline">
            Let&apos;s build
            <span className="contact-gradient">something.</span>
          </h2>

          <p>
            Based in India and open to collaborations, product work, and conversations around AI, data, and digital systems.
          </p>

          <div className="cta-row">
            <button type="button" className="contact-cta primary" onClick={handleEmailClick}>
              <span className="cta-icon">✉</span>
              <span>{personal.email}</span>
              <span className="cta-arrow">↗</span>
            </button>

            <a className="contact-cta secondary" href={`tel:${personal.phone}`}>
              <span className="cta-icon">◔</span>
              <span>{personal.phone}</span>
            </a>
          </div>
        </div>

        <div className="social-stack panel">
          <div className="social-label">Find me on</div>

          <a className="social-card" href={personal.github} target="_blank" rel="noreferrer">
            <div className="social-left">
              <span className="social-badge github">G</span>
              <div>
                <strong>GitHub</strong>
                <small>@SANVITHGOWDA</small>
              </div>
            </div>
            <span className="social-arrow">↗</span>
          </a>

          <a className="social-card" href={personal.linkedin} target="_blank" rel="noreferrer">
            <div className="social-left">
              <span className="social-badge linkedin">in</span>
              <div>
                <strong>LinkedIn</strong>
                <small>Sanvith B</small>
              </div>
            </div>
            <span className="social-arrow">↗</span>
          </a>
        </div>
      </div>

      <footer>
        Designed and built with{' '}
        <a href="https://webmorph-studio-psi.vercel.app/" target="_blank" rel="noreferrer">
          webmorph
        </a>
        {' '}© 2026
      </footer>
    </section>
  );
}
