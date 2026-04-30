import Link from "next/link";

export const metadata = {
  title: "Code of Conduct",
  description: "Esteemed's code of conduct outlines the standards of behavior expected of everyone in our community and workplace.",
};

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
            Code of Conduct
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Our standards for behavior and expectations for everyone in the Esteemed community.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-zinc-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-ink mb-4">Our Pledge</h2>
            <p>
              We as members, contributors, and leaders pledge to make participation in the Esteemed community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink mb-4">Our Standards</h2>
            <p className="mb-4">Examples of behavior that contributes to a positive environment include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Demonstrating empathy and kindness toward other people</li>
              <li>Being respectful of differing opinions, viewpoints, and experiences</li>
              <li>Giving and gracefully accepting constructive feedback</li>
              <li>Accepting responsibility and apologizing to those affected by our mistakes</li>
              <li>Focusing on what is best for the overall community</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink mb-4">Enforcement</h2>
            <p>
              Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the Esteemed team at <a href="mailto:conduct@esteemed.io" className="text-blue-600 hover:underline">conduct@esteemed.io</a>. All complaints will be reviewed and investigated promptly and fairly. Community leaders are obligated to respect the privacy and security of the reporter of any incident.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink mb-4">Scope</h2>
            <p>
              This Code of Conduct applies within all Esteemed community spaces -- including our Discord, events, and any project or engagement facilitated through the Esteemed platform. It also applies when an individual is officially representing the Esteemed community in public spaces.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions about our policies?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink text-sm font-bold hover:bg-accent-hover transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
