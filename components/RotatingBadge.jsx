export default function RotatingBadge({ href = "#contact", text = "HIRE ME • HIRE ME • HIRE ME • " }) {
  return (
    <a
      href={href}
      aria-label="Contact me"
      className="group relative flex h-28 w-28 items-center justify-center rounded-full border border-lime/60 sm:h-32 sm:w-32"
    >
      <svg className="spin-slow absolute inset-0" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fill="#b9f43a" fontSize="9.5" letterSpacing="2.2" fontWeight="600">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink transition group-hover:bg-white">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M18 6 6 18M6 8v10h10" />
        </svg>
      </span>
    </a>
  );
}
