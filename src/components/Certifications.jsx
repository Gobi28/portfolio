import React from "react";
import { Award } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { certifications } from "../data/resumeData.js";
import "./Sections.css";

export default function Certifications() {
  return (
    <section id="certifications" className="container section">
      <SectionLabel number="04" filename="certifications.json" />

      <div className="cert-grid">
        {certifications.map((c) => (
          <div className="cert-card" key={c.name}>
            <div className="cert-card-top">
              <span className="cert-icon">
                <Award size={16} />
              </span>
              <span className="mono cert-year">{c.year}</span>
            </div>
            <p className="cert-name">{c.name}</p>
            <p className="mono cert-issuer">{c.issuer}</p>
            <span className="mono cert-verified">✓ verified</span>
          </div>
        ))}
      </div>
    </section>
  );
}
