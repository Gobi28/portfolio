import React from "react";
import SectionLabel from "./SectionLabel.jsx";
import { codeSnippet, profile } from "../data/resumeData.js";
import "./Sections.css";

export default function About() {
  return (
    <section id="about" className="container section">
      <SectionLabel number="01" filename="about.js" />

      <div className="code-card mono">
        <p className="code-comment">// who's writing this code</p>
        <p>
          <span className="code-kw">const</span> developer = {"{"}
        </p>
        <p className="code-indent">
          name: <span className="code-str">"{codeSnippet.name}"</span>,
        </p>
        <p className="code-indent">
          role: <span className="code-str">"{codeSnippet.role}"</span>,
        </p>
        <p className="code-indent">
          focus: [{codeSnippet.focus.map((f, i) => (
            <span key={f}>
              <span className="code-str">"{f}"</span>
              {i < codeSnippet.focus.length - 1 ? ", " : ""}
            </span>
          ))}],
        </p>
        <p className="code-indent">
          status: <span className="code-str">"{codeSnippet.status}"</span>
        </p>
        <p>{"};"}</p>
      </div>

      <div className="about-text">
        {profile.aboutParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
