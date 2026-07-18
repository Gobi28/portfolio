import React, { useEffect, useState } from "react";
import { GitBranch } from "lucide-react";
import "./StatusBar.css";

export default function StatusBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? Math.min(100, Math.round((scrollTop / height) * 100)) : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="statusbar mono">
      <span className="statusbar-branch">
        <GitBranch size={13} /> main
      </span>
      <span>{progress}%</span>
    </div>
  );
}
