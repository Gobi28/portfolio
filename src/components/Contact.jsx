import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { profile } from "../data/resumeData.js";
import "./Sections.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — link still works as a fallback
    }
  };

  return (
    <section id="contact" className="container section">
      <SectionLabel number="06" filename="contact.md" />

      <h3 className="display contact-heading">Building something interesting? Let's talk.</h3>
      <p className="contact-text">
        I'm open to internships, opportunities, and anything that lets me build and learn. Reach out
        through any of the channels below.
      </p>

      <div className="terminal-card">
        <div className="terminal-dots">
          <span className="wdot" />
          <span className="wdot" />
          <span className="wdot" />
          <button className="mono terminal-copy" onClick={copyEmail}>
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "copied!" : "copy email"}
          </button>
        </div>
        <div className="terminal-body mono">
          <p className="term-cmd">$ open email →</p>
          <p className="term-out">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p className="term-cmd">$ open phone →</p>
          <p className="term-out">
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
          </p>
          <p className="term-cmd">$ open github →</p>
          <p className="term-out">
            <a href={profile.github}>{profile.github.replace("https://", "")}</a>
          </p>
          <p className="term-cmd">$ open linkedin →</p>
          <p className="term-out">
            <a href={profile.linkedin}>{profile.linkedin.replace("https://", "")}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
