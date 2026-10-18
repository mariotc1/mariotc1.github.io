export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-brand text-4xl leading-[1.05] tracking-tight text-text-primary sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-lg text-text-secondary ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
