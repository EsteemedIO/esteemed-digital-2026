"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { PlusIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Smartphone, Globe, AppWindow, BarChart3, Presentation } from "lucide-react";

const appTypes = [
  { label: "Mobile App", icon: Smartphone },
  { label: "Website", icon: Globe },
  { label: "Web App", icon: AppWindow },
  { label: "Data Visualization", icon: BarChart3 },
  { label: "Slides", icon: Presentation },
];

const examplePrompts = [
  "A booking site for my dog grooming business...",
  "An e-commerce store with Square integration...",
  "A donation site for our nonprofit...",
  "A site for my law practice...",
];

const CREATE_URL = "https://create.esteemed.io";

export default function ChatHero() {
  const router = useRouter();
  const { data: session } = useSession();
  const [inputValue, setInputValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (inputValue) return;

    const currentPrompt = examplePrompts[placeholderIndex];
    let charIndex = 0;
    setIsTyping(true);
    setDisplayedPlaceholder("");

    const typeInterval = setInterval(() => {
      if (charIndex < currentPrompt.length) {
        setDisplayedPlaceholder(currentPrompt.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setPlaceholderIndex((prev) => (prev + 1) % examplePrompts.length);
        }, 3000);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [placeholderIndex, inputValue]);

  const handleSubmit = () => {
    if (session) {
      // Authenticated — go straight to Create
      const url = inputValue
        ? `${CREATE_URL}?prompt=${encodeURIComponent(inputValue)}`
        : CREATE_URL;
      window.location.href = url;
    } else {
      // Not authenticated — store prompt, trigger Keycloak login
      if (inputValue) {
        sessionStorage.setItem("esteemed_prompt", inputValue);
      }
      signIn("keycloak", {
        callbackUrl: inputValue
          ? `${CREATE_URL}?prompt=${encodeURIComponent(inputValue)}`
          : CREATE_URL,
      });
    }
  };

  return (
    <section
      id="chat-hero"
      className="flex flex-col items-center justify-center px-6 bg-accent"
      style={{ minHeight: "85vh", paddingTop: "5%", paddingBottom: "5%" }}
    >
      <div className="w-full max-w-[1080px] mx-auto text-center">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-ink text-white text-sm font-semibold tracking-wide">
            The AI + Human gold standard
          </span>
        </div>

        <h1 className="heading-1 mb-4">
          Build, Hire, and Ship smarter.
        </h1>

        <p className="subtitle mb-10 max-w-2xl mx-auto">
          AI to start. Hire experts to grow.
        </p>

        <div className="relative w-full max-w-[720px] mx-auto text-left">
          <div className="relative rounded-2xl border-2 border-zinc-300 bg-paper transition-shadow focus-within:shadow-lg focus-within:border-zinc-400">
            <div className="relative min-h-[120px] p-6 pb-16">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                rows={3}
                autoFocus
                className="w-full bg-transparent text-ink text-base resize-none outline-none"
              />
              {!inputValue && (
                <div className="absolute top-6 left-6 right-6 pointer-events-none text-base text-zinc-400">
                  {displayedPlaceholder}
                  {isTyping && (
                    <span className="inline-block w-0.5 h-5 ml-0.5 align-text-bottom animate-pulse bg-ink" />
                  )}
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-3">
              <button
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-zinc-200 text-zinc-400 hover:bg-zinc-100 hover:text-ink transition-colors"
                aria-label="Attach or sign in"
              >
                <PlusIcon className="w-5 h-5" />
              </button>

              <button
                onClick={handleSubmit}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-colors ${
                  inputValue
                    ? "bg-ink text-white hover:bg-ink/90"
                    : "bg-zinc-200 text-zinc-400 cursor-default"
                }`}
              >
                Build it
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* App type selector */}
        <div className="mt-6 flex md:flex-wrap md:justify-center gap-2 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible scrollbar-hide">
          {appTypes.map((type) => (
            <button
              key={type.label}
              onClick={() => setInputValue(type.label + " — ")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-ink text-sm font-medium hover:bg-accent-hover transition-colors whitespace-nowrap flex-shrink-0"
              style={{ border: "1.5px solid #282828" }}
            >
              <type.icon className="w-4 h-4" strokeWidth={1.5} />
              {type.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Real people from Colleagues, our 35,000-strong network, help you grow and support what you build.
        </p>
      </div>
    </section>
  );
}
