import React from "react";
import SectionLabel from "./SectionLabel.jsx";
import { skillGroups } from "../data/resumeData.js";
import "./Sections.css";

const LABELS = {
  languages: "languages",
  full_stack: "full_stack",
  data_db: "data_db",
  tooling: "tooling",
  cs_core: "cs_core",
};

export default function Skills() {
  return (
    <section id="skills" className="container section">
      <SectionLabel number="02" filename="skills.json" />

      <div className="code-card mono">
        <p>{"{"}</p>
        {skillGroups.map((g, gi) => (
          <p className="code-indent skill-row" key={g.key}>
            <span className="code-str">"{LABELS[g.key]}"</span>: [
            <span className="skill-chip-inline">
              {g.items.map((it) => (
                <span className="skill-chip" key={it}>
                  {it}
                </span>
              ))}
            </span>
            ]{gi < skillGroups.length - 1 ? "," : ""}
          </p>
        ))}
        <p>{"}"}</p>
      </div>
    </section>
  );
}
