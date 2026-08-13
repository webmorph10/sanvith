import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    const progress = document.getElementById("progressBar");
    const nav = document.getElementById("mainNav");

    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      if (dot) dot.style.display = "none";
      if (ring) ring.style.display = "none";
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    };

    const moveRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      requestAnimationFrame(moveRing);
    };

    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(moveRing);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => ring?.classList.add("big"));
      el.addEventListener("mouseleave", () => ring?.classList.remove("big"));
    });

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (progress) progress.style.width = `${pct}%`;
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="cursor-ring" id="cursorRing" />
      <div className="cursor-dot" id="cursorDot" />
      <div className="progress" id="progressBar" />
      <div className="aurora">
        <div className="aurora-sphere s1" />
        <div className="aurora-sphere s2" />
        <div className="aurora-sphere s3" />
      </div>
      <div className="grain" />

      <Navbar />
      <main className="content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
