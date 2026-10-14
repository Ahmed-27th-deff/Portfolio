"use client";

import { useState } from "react";
import { projects } from "@/data/content";
import SectionTitle from "./SectionTitle";
import SafeImage from "./SafeImage";
import VideoModal, { getYouTubeId } from "./VideoModal";
import GalleryModal from "./GalleryModal";

export default function Projects() {
  const [active, setActive] = useState(null); // { id, title } of the open video
  const [gallery, setGallery] = useState(null); // { title, images } of the open screenshot gallery

  const openGallery = (p) => {
    const images = (p.gallery?.length ? p.gallery : [p.image]).filter(Boolean);
    setGallery({ title: p.title, images });
  };

  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionTitle tag={projects.tag} top={projects.titleTop} italic={projects.titleItalic} center />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.items.map((p) => {
            const videoId = getYouTubeId(p.youtube);
            return (
              <article
                key={p.title}
                className="flex cursor-pointer flex-col border border-line bg-card transition hover:border-white/30"
                onClick={(e) => {
                  if (e.target.closest("a, button")) return;
                  if (window.getSelection()?.toString()) return; // don't open while selecting text
                  openGallery(p);
                }}
              >
                <button
                  type="button"
                  onClick={() => openGallery(p)}
                  aria-label={`View screenshots of ${p.title}`}
                  className="group relative block aspect-[16/10] w-full overflow-hidden border-b border-line text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-lime"
                >
                  <SafeImage
                    src={p.image}
                    alt={`${p.title} screenshots`}
                    label={`Add screenshot: public${p.image}`}
                    lazy
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="inline-flex items-center gap-2 border border-lime bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-lime">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="16" rx="1" />
                        <path d="M3 16l5-5 4 4 3-3 6 6" />
                        <circle cx="8.5" cy="9" r="1.5" />
                      </svg>
                      View gallery
                    </span>
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-2xl font-medium">{p.title}</h3>
                    <p className="text-xs text-white/50">{p.subtitle}</p>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-white/70">{p.description}</p>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/60">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn-lime">
                      View code
                    </a>

                    {videoId ? (
                      <button
                        type="button"
                        className="btn-ghost"
                        onClick={() => setActive({ id: videoId, title: p.title })}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M6 4l14 8-14 8z" />
                        </svg>
                        Watch demo
                      </button>
                    ) : (
                      p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                          Watch demo
                        </a>
                      )
                    )}
                  </div>
                  <p className="mt-3 break-all text-xs text-white/40">{p.repoLabel}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {active && <VideoModal videoId={active.id} title={active.title} onClose={() => setActive(null)} />}

      {gallery && (
        <GalleryModal title={gallery.title} images={gallery.images} onClose={() => setGallery(null)} />
      )}
    </section>
  );
}
