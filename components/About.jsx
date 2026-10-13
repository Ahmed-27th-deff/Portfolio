import { about } from "@/data/content";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-panel">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle tag={about.tag} top={about.titleTop} italic={about.titleItalic} />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">{about.text}</p>
          <ul className="mt-6 grid max-w-md grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {about.checks.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b9f43a" strokeWidth="3" aria-hidden="true">
                  <path d="m4 12 5 5L20 6" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-lime mt-8">
            Get in touch
          </a>
        </div>

        <dl className="grid grid-cols-2 gap-4">
          {about.stats.map((s) => (
            <div key={s.label} className="border border-line bg-card px-4 py-8 text-center">
              <dt className="order-2 mt-2 text-xs text-white/60">{s.label}</dt>
              <dd className="text-4xl font-medium sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
