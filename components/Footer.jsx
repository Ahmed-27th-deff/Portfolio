import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-panel">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-white/50 sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          {site.role} · {site.location}
        </p>
      </div>
    </footer>
  );
}
