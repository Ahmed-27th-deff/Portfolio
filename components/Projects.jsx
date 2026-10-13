"use client";

import { useState } from "react";
import { projects } from "@/data/content";
import SectionTitle from "./SectionTitle";
import SafeImage from "./SafeImage";
import VideoModal, { getYouTubeId } from "./VideoModal";

export default function Projects() {
  const [active, setActive] = useState(null); // { id, title } of the open video

  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionTitle tag={projects.tag} top={projects.titleTop} italic={projects.titleItalic} center />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.items.map((p) => {
            const videoId = getYouTubeId(p.youtube);
            return (
              <article key={p.title} className="flex flex-col border border-line bg-card">
                <div className="aspect-[16/10] overflow-hidden border-b border-line">
                  <SafeImage
                    src={p.image}
                    alt={`${p.title} screenshots`}
                    label={`Add screenshot: public${p.image}`}
                    lazy
                    className="h-full w-full object-cover object-top"
                  />
                </div>

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
    </section>
  );
}
