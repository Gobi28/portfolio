import React from "react";
import SectionLabel from "./SectionLabel.jsx";
import { education } from "../data/resumeData.js";
import "./Sections.css";

export default function Education() {
  const cgpaValue = 8.14;
  const pct = (cgpaValue / 10) * 100;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <section id="education" className="container section">
      <SectionLabel number="05" filename="education.yml" />

      <div className="edu-card">
        <div className="edu-ring-wrap">
          <svg viewBox="0 0 100 100" className="edu-ring">
            <circle cx="50" cy="50" r={radius} className="edu-ring-track" />
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="edu-ring-fill"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="edu-ring-label">
            <span className="display edu-ring-number">{cgpaValue}</span>
            <span className="mono edu-ring-sub">/ 10 CGPA</span>
          </div>
        </div>

        <div className="edu-info">
          <p className="mono edu-tag">degree:</p>
          <h3 className="display edu-degree">{education.degree}</h3>
          <p className="mono edu-school">{education.school}</p>
          <div className="edu-meta">
            <span className="mono edu-meta-chip">{education.years}</span>
            <span className="mono edu-meta-chip">{education.cgpa}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
