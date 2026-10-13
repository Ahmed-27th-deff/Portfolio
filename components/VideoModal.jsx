"use client";

import { useEffect, useRef } from "react";

// Accepts a bare 11-character ID or any common YouTube URL
// (watch?v=, youtu.be/, shorts/, embed/) and returns the video ID.
export function getYouTubeId(input) {
  if (!input) return "";
  const value = input.trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  const match = value.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
  return match ? match[1] : "";
}

export default function VideoModal({ videoId, title, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  if (!videoId) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} demo video`}
      onClick={onClose}
    >
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="truncate text-sm text-white/80">{title} demo</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition hover:border-lime hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
            aria-label="Close video"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="aspect-video w-full border border-line bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={`${title} demo video`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>

        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs text-white/50 hover:text-lime"
        >
          Video not playing? Open it on YouTube
        </a>
      </div>
    </div>
  );
}
