import React, { useEffect, useState } from "react";
import { sections } from "../data/resumeData.js";
import "./BrowserTabBar.css";

function useISTClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function BrowserTabBar({ active, scrollTo }) {
  const time = useISTClock();

  return (
    <div className="tabbar">
      <div className="tabbar-inner">
        <div className="tabbar-window-dots">
          <span className="wdot" />
          <span className="wdot" />
          <span className="wdot" />
        </div>
        <span className="mono tabbar-domain">gobi.dev</span>
        {time && (
          <span className="mono tabbar-clock" title="Local time, Dindigul, India">
            {time} IST
          </span>
        )}

        <div className="tabbar-dots">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`tabbar-dot-btn ${active === s ? "active" : ""}`}
              aria-label={`Go to ${s}`}
              title={s}
            >
              <span className="tabbar-dot" />
            </button>
          ))}
        </div>

        <button className="mono tabbar-cta" onClick={() => scrollTo("contact")}>
          say hi
        </button>
      </div>
    </div>
  );
}
