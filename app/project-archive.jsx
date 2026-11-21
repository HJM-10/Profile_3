"use client";

import { useState } from "react";
import { projects } from "./project-catalog";

const categories = [...new Set(projects.map(project => project.category))];

export default function ProjectArchive() {
  const [category, setCategory] = useState("");
  const visibleProjects = category
    ? projects.filter(project => project.category === category)
    : projects;

  return (
    <section className="project-archive" id="all-projects" aria-labelledby="archive-title">
      <div className="project-archive-header">
        <h2 id="archive-title">All projects</h2>
        <label>
          <span id="project-category-label">Category</span>
          <select aria-labelledby="project-category-label" value={category} onChange={event => setCategory(event.target.value)}>
            <option value="">All categories</option>
            {categories.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <p className="archive-count" role="status">{visibleProjects.length} projects</p>
      <div className="catalog-list">
        {visibleProjects.map(project => (
          <details key={project.title} className="catalog-project">
            <summary>
              <span className="catalog-title">{project.title}</span>
              <span className="catalog-status">{project.status}</span>
            </summary>
            <p>{project.description}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
