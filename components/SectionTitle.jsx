import { SmallAsterisk } from "./Asterisk";

export default function SectionTitle({ tag, top, italic, center = false, children }) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className={`mb-3 flex items-center gap-2 text-xs text-lime ${center ? "justify-center" : ""}`}>
        <SmallAsterisk />
        {tag}
      </p>
      <h2 className="headline text-3xl sm:text-4xl lg:text-5xl">
        {top} <span className="serif-italic text-[1.12em]">{italic}</span>
      </h2>
      {children}
    </div>
  );
}
