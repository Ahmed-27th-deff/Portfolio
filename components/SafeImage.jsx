"use client";

import { useState } from "react";

// Shows the image if the file exists, otherwise a clear placeholder
// so the layout never breaks while you add your screenshots.
export default function SafeImage({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#171717] text-center text-xs text-white/40 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="px-4">{label || "Add image"}</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}
