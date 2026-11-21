"use client";

import { useState } from "react";
import ProjectArchive from "./project-archive";
import ScrollMotion from "./scroll-motion";

const experience = [
  { title: "Business web applications", project: "DNF Trading", note: "Worked on the customer interface, admin dashboard, and product configuration options." },
  { title: "Mobile app development", project: "3DFV and SpendTrail", note: "Built ordering, navigation, account, and spending flows across Expo and Flutter projects." },
  { title: "Scheduling and internal workflows", project: "TTMS and KT Sports Hub", note: "Worked on timetable imports and scheduling rules, and explored venue booking and QR check-in." },
];

export default function OrbitalPortfolio() {
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
      <ScrollMotion />
      <header className="bar">
        <a className="brand" href="#top">Huzaifa Jayyad</a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#all-projects">Projects</a><a href="#contact">Contact</a></nav>
      </header>

      <main id="top">
        <section className="hero" data-scroll-scene aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Hi, I’m <span>Huzaifa.</span></h1>
            <p>I build web apps and mobile tools for bookings, scheduling, and repetitive work.</p>
          </div>
          <div className="contours" aria-hidden="true" />
          <div className="workstation" aria-hidden="true" />
          <a className="scroll-control" href="#about" aria-label="Scroll to overview"><span /></a>
        </section>

        <section className="overview" id="about" data-scroll-scene>
          <p className="section-label">Introduction</p>
          <h2>Overview.</h2>
          <p>I’m Huzaifa Jayyad, a computer science student and developer. I build web apps, mobile apps, and workflow tools with React, Next.js, Flutter, and FastAPI. I usually start by mapping the workflow and testing it in a prototype.</p>
          <div className="capabilities"><span>Web development</span><span>Mobile development</span><span>Workflow automation</span></div>
        </section>

        <section className="experience" id="experience">
          <h2>Experience.</h2>
          <ol className="timeline">
            {experience.map(item => (
              <li key={item.title} data-scroll-scene><span className="timeline-node" aria-hidden="true" /><div><h3>{item.title}</h3><p className="timeline-project">{item.project}</p><p>{item.note}</p></div></li>
            ))}
          </ol>
        </section>

        <ProjectArchive />

        <section className="contact" id="contact" data-scroll-scene>
          <form onSubmit={handleSubmit} onInput={() => setPreviewName("")}>
            <p className="section-label">Get in touch</p>
            <h2>Contact.</h2>
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
