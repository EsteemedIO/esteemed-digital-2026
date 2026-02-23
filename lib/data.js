import { Brain, MessageSquare, Workflow, Rocket, Users, Layers, Server, ShieldCheck, LineChart, BookOpen, Sparkles, Github } from "lucide-react";

export const products = [
  { key:"intelligence", name:"Esteemed Intelligence", tagline:"Workforce intelligence with on-device private matching and predictive pipeline analytics", icon:Brain, points:["MinCut tension monitoring","Self-learning GNN","Edge deployment"], cta:"Explore Intelligence" },
  { key:"ai", name:"Esteemed AI", tagline:"FACT-powered context engine replacing RAG with sub-100ms deterministic retrieval", icon:MessageSquare, points:["Enterprise RAG replacement","Role-aware answers","Deploy to Slack/Teams"], cta:"Explore Esteemed AI" },
  { key:"agents", name:"Esteemed Agents", tagline:"64+ specialized agents with cognitive memory that compounds with every interaction", icon:Workflow, points:["AgentDB memory","Claude-Flow orchestration","MCP integrations"], cta:"Meet the Agents" },
  { key:"appbuilder", name:"AI App Builder (API)", tagline:"RuVector-powered APIs with WASM browser execution and O(log n) optimization", icon:Rocket, points:["Sublinear solver","FANN inference","Zero-config deployment"], cta:"Build with the API" },
  { key:"hcai", name:"Human Capital AI", tagline:"Talent DNA profiles with sealed cognitive containers that grow smarter over time", icon:Users, points:["RVF containers","Talent DNA","Predictive placement"], cta:"Explore Human Capital AI" },
];

export const services = [
  { icon: Layers, title:"AI Advisory & Strategy", desc:"Roadmaps, risk & ROI, exec enablement." },
  { icon: Server, title:"Systems Integration", desc:"ATS/CRM/ERP + pipelines + identity." },
  { icon: Rocket, title:"Custom AI Dev", desc:"SLM, RAG, agents, automation." },
  { icon: ShieldCheck, title:"Security & Governance", desc:"RBAC, audit, residency, SOC2." },
];

export const deployments = [
  { k:"cloud", title:"Cloud", desc:"Esteemed-managed cloud.", bullets:["SLA","Global edge","Usage-based"] },
  { k:"private-cloud", title:"Private Cloud", desc:"Single-tenant isolation.", bullets:["SAML/SSO","VPC peering","Custom SLAs"] },
  { k:"vpc", title:"Your VPC", desc:"Run fully in your VPC.", bullets:["Helm","Object storage","Secrets mgmt"] },
  { k:"onprem", title:"On-prem", desc:"Air-gapped envs.", bullets:["No egress","Audit logs","HSM"] },
];

export const compliance = ['SOC 2 (in progress)','GDPR','Data residency (US/EU/CA)','PII redaction'];

export const partners = {
  showcase: [{name:"Microsoft"},{name:"Google Cloud"},{name:"Slack"},{name:"GitHub"}],
  program: [
    {name:"Solution Partners",desc:"Agencies & integrators."},
    {name:"Technology Partners",desc:"Platforms & tools."},
    {name:"Cloud Partners",desc:"Deployments & marketplaces."}
  ],
};

export const research = [
  {icon:BookOpen,title:"Research Papers",desc:"Briefs, benchmarks, references."},
  {icon:LineChart,title:"Case Studies",desc:"Measurable lifts."},
  {icon:Sparkles,title:"Product Updates",desc:"Roadmap & capabilities."}
];

export const team = [
  {name:"Chris McGrath",role:"Strategy & Innovation",blurb:"AI-first platform & corp dev."},
  {name:"Tom Schmidt",role:"Business & Advisory",blurb:"GTM & partnerships."},
  {name:"Luna Rivera",role:"Marketing (Agent)",blurb:"Narratives & growth."},
  {name:"Finley Park",role:"Finance (Agent)",blurb:"Models & diligence."}
];

export const news = [
  {date:"Sep 2025",title:"Agents v2 ships MCP integrations",tag:"Release"},
  {date:"Aug 2025",title:"Recruiter AI private beta",tag:"Product"},
  {date:"Jul 2025",title:"Intelligence adds memory graph",tag:"Research"}
];

export const devResources = {
  sdks:[{name:"JavaScript SDK",slug:"js",desc:"Browser & Node client."},{name:"Python SDK",slug:"py",desc:"Data workflows & jobs."},{name:"REST API",slug:"rest",desc:"Token auth & webhooks."}],
  links:[{name:"Quickstart"},{name:"API Keys"},{name:"Docs"},{name:"Status"}]
};

export const solutions = [
  { k: "staffing", label: "Staffing Ops Automation", blurb: "Reduce time-to-fill and uplift recruiter productivity with AI screening, matching, and outreach.", mapsTo: ["hcai", "agents", "ai"] },
  { k: "saas", label: "SaaS GTM & Support", blurb: "Deflect tickets, accelerate onboarding, and power sales enablement content.", mapsTo: ["ai", "agents"] },
  { k: "enterprise", label: "Enterprise AI Enablement", blurb: "RAG + agent workflows across departments with RBAC, audit, and residency.", mapsTo: ["ai", "agents", "intelligence"] },
  { k: "hcai", label: "Human Capital AI", blurb: "Recruiting, career mapping, enablement, and talent analytics.", mapsTo: ["hcai", "ai"] },
  { k: "appbuilder", label: "AI App Builder", blurb: "Stand up custom AI apps and internal tools with paid API + SDKs.", mapsTo: ["appbuilder", "agents"] },
];

export { Github };
