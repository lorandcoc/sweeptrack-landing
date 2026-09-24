/*
 * Copy column shared by the Spotlight feature demos: a title, one paragraph,
 * and the specifics as a plain list with small square markers (the same
 * marker the homepage uses). Presentational only.
 */
export default function SpotlightCopy({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <>
      <h3 className="font-display text-2xl md:text-[1.9rem] leading-tight [text-wrap:balance]">{title}</h3>
      <p className="mt-4 text-muted text-base leading-relaxed">{desc}</p>
      <ul className="mt-6 space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-[15px] text-foreground/85 leading-snug">
            <span className="mt-[0.5em] h-[5px] w-[5px] shrink-0 bg-white/40" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>
    </>
  );
}
