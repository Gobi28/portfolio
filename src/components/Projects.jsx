import React from "react";
import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { projects, experience } from "../data/resumeData.js";
import "./Sections.css";

const GRADIENTS = [
  "linear-gradient(135deg, #4f7cff, #6366f1)",
  "linear-gradient(135deg, #22d3ee, #4f7cff)",
];

export default function Projects() {
  return (
    <section id="projects" className="container section">
      <SectionLabel number="03" filename="projects.tsx" />

      {projects.map((p, i) => (
        <article className="project-card" key={p.number}>
          <div className="project-banner" style={{ background: GRADIENTS[i % GRADIENTS.length] }}>
            <span className="mono project-tag">{p.tag}</span>
            <span className="display project-number">{p.number}</span>
          </div>
          <div className="project-body">
            <p className="mono project-eyebrow">Project {p.number}</p>
            <h3 className="display project-name">{p.name}</h3>
            <p className="project-description">{p.description}</p>
            <div className="project-stack">
              {p.stack.map((s) => (
                <span className="mono stack-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <a href='https://github.com/Gobi28' className="mono project-link">
              View on GitHub <ArrowRight size={14} />
            </a>
          </div>
        </article>
      ))}

      <div className="experience-note">
        <p className="mono experience-note-label">// currently</p>
        {experience.map((job) => (
          <div key={job.title}>
            <p className="experience-title">
              {job.title} <span className="mono experience-dates">{job.dates}</span>
            </p>
            <p className="mono experience-company">{job.company}</p>
            <ul className="experience-points">
              {job.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
