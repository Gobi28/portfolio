import React, { useEffect } from "react";
import { X, Database, GitBranch, Sparkles, Play } from "lucide-react";
import { profile, skillBars } from "../data/resumeData.js";
import profileImg from "../assets/profile.jpg";
import "./WhoAmIModal.css";

export default function WhoAmIModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="whoami-backdrop" onClick={onClose}>
      <button className="mono whoami-close" onClick={onClose} aria-label="Close">
        <X size={14} /> close [esc]
      </button>

      <div className="whoami-card" onClick={(e) => e.stopPropagation()}>
        <div className="whoami-avatar-col">
          <div className="whoami-avatar-wrap">
            <span className="whoami-orbit-icon orbit-tl">
              <Sparkles size={13} />
            </span>
            <span className="whoami-orbit-icon orbit-tr">
              <Play size={12} />
            </span>
            <span className="whoami-orbit-icon orbit-bl">
              <Database size={13} />
            </span>
            <span className="whoami-orbit-icon orbit-br">
              <GitBranch size={13} />
            </span>

            <div className="whoami-avatar">
              <img src={profileImg} alt={profile.name} />
            </div>
          </div>
        </div>

        <div className="whoami-info-col">
          <p className="mono whoami-command">$ whoami --verbose_</p>
          <h3 className="display whoami-name">{profile.name}</h3>
          <p className="mono whoami-class">Class: Full-Stack Developer · Lvl 1 DSA Practitioner</p>

          <div className="whoami-bars">
            {skillBars.map((s) => (
              <div className="whoami-bar-row" key={s.label}>
                <div className="whoami-bar-labels mono">
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className="whoami-bar-track">
                  <div className="whoami-bar-fill" style={{ width: `${s.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
