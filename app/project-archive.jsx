"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectArtwork, showcase } from "./project-artwork";
import "./project-showcase.css";

const groups = [showcase.slice(0, 6), showcase.slice(6, 12), showcase.slice(12, 18), showcase.slice(18)];
const chapterTitles = ["Applications", "Web experiences", "Tools and automation", "Research and experiments"];

export default function ProjectArchive() {
  const [active, setActive] = useState(0);
  const [openProject, setOpenProject] = useState(0);
  const dialog = useRef(null);
  const tracks = useRef([]);
  const panels = useRef([]);
  const lastActive = useRef(0);

  useEffect(() => {
    let frame = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    function paint() {
      frame = 0;
      if (reduced.matches) return;
      const height = window.innerHeight;
      let next = 0;
      groups.forEach((group, chapter) => {
        const track = tracks.current[chapter];
        if (!track) return;
        const rect = track.getBoundingClientRect();
        const distance = Math.max(1, rect.height - height);
        const progress = Math.max(0, Math.min(group.length - 1, -rect.top / distance * (group.length - 1)));
        const start = chapter * 6;
        track.style.setProperty("--chapter-progress", (progress / (group.length - 1)).toFixed(4));
        if (rect.top < height * .48) next = start + Math.round(progress);
        group.forEach((_, index) => {
          const offset = index - progress;
          const panel = panels.current[start + index];
          panel.style.setProperty("--offset", offset.toFixed(4));
          panel.style.setProperty("--distance", Math.min(Math.abs(offset), 4).toFixed(4));
          panel.style.setProperty("--layer", 10 - Math.round(Math.abs(offset) * 2));
          panel.style.setProperty("--visibility", Math.abs(offset) <= 1.9 ? "visible" : "hidden");
        });
      });
      if (next !== lastActive.current) {
        lastActive.current = next;
        setActive(next);
      }
    }

    function requestPaint() {
      if (!frame) frame = requestAnimationFrame(paint);
    }

    paint();
    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint);
    reduced.addEventListener("change", requestPaint);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", requestPaint);
      reduced.removeEventListener("change", requestPaint);
    };
  }, []);

  function navigate(index) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      panels.current[index]?.scrollIntoView({ block: "center" });
      setActive(index);
      return;
    }
    const track = tracks.current[Math.floor(index / 6)];
    const rect = track.getBoundingClientRect();
    const distance = Math.max(0, rect.height - window.innerHeight);
    const steps = Math.min(5, showcase.length - Math.floor(index / 6) * 6 - 1);
    const top = window.scrollY + rect.top + (index % 6) / Math.max(1, steps) * distance;
    window.scrollTo({ top: top + 1, behavior: Math.abs(top - window.scrollY) > window.innerHeight * 2 ? "instant" : "smooth" });
  }

  function showDetails(index) {
    setOpenProject(index);
    dialog.current.showModal();
  }

  const selected = showcase[openProject];

  return (
    <section className="project-showcase" id="all-projects" aria-labelledby="archive-title">
      <header className="showcase-heading">
        <h2 id="archive-title">All projects</h2>
        <label htmlFor="project-jump">Jump to a project</label>
        <select id="project-jump" value={active} onChange={event => navigate(Number(event.target.value))}>
          {showcase.map((project, index) => <option value={index} key={project.title}>{project.title}</option>)}
        </select>
      </header>

      {groups.map((group, chapter) => (
        <div className="showcase-track" ref={element => { tracks.current[chapter] = element; }} key={chapterTitles[chapter]} style={{ "--track-height": `${100 + (group.length - 1) * 68}svh` }}>
          <div className="showcase-stage">
            <div className="showcase-stage-top">
              <h3>{chapterTitles[chapter]}</h3>
              <div className="showcase-progress" aria-hidden="true"><span /></div>
            </div>
            <div className="showcase-deck">
              {group.map((project, index) => {
                const number = chapter * 6 + index;
                return (
                  <button
                    className="showcase-card"
                    type="button"
                    ref={element => { panels.current[number] = element; }}
                    style={{ "--offset": index, "--distance": index, "--layer": 10 - index, "--visibility": index < 2 ? "visible" : "hidden" }}
                    key={project.title}
                    onClick={() => showDetails(number)}
                    aria-label={`View ${project.title}`}
                    data-current={number === active}
                  >
                    <ProjectArtwork project={project} />
                  </button>
                );
              })}
            </div>
            <div className="showcase-stage-bottom">
              <button type="button" onClick={() => navigate(Math.max(0, active - 1))} disabled={active === 0}>Previous</button>
              <p>{showcase[chapter === Math.floor(active / 6) ? active : chapter * 6].status}</p>
              <button type="button" onClick={() => navigate(Math.min(showcase.length - 1, active + 1))} disabled={active === showcase.length - 1}>Next</button>
            </div>
          </div>
        </div>
      ))}

      <dialog className="showcase-dialog" ref={dialog} aria-labelledby="showcase-title">
        <form method="dialog"><button type="submit" autoFocus>Close</button></form>
        <ProjectArtwork project={selected} />
        <div className="showcase-dialog-copy">
          <p>{selected.status}{selected.image ? "" : " · Concept illustration"}</p>
          <h3 id="showcase-title">{selected.title}</h3>
          <p>{selected.description}</p>
        </div>
      </dialog>
    </section>
  );
}
