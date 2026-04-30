import Link from "next/link";

const columns = [
  {
    title: "Products",
    links: [
      { name: "Create", href: "/products/create" },
      { name: "Cloud", href: "/products/cloud" },
      { name: "Agents", href: "/products/agents" },
      { name: "Intelligence", href: "/products/intelligence" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Colleagues", href: "/services/colleagues" },
      { name: "Support", href: "/services/support" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Use Cases", href: "/solutions" },
      { name: "Roles", href: "/solutions/roles" },
      { name: "Segments", href: "/solutions/segments" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Newsroom", href: "/newsroom" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Code of Conduct", href: "/code-of-conduct" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-3">
            <img
              src="/esteemed-logo.svg"
              alt="Esteemed"
              className="w-28 h-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="text-zinc-400">AI + Human gold standard</span>
          </div>
          <p>&copy; 2026 Esteemed.</p>
        </div>
      </div>
    </footer>
  );
}
