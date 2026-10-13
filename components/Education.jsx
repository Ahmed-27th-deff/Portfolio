import { education } from "@/data/content";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="education" className="bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionTitle tag={education.tag} top={education.titleTop} italic={education.titleItalic} />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="border border-line bg-card p-6">
            <p className="text-xs text-lime">{education.degree.date}</p>
            <h3 className="mt-2 text-lg font-medium">{education.degree.school}</h3>
            <p className="mt-1 text-sm text-white/65">{education.degree.name}</p>
          </div>

          <div className="border border-line bg-card p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Certifications</h3>
            <ul className="space-y-2 text-sm">
              {education.certs.map((c) => (
                <li key={c.name}>
                  <span className="text-white">{c.name}</span>
                  <span className="text-white/50"> – {c.org}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-line bg-card p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Languages</h3>
            <ul className="space-y-2 text-sm">
              {education.languages.map((l) => (
                <li key={l.name}>
                  <span className="text-white">{l.name}</span>
                  <span className="text-white/50"> – {l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
