import Link from "next/link";

export default function ShellPlaceholder({
  title,
  description,
  status = "In progress",
  actions = [],
}) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-xl border border-zinc-200 bg-white p-6">
        <div className="mb-5 inline-flex rounded-full border-2 border-zinc-300 px-3 py-1 text-sm font-semibold text-ink">
          {status}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-500">
          {description}
        </p>

        {actions.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map((action) => {
              const className = action.primary
                ? "inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent-hover"
                : "inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-zinc-50";

              if (action.external) {
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {action.label}
                  </a>
                );
              }

              return (
                <Link key={action.label} href={action.href} className={className}>
                  {action.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
