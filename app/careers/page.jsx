import Link from "next/link";
import {
  HeartIcon,
  SunIcon,
  ChartBarIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  HandRaisedIcon,
  ArrowTrendingUpIcon
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Careers",
  description: "Join our mission to democratize AI and build technology that empowers every developer and enterprise.",
};

const departments = [
  {
    name: "Engineering",
    description: "Build the future of AI with cutting-edge research and scalable systems",
    openings: 8,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Research",
    description: "Advance the state of the art in machine learning and AI capabilities",
    openings: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Product",
    description: "Design experiences that democratize AI for developers and enterprises",
    openings: 3,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Sales & Marketing",
    description: "Help organizations transform their operations with AI technology",
    openings: 4,
    color: "from-orange-500 to-red-500"
  }
];

const jobs = [
  {
    title: "Senior AI Research Scientist",
    department: "Research",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "Lead breakthrough research in neural memory and organizational intelligence systems."
  },
  {
    title: "Staff Software Engineer - AI Infrastructure",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    description: "Design and build scalable infrastructure for training and deploying large language models."
  },
  {
    title: "Product Manager - Developer Tools",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Shape the future of AI developer experience and API products."
  },
  {
    title: "Enterprise Sales Director",
    department: "Sales & Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive growth by helping Fortune 500 companies adopt AI solutions."
  },
  {
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "Toronto, Canada / Remote",
    type: "Full-time",
    description: "Implement and optimize ML models for production deployment at scale."
  },
  {
    title: "Research Engineer - Language Models",
    department: "Research",
    location: "London, UK / Remote",
    type: "Full-time",
    description: "Advance large language model capabilities through novel training techniques."
  }
];

const benefits = [
  {
    icon: HeartIcon,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage plus wellness programs"
  },
  {
    icon: SunIcon,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge and maintain work-life balance"
  },
  {
    icon: ChartBarIcon,
    title: "Equity Package",
    description: "Competitive equity grants so you can share in our success"
  },
  {
    icon: BookOpenIcon,
    title: "Learning Budget",
    description: "$3,000 annual budget for conferences, courses, and professional development"
  },
  {
    icon: ComputerDesktopIcon,
    title: "Top-tier Equipment",
    description: "Latest MacBooks, monitors, and any equipment you need to do your best work"
  },
  {
    icon: GlobeAltIcon,
    title: "Remote-first",
    description: "Work from anywhere with quarterly team gatherings and office access"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white lg:text-6xl">
              Shape the future of{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                artificial intelligence
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl leading-8 text-zinc-600 dark:text-zinc-300">
              Join our mission to democratize AI and build technology that empowers every developer and enterprise to create amazing products
            </p>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Explore opportunities
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Find your place in building the future of AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {dept.name}
                    </h3>
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {dept.openings} openings
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Open positions
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Join talented people working on meaningful problems
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-sm font-medium text-white hover:from-indigo-700 hover:to-purple-700 transition">
                      Apply Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Why work at Esteemed?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            We're building something special and want you to thrive while doing it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
            Our culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2 justify-center">
                <RocketLaunchIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Move fast
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                We ship quickly and iterate based on real user feedback
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 justify-center">
                <HandRaisedIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Collaborate openly
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Best ideas win, regardless of where they come from
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 justify-center">
                <ArrowTrendingUpIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Think big
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                We're building technology that will transform entire industries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't see the right role?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for exceptional people. Send us your resume and tell us how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition">
              Send us your resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
              Learn more about us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
