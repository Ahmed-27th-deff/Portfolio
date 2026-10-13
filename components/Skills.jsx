import { skills } from "@/data/content";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionTitle tag={skills.tag} top={skills.titleTop} italic={skills.titleItalic}>
          <p className="mt-4 max-w-md text-sm text-white/60">{skills.text}</p>
        </SectionTitle>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((g) => (
            <div key={g.name} className="border border-line bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">{g.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="chip">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
