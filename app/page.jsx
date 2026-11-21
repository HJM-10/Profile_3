"use client";

import { useState } from "react";

const projects = [
  { title: "KT Sports Hub", description: "A customer app and admin dashboard for venue booking, equipment rentals, and QR check-in." },
  { title: "TTMS", description: "A multi-campus timetable platform. I worked on Excel imports, scheduling rules, and staff workflows." },
  { title: "Certificate Generator", description: "A Computer Science Society tool for editing templates and exporting sharp certificate PDFs." },
];

export default function OrbitalPortfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [previewName, setPreviewName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPreviewName(String(data.get("name")).trim());
  }

  function tiltGlobe(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const globe = event.currentTarget;
    const area = globe.getBoundingClientRect();
    const x = (event.clientX - area.left) / area.width - .5;
    const y = (event.clientY - area.top) / area.height - .5;
    globe.style.setProperty("--tilt-x", `${y * -9}deg`);
    globe.style.setProperty("--tilt-y", `${x * 12}deg`);
  }

  function resetGlobe(event) {
    event.currentTarget.style.removeProperty("--tilt-x");
    event.currentTarget.style.removeProperty("--tilt-y");
  }

  return (
    <div className="site">
      <header className="bar">
        <a className="brand" href="#top">Huzaifa Jayyad</a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></nav>
      </header>

      <main id="top">
        <section className="hero" id="about">
          <div className="hero-copy">
            <h1>Hey, I’m <span>Huzaifa.</span></h1>
            <p>I build web apps and mobile tools for bookings, scheduling, and repetitive work.</p>
            <a className="action" href="#contact">Talk about a project</a>
          </div>
          <div className="contours" aria-hidden="true" />
        </section>

        <section className="work" id="work">
          <h2>Selected work</h2>
          <div className="work-grid">
            <div className="project-selector" aria-label="Select a project">
              {projects.map((project, index) => (
                <button type="button" aria-pressed={activeProject === index} key={project.title} onClick={() => setActiveProject(index)}>{project.title}</button>
              ))}
            </div>
            <article aria-live="polite">
              <h3>{projects[activeProject].title}</h3>
              <p>{projects[activeProject].description}</p>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <form onSubmit={handleSubmit} onInput={() => setPreviewName("")}>
            <h2>Let’s talk.</h2>
            <p>Tell me what you’d like to build. This prototype previews the form locally.</p>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="name" required maxLength={80} />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" autoComplete="email" required maxLength={160} />
            <label htmlFor="project">Project details</label>
            <textarea id="project" name="project" rows={4} required maxLength={2500} />
            <button type="submit" className="action">Preview enquiry</button>
            <p className="status" role="status">{previewName && `Thanks, ${previewName}. Your enquiry preview is ready. No message was sent.`}</p>
          </form>
          <div className="globe" aria-hidden="true" onPointerMove={tiltGlobe} onPointerLeave={resetGlobe}>
            <div className="globe-art" />
          </div>
        </section>
      </main>
    </div>
  );
}
