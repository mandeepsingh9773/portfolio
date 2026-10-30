export default function Section({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 py-14 sm:py-16 ${className}`}
    >
      <h2
        id={`${id}-heading`}
        className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted"
      >
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
