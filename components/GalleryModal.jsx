"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SafeImage from "./SafeImage";

// Popup gallery for one project's screenshots.
// images: array of paths (or { src, label }) shown in order; missing files are skipped.
export default function GalleryModal({ title, images = [], onClose }) {
  const items = useMemo(
    () =>
      images
        .filter(Boolean)
        .map((img) => (typeof img === "string" ? { src: img } : img)),
    [images]
  );

  const [failed, setFailed] = useState(() => new Set());
  const [index, setIndex] = useState(0);
  const closeRef = useRef(null);
  const touchX = useRef(null);

  const visible = useMemo(
    () => items.filter((img) => !failed.has(img.src)),
    [items, failed]
  );

  const safeIndex = visible.length ? Math.min(index, visible.length - 1) : 0;
  const current = visible[safeIndex];

  const goPrev = useCallback(() => {
    setIndex((i) => (visible.length ? (i - 1 + visible.length) % visible.length : 0));
  }, [visible.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (visible.length ? (i + 1) % visible.length : 0));
  }, [visible.length]);

  const markFailed = useCallback((src) => {
    setFailed((prev) => (prev.has(src) ? prev : new Set(prev).add(src)));
  }, []);

  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onCloseRef.current?.();
      else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [goPrev, goNext]);

  if (!items.length) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots gallery`}
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        touchX.current = null;
        if (start == null) return;
        const delta = e.changedTouches[0].clientX - start;
        if (Math.abs(delta) > 50) (delta > 0 ? goPrev : goNext)();
      }}
    >
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="truncate text-sm text-white/80">
            {title}
            <span className="ml-3 text-xs text-white/40">
              {current ? `${safeIndex + 1} / ${visible.length}` : "0 / 0"}
            </span>
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-white transition hover:border-lime hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
            aria-label="Close gallery"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="relative border border-line bg-card">
          {current ? (
            <div className="relative aspect-[16/10] w-full">
              <SafeImage
                src={current.src}
                alt={`${title} screenshot ${safeIndex + 1}`}
                label={current.label || `Add screenshot: public${current.src}`}
                onFail={() => markFailed(current.src)}
                className="h-full w-full object-contain"
              />

              {visible.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous screenshot"
                    className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/60 text-white transition hover:border-lime hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M15 6l-6 6 6 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next screenshot"
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/60 text-white transition hover:border-lime hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="flex aspect-[16/10] w-full items-center justify-center px-6 text-center text-xs text-white/40">
              Screenshots coming soon
            </div>
          )}
        </div>

        {visible.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {visible.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === safeIndex}
                className={`h-14 w-24 shrink-0 overflow-hidden border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime ${
                  i === safeIndex ? "border-lime" : "border-line opacity-60 hover:opacity-100"
                }`}
              >
                <SafeImage
                  src={img.src}
                  alt=""
                  label=""
                  onFail={() => markFailed(img.src)}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <p className="mt-3 hidden text-xs text-white/40 sm:block">
          {visible.length > 1 ? "Use ← → arrow keys, or swipe, to move between screenshots." : "Click anywhere outside to close."}
        </p>
      </div>
    </div>
  );
}
