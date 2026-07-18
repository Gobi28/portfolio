import React from "react";
import "./SectionLabel.css";

export default function SectionLabel({ number, filename }) {
  return (
    <div className="section-label">
      <span className="mono section-label-number">{number}</span>
      <h2 className="display section-label-filename">{filename}</h2>
      <span className="section-label-rule" />
    </div>
  );
}
