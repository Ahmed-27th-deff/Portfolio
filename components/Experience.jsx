import { experience } from "@/data/content";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionTitle tag={experience.tag} top={experience.titleTop} italic={experience.titleItalic} />

        <ol className="mt-10 space-y-4 border-l border-lime/40 pl-6 sm:pl-10">
          {experience.items.map((e) => (
            <li key={e.role} className="relative border border-line bg-card p-6 sm:p-8">
              <span className="absolute -left-[31px] top-8 h-3 w-3 bg-lime sm:-left-[47px]" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-medium">{e.role}</h3>
                <p className="text-xs text-lime">{e.date}</p>
              </div>
              <p className="mt-1 text-sm text-white/60">{e.org}</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/75">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
