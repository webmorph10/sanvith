import { useEffect, useState } from "react";
import { personal } from "../data";

export default function Hero() {
  const [roleText, setRoleText] = useState("");

  useEffect(() => {
    const roles = ["Founder", "Web3 Developer", "Data Scientist", "Builder"];
    let index = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = roles[index];
      if (!deleting) {
        charIndex += 1;
        setRoleText(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          deleting = true;
          setTimeout(tick, 1300);
          return;
        }
      } else {
        charIndex -= 1;
        setRoleText(current.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          index = (index + 1) % roles.length;
        }
      }

      setTimeout(tick, deleting ? 38 : 72);
    };

    tick();
  }, []);

  return (
    <header className="hero">
      <div className="wrap hero-box">
        <div className="hero-intro">
          <div className="status-chip">
            <span className="status-dot" />
            Open to collaborations &amp; product work
          </div>

          <h1 className="hero-title">
            <span className="line">{personal.name}</span>
          </h1>

          <div className="hero-tagline" aria-live="polite">
            <span>Founder.</span>
            <span>Web3 Developer.</span>
            <span>Data Scientist.</span>
          </div>

          <div className="hero-role-line">
            <span>{roleText}</span>
            <span className="cursor-blink" />
          </div>

          <div className="hero-callout">
            <span>Engineering reality</span>
            <span>from raw ideas.</span>
          </div>

          <p className="hero-sub">
            I design and ship practical systems at the intersection of AI, data, blockchain, and real-world execution.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects</a>
            <a className="button secondary" href="#contact">Get In Touch</a>
          </div>
        </div>

        <div className="profile-wrap">
          <div className="profile-shell">
            <div className="avatar-ring" />
            <img
              className="avatar"
              src="/sanvith-portrait.jpg"
              alt={personal.name}
            />
            <div className="floating-badge badge-left panel">
              <span style={{ color: "var(--cyan)" }}>●</span> AI / ML
            </div>
            <div className="floating-badge badge-right panel">
              <span style={{ color: "var(--gold)" }}>●</span> Puttur, India
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <span className="scroll-line" />
        </div>
      </div>
    </header>
  );
}
