/* ============================================================
   Esteemed — Local Markets landing page. TEMPLATED.
   Swap one MARKET object to launch a new city campaign.
   ============================================================ */

window.MARKET = {
  region: 'South Sound',
  state: 'Washington',
  stateAbbr: 'WA',
  cities: ['Olympia', 'Tumwater', 'Lacey'],
  citiesInline: 'Olympia, Tumwater & Lacey',
  phone: '360.791.4270',
  program: 'Local First',

  // Hero
  eyebrow: 'South Sound, Washington',
  headline: ['A website that ', 'means business', '.'],
  sub: 'Expert websites and ongoing WebOps support, built by your neighbors in Olympia, Tumwater and Lacey since 2011. Start with a free rebuild — no fee, ever.',
  ctaPrimary: 'Claim your free rebuild',
  ctaSecondary: 'Book a local consult',

  // Local trust stats
  stats: [
    { n: '15 yrs', l: 'Serving South Sound businesses' },
    { n: '120+', l: 'Local websites designed & built' },
    { n: '2 wks', l: 'Typical rebuild turnaround' },
    { n: '$0', l: 'To rebuild with Managed Hosting' },
  ],

  // Why local businesses choose us
  why: [
    { icon: 'neighbors', title: 'We\u2019re your neighbors', body: 'A real South Sound team \u2014 not an offshore call center. Meet us for coffee in downtown Olympia and talk through your site face to face.' },
    { icon: 'refresh', title: 'A free website rebuild', body: 'Tired of a site that looks stuck in 2012? We rebuild it from scratch at no cost when you host with us. No rebuild fee, ever.' },
    { icon: 'sliders', title: 'Done-for-you or do-it-yourself', body: 'Let our designers build it, or spin it up yourself with Esteemed Create, our AI website builder. Same platform, your pace.' },
    { icon: 'server', title: 'We don\u2019t disappear at launch', body: 'Most shops build your site and vanish. Our WebOps team keeps yours secure, current and climbing search long after you go live.' },
  ],

  // Everything you need on one platform
  platformHead: {
    title: 'Everything you need to grow in one platform',
    sub: 'Get access to experts and the tools you need to grow your business. From reliable and affordable hosting to content to integrated software.',
  },
  platformApps: [
    { title: 'Website Editing', desc: 'Customize every detail with Esteemed Create, our AI-native drag-and-drop builder. No code required.', mock: 'editor' },
    { title: 'Design Intelligence', desc: 'Your AI creative partner for designs, images and copy \u2014 with Agents that keep working once you\u2019re live.', mock: 'ai' },
    { title: 'Business Email', desc: 'Make it official with Business Email from Google Workspace \u2014 set up with your domain in minutes.', mock: 'email' },
    { title: 'Domains', desc: 'Register your dream domain. Free WHOIS privacy, SSL and premium DNS included.', mock: 'domain' },
  ],

  // Offerings (product cards)
  offerings: [
    { icon: 'pen', name: 'Website design', tag: 'Design & build',
      body: 'A custom, mobile-ready website designed and built by our team \u2014 or draft your own with Esteemed Create. Free domain, SSL and contact form included.',
      points: ['Website Design Services \u2014 $499 one-time, 4 pages', 'Esteemed Create \u2014 free to start, plans from $39/mo', 'Free domain, SSL & AI contact form'],
      price: 'Free to start \u00b7 design from $499', cta: 'See design options' },
    { icon: 'server', name: 'WebOps \u00b7 Tech', tag: 'Managed & secure',
      body: 'We keep your site fast, secure and online \u2014 managed hosting, SSL, backups, monitoring and updates, all handled for you.',
      points: ['Managed hosting from $9.99/mo', 'Security, backups & uptime monitoring', 'Updates & fixes handled for you'],
      price: 'From $9.99/mo', cta: 'See WebOps plans' },
    { icon: 'search', name: 'WebOps \u00b7 Content & SEO', tag: 'Get found & grow',
      body: 'Ongoing content updates and search optimization so the right customers find you \u2014 on Google and in AI answers alike.',
      points: ['Copy & content updates by our team', 'Local SEO to rank across the South Sound', 'Tuned for AI answer engines (AEO)'],
      price: 'Support plans from $149/mo', cta: 'See WebOps plans' },
  ],

  capNote: 'Expert-built, and support sold as simple hourly add-ons — no monthly lock-in.',
  capabilities: [
    { title: 'Online Store', headline: 'Sell online', body: 'Sell products with a fast, secure checkout, powered by our Commerce stack.', img: 'cap-store', src: 'https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'A local shop, or a product styled on a shelf' },
    { title: 'Scheduling', headline: 'Get booked', body: 'Seamless appointment booking and calendar management, right from your site.', img: 'cap-book', src: 'https://images.pexels.com/photos/35134952/pexels-photo-35134952.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'A salon, clinic or tasting-room booking moment' },
    { title: 'Blog', headline: 'Publish with ease', body: 'Share news and stories yourself \u2014 no developer required.', img: 'cap-blog', src: 'https://images.pexels.com/photos/29884920/pexels-photo-29884920.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'Someone writing, or a cafe counter scene' },
    { title: 'Forms', headline: 'Capture every lead', body: 'Turn visitors into customers with an AI-assisted contact form, built right in.', img: 'cap-forms', src: 'https://images.pexels.com/photos/9303590/pexels-photo-9303590.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'A customer inquiry, or a friendly handshake' },
    { title: 'Donations', headline: 'Raise more', body: 'Accept one-time and recurring gifts \u2014 with goals, receipts and donor updates built in.', img: 'cap-donate', src: 'https://images.pexels.com/photos/34164459/pexels-photo-34164459.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'A community event, volunteers, or a fundraiser' },
    { title: 'Memberships', headline: 'Grow your community', body: 'Offer member-only content, classes and perks with recurring subscriptions.', img: 'cap-member', src: 'https://images.pexels.com/photos/613868/pexels-photo-613868.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'A class, workshop, or member gathering' },
    { title: 'Local SEO', headline: 'Get found locally', body: 'Rank across Olympia, Tumwater and Lacey \u2014 and show up in AI answers.', img: 'cap-seo', src: 'https://images.pexels.com/photos/7400281/pexels-photo-7400281.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'A South Sound map or aerial view' },
    { title: 'Galleries', headline: 'Show your best work', body: 'Present your work, menu or portfolio with rich, fast media layouts.', img: 'cap-gallery', src: 'https://images.pexels.com/photos/12735489/pexels-photo-12735489.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'A plated dish, or a portfolio grid' },
  ],

  // How it works
  steps: [
    { n: '01', title: 'Say hello', body: 'Book a free local consult \u2014 phone, video, or coffee in Olympia. Tell us about your business and what you need.' },
    { n: '02', title: 'We rebuild your site', body: 'Our designers rebuild your website from the ground up \u2014 modern, mobile-ready, and on-brand. At no cost with hosting.' },
    { n: '03', title: 'You go live', body: 'We publish, point your domain, and set up hosting, SSL and backups. Your new site is live and looked after.' },
    { n: '04', title: 'Grow with us', body: 'Our WebOps team keeps your site current, secure and climbing local search \u2014 with a neighbor on call whenever you need one.' },
  ],

  // Offer band
  offer: {
    kicker: 'The South Sound launch offer',
    title: 'Claim your free website rebuild',
    body: 'Start any 12-month Managed Hosting plan and our team rebuilds your existing website for free. No rebuild fee. No catch. Just a better site and a local team behind it.',
    bullets: ['$0 rebuild with a 12-month hosting plan', 'Website Design Services from $499 for 4 pages', 'Hosting from $9.99/mo with SSL & backups included'],
    fine: 'Free rebuild applies to standard 4-page sites with an active 12-month Managed Hosting plan. Additional pages and custom work billed at $85/hr (3 hr min) or $75/hr with a 10-hour commitment used within 40 hours of purchase.',
  },

  // Local proof / testimonials (illustrative)
  testimonials: [
    { company: 'Percival Landing Coffee', quote: 'They rebuilt our whole site in under two weeks and actually picked up the phone when I had questions. Feels good to work with people down the street.', name: 'Marisol Reyes', role: 'Owner \u2014 Olympia', img: 'tst-1', src: 'https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'Downtown Olympia storefront or the Percival Landing waterfront' },
    { company: 'Tumwater Falls Brewing', quote: 'We went from a site nobody could find to online orders every morning. The free rebuild paid for itself before the first invoice.', name: 'Dan Whitlock', role: 'Founder \u2014 Tumwater', img: 'tst-2', src: 'https://images.pexels.com/photos/613868/pexels-photo-613868.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'Tumwater Falls, or a shot of your taproom' },
    { company: 'Lacey Family Wellness', quote: 'As a small clinic we don\u2019t have an IT department. Esteemed is our IT department \u2014 hosting, updates, and a real human when we need one.', name: 'Dr. Priya Anand', role: 'Owner \u2014 Lacey', img: 'tst-3', src: 'https://images.pexels.com/photos/34164459/pexels-photo-34164459.jpeg?auto=compress&cs=tinysrgb&w=1400', imgHint: 'Your Lacey clinic, or Woodland Creek' },
  ],

  // FAQ
  faq: [
    { q: 'Is the free rebuild really free?', a: 'Yes. When you start a 12-month Managed Hosting plan, our team rebuilds your standard 4-page site at no cost \u2014 there is no separate rebuild fee. Additional pages or custom work are quoted up front.' },
    { q: 'Do I own my website and domain?', a: 'Always. Your site, content, and domain are yours. If you ever leave, you take everything with you \u2014 no hostage situations.' },
    { q: 'Are you actually local?', a: 'Yes \u2014 our team is based right here in Thurston County. We work with businesses across Olympia, Tumwater, Lacey and the greater South Sound, and we\u2019re happy to meet in person.' },
    { q: 'What if I already have a website?', a: 'Perfect. We\u2019ll rebuild it fresh, or simply host and maintain your current site as-is with a Care plan. Either way, no migration headaches on your end.' },
    { q: 'How long does a rebuild take?', a: 'Most standard sites go live within two weeks of our kickoff consult, depending on how quickly we get your content and photos.' },
    { q: 'What happens after my site launches?', a: 'That\u2019s where WebOps comes in. Our local team handles hosting, security, updates and content changes, and works on your SEO so the right customers keep finding you \u2014 on Google and in AI answers.' },
  ],
};
