import { hero, site } from "@/data/content";
import Asterisk from "./Asterisk";
import RotatingBadge from "./RotatingBadge";
import SafeImage from "./SafeImage";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Asterisk
        className="pointer-events-none absolute -right-12 bottom-8 hidden opacity-90 lg:block"
        size={260}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:pt-16">
        {/* Photo + vertical skills */}
        <div className="relative mx-auto flex w-full max-w-sm justify-center lg:mx-0">
          <div className="relative">
            <div className="absolute -right-4 -top-6 z-10 sm:-right-10">
              <RotatingBadge />
            </div>
            <div className="h-[380px] w-[300px] overflow-hidden rounded-t-full border border-white/20 bg-card sm:h-[430px] sm:w-[340px]">
              <SafeImage
                src={site.photo}
                alt={`${site.name} portrait`}
                label="Add your photo at public/me.jpg"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
              {hero.sideSkills.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="mb-4 flex items-center gap-2 text-lg">
            <span aria-hidden="true">👋</span>
            {hero.greeting}
          </p>
          <h1 className="headline text-4xl sm:text-6xl lg:text-7xl">
            {hero.headlineTop}
            <br />
            <span className="serif-italic text-[1.1em]">{hero.headlineItalic}</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">{hero.text}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={site.cv} download className="btn-lime">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" />
              </svg>
              Download CV
            </a>
            <a href="#projects" className="btn-ghost">
              View projects
            </a>
          </div>

          <ul className="mt-10 hidden flex-wrap items-center gap-2 sm:flex">
            <li className="mr-2 text-xs text-white/50">Best skills on:</li>
            {hero.sideSkills.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
