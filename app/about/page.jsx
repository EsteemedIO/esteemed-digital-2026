import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Esteemed empowers every developer and enterprise to build amazing products and capture true business value with language AI.",
};

const founders = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former VP of Engineering at Google Cloud AI, Sarah leads Esteemed's vision for democratizing enterprise AI capabilities.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    bio: "Ex-Principal Engineer at OpenAI, Marcus architected the core infrastructure powering Esteemed's agent ecosystem.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Dr. Priya Patel",
    role: "Chief Scientist & Co-founder",
    bio: "AI Research Director from Stanford, Priya drives breakthrough research in neural memory and organizational intelligence.",
    image: "/api/placeholder/150/150"
  }
];

const investors = [
  { name: "Andreessen Horowitz", logo: "/api/placeholder/120/40" },
  { name: "Google Ventures", logo: "/api/placeholder/120/40" },
  { name: "Sequoia Capital", logo: "/api/placeholder/120/40" },
  { name: "Index Ventures", logo: "/api/placeholder/120/40" },
  { name: "Kleiner Perkins", logo: "/api/placeholder/120/40" },
  { name: "First Round", logo: "/api/placeholder/120/40" }
];

const offices = [
  { city: "San Francisco", address: "123 Market St, Suite 400\nSan Francisco, CA 94105" },
  { city: "New York", address: "456 Broadway, Floor 12\nNew York, NY 10013" },
  { city: "London", address: "789 Oxford St, Level 3\nLondon W1A 1AB, UK" },
  { city: "Toronto", address: "321 King St W, Suite 800\nToronto, ON M5V 1J5" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white lg:text-6xl">
              We're building the future of{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                language AI
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl leading-8 text-zinc-600 dark:text-zinc-300">
              Esteemed empowers every developer and enterprise to build amazing products and capture true business value with language AI
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
              Research-driven innovation
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              We're committed to advancing the state of the art in machine learning and AI research.
              Our goal is to create technology that truly understands and commands language in compelling ways.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Built on transformer architecture, our large language models provide powerful NLP solutions
              without the need for expensive ML development, helping companies revolutionize their operations.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">50B+</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Parameters Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="text-2xl font-medium text-zinc-900 dark:text-white italic">
            "Very large language models are now giving computers a much better understanding of human communication."
          </blockquote>
          <cite className="mt-4 block text-lg text-zinc-600 dark:text-zinc-400">
            — Geoffrey Hinton, AI Pioneer
          </cite>
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Meet our team
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            We're ML/AI engineers, thinkers, and champions motivated by the potential to make our world a better place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto w-32 h-32 mb-4">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full rounded-full object-cover border-4 border-zinc-200 dark:border-zinc-700"
                />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-1">
                {founder.name}
              </h3>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3">
                {founder.role}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Investors Section */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Backed by leading investors
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Supported by the world's top technology and venture capital firms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {investors.map((investor, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={investor.logo}
                  alt={investor.name}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Offices Section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Our offices
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Global presence with local expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                {office.city}
              </h3>
              <address className="text-sm text-zinc-600 dark:text-zinc-300 not-italic whitespace-pre-line">
                {office.address}
              </address>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to build the future?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our mission to democratize AI and transform how the world works with language
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition">
              View Open Positions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
