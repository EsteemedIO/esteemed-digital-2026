export const authors = {
  "matt-pritchard": {
    name: "Matt Pritchard",
    image: "/images/authors/matt-pritchard.png",
    bio: "Matt Pritchard is the VP of Marketing & Product for Esteemed, and an active member of Colleagues. He specializes in creating marketing content for recruitment agencies, start-ups, and freelancers.",
  },
  "brigitte-yuille": {
    name: "Brigitte Yuille Ayerves Valderas",
    image: "/images/authors/brigitte-yuille.jpg",
    bio: "Brigitte Yuille Ayerves Valderas is a Drupal Academy student who has supported Drupal website migrations in corporate marketing departments as a project manager and copywriter. As a journalist, she has written articles on topics like finance and technology for Forbes, Investopedia, Bankrate and The Financial Times (U.K.). Brigitte has earned graduate degrees in Communications and Business. She currently resides in the D.C. metropolitan area.",
  },
  "jenn-lackey": {
    name: "Jenn Lackey",
    image: "/images/authors/jennlackey.jpg",
    bio: "Jenn Lackey is a marketing content strategist and copywriter with a journalism, technology, and sales background. She has worked with B2B and B2C clients within the healthcare, environmental, SaaS, and wireless sectors, supporting her endless curiosity and drive to grow business.",
  },
  "nell-gladson": {
    name: "Nell Gladson",
    image: "/images/authors/nellgladson.jpg",
    bio: "Nell Gladson is an SEO copywriter and content strategist with a keen understanding of digital marketing best practices for the technology, healthcare, higher education, and nonprofit sectors.",
  },
  "casey-horgan": {
    name: "Casey Horgan",
    image: "/images/authors/caseyhorgan.jpeg",
    bio: "Casey Horgan is an experienced editor, B2B content marketer, and wordsmith. Her talents include SEO, content creation, marketing research, and graphic design. When she's not writing, she studies primary source documents at the Accademia di Merano's Ezra Pound Research Center in northern Italy.",
  },
  "kelton-reid": {
    name: "Kelton Reid",
    image: "/images/authors/kelton-reid.jpg",
    bio: 'Kelton Reid is an independent podcast producer, writer, mediaphile, and the former VP of Multimedia Production for Copyblogger. Find out how great writers keep the cursor moving on his podcast The Writer Files, and connect with Kelton on <a href="https://x.com/KeltonReid" target="_blank" rel="noopener noreferrer">X (formerly Twitter)</a>.',
  },
};

// Map post slugs to author keys
export const postAuthors = {
  "the-unbound-knowledge-worker": "matt-pritchard",
  "introducing-esteemed-curate": "matt-pritchard",
  "how-talent-sourcing-can-solve-your-diversity-problem": "brigitte-yuille",
  "10-remote-work-benefits-and-best-practices-2025": "jenn-lackey",
  "how-build-strong-remote-culture": "jenn-lackey",
  "structured-interviewing-made-easy-ai": "nell-gladson",
  "remote-team-retreats-8-reasons-why-your-company-needs-one": "casey-horgan",
  "ultimate-guide-fractional-ctos": "nell-gladson",
  "8-tips-hosting-remote-team-retreat": "casey-horgan",
  "how-hire-fractional-cto-3-ways-find-top-talent": "nell-gladson",
  "how-fractional-cto-can-affect-your-business-bottom-line": "nell-gladson",
  "what-fractional-cto-and-why-hire-one": "nell-gladson",
  "your-approach-hiring-wrong": "brigitte-yuille",
  "80-point-employee-onboarding-checklist-long-term-success": "casey-horgan",
  "are-happier-employees-more-productive": "jenn-lackey",
  "should-i-consider-contract-staffing": "brigitte-yuille",
  "can-remote-work-increase-employee-productivity": "jenn-lackey",
};

export function getAuthorForPost(slug) {
  const authorKey = postAuthors[slug];
  if (!authorKey) return null;
  return authors[authorKey] || null;
}
