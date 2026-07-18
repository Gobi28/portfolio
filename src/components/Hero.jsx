import React, { useEffect, useState } from "react";
import { profile, tickerItems } from "../data/resumeData.js";
import WhoAmIModal from "./WhoAmIModal.jsx";
import profileImg from "../assets/profile.jpg";
import "./Hero.css";

export default function Hero({ scrollTo }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIndex];
    let timeout;

    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 45);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 25);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-ring">
            <div className="hero-avatar">
              <img src={profileImg} alt={profile.name} className="hero-avatar-img" />
            </div>
          </div>
          <button className="mono hero-click-pill" onClick={() => setModalOpen(true)}>
            Click here!
          </button>
        </div>

        <div className="hero-status">
          <span className="hero-status-dot" />
          <span className="mono">available for opportunities</span>
        </div>

        <h1 className="display hero-name">{profile.name}</h1>

        <p className="mono hero-role">
          $ {typed}
          <span className="cursor">_</span>
        </p>

        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions">
          <button className="mono btn btn-solid" onClick={() => scrollTo("projects")}>
            View projects
          </button>
          <button className="mono btn btn-outline" onClick={() => scrollTo("contact")}>
            Get in touch
          </button>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-track mono">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span className="ticker-item" key={i}>
              <span className="ticker-dot" /> {t}
            </span>
          ))}
        </div>
      </div>

      {modalOpen && <WhoAmIModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
