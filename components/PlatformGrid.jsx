import { Globe, Sparkles, Mail, Search } from "lucide-react";

const defaultApps = [
  {
    title: "Website Editing",
    desc: "Customize every detail with Esteemed Create, our AI-native drag-and-drop builder. No code required.",
    icon: Globe,
    color: "#DCEDE0",
  },
  {
    title: "Design Intelligence",
    desc: "Your AI creative partner for designs, images and copy — with Agents that keep working once you're live.",
    icon: Sparkles,
    color: "#E4DBF0",
  },
  {
    title: "Business Email",
    desc: "Make it official with Business Email from Google Workspace — set up with your domain in minutes.",
    icon: Mail,
    color: "#E0E9F2",
  },
  {
    title: "Domains",
    desc: "Register your dream domain. Free WHOIS privacy, SSL and premium DNS included.",
    icon: Search,
    color: "#FFF8D6",
  },
];

export default function PlatformGrid({
  title = "Everything you need to grow in one platform",
  subtitle = "Get access to experts and the tools you need to grow your business. From reliable and affordable hosting to content to integrated software.",
  apps,
}) {
  const items = apps || defaultApps;

  return (
    <section className="py-20 px-6">
      <div className="mx-auto" style={{ maxWidth: 1800 }}>
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            {title}
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((app) => (
            <div
              key={app.title}
              className="group relative rounded-2xl p-8 flex flex-col transition-shadow hover:shadow-lg overflow-hidden"
              style={{ background: app.color || "#F5F5F0", minHeight: 260 }}
            >
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm">
                  <app.icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{app.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{app.desc}</p>
              <span className="mt-auto pt-4 text-sm font-bold text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
