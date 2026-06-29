import Link from "next/link";

export default function ShellPlaceholder({
  title,
  description,
  status = "In progress",
  actions = [],
}) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-es-lg border border-es-border bg-es-surface p-es-6">
        <div className="mb-es-5 inline-flex rounded-full border-2 border-es-pill-outline px-es-3 py-es-1 text-es-sm font-es-semibold text-es-fg-1">
          {status}
        </div>
        <h1 className="text-es-3xl font-es-semibold tracking-es-tight text-es-fg-1">
          {title}
        </h1>
        <p className="mt-es-3 max-w-3xl text-es-base leading-es-relaxed text-es-fg-2">
          {description}
        </p>

        {actions.length > 0 && (
          <div className="mt-es-6 flex flex-wrap gap-es-3">
            {actions.map((action) => {
              const className = action.primary
                ? "inline-flex items-center justify-center rounded-es-sm bg-es-yellow px-es-4 py-es-2 text-es-sm font-es-medium text-es-fg-on-yellow transition-colors hover:bg-es-yellow-hover"
                : "inline-flex items-center justify-center rounded-es-sm border border-es-border bg-es-surface px-es-4 py-es-2 text-es-sm font-es-medium text-es-fg-1 transition-colors hover:bg-es-surface-alt";

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
