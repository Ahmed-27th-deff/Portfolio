// Outlined six-arm asterisk. Strokes are drawn first, then the shapes are
// filled with the background colour, leaving only the outer outline.
export default function Asterisk({ className = "", bg = "#151515", size = 200 }) {
  const arms = [0, 60, 120];
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="-60 -60 120 120"
      aria-hidden="true"
    >
      <g stroke="#b9f43a" strokeWidth="3" strokeLinejoin="miter">
        {arms.map((a) => (
          <rect key={a} x="-8" y="-52" width="16" height="104" fill="#b9f43a" transform={`rotate(${a})`} />
        ))}
      </g>
      <g fill={bg}>
        {arms.map((a) => (
          <rect key={a} x="-8" y="-52" width="16" height="104" transform={`rotate(${a})`} />
        ))}
      </g>
    </svg>
  );
}

export function SmallAsterisk({ className = "" }) {
  return (
    <svg className={className} width="12" height="12" viewBox="-6 -6 12 12" aria-hidden="true">
      <g stroke="#b9f43a" strokeWidth="1.4" strokeLinecap="round">
        <line x1="0" y1="-5" x2="0" y2="5" />
        <line x1="-4.3" y1="-2.5" x2="4.3" y2="2.5" />
        <line x1="-4.3" y1="2.5" x2="4.3" y2="-2.5" />
      </g>
    </svg>
  );
}
