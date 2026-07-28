export const CREATE_BASE = "https://create.esteemed.io";

export function absoluteCreateUrl(url) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${CREATE_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

export function siteStudioUrl(siteId) {
  return `${CREATE_BASE}/apps/studio/${encodeURIComponent(siteId)}`;
}

export function siteDeployUrl(siteId) {
  return `${siteStudioUrl(siteId)}?publish=1`;
}

export function siteComingSoonUrl(siteId) {
  return `${siteStudioUrl(siteId)}?template=coming-soon&publish=1`;
}

export function formatSiteDate(value) {
  if (!value) return "Not yet";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not yet";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

export function isLiveSite(status) {
  return ["published", "deployed", "live"].includes(status);
}

export function siteStatusLabel(status) {
  if (isLiveSite(status)) return "Live";
  if (status === "built") return "Built";
  if (status === "importing") return "Importing";
  if (status === "deploying") return "Deploying";
  return status || "Draft";
}

export function siteStatusClass(status) {
  if (isLiveSite(status)) return "bg-[#E8F8EA] text-[#126B24]";
  if (status === "importing" || status === "deploying") return "bg-accent-hover text-ink";
  return "bg-zinc-50 text-zinc-500";
}

export function sitePrimaryDomain(site) {
  return site.domain || site.primaryDomain || site.customDomain || site.cloud?.domain || "";
}

export function siteLiveUrl(site) {
  return absoluteCreateUrl(site.publishedUrl || sitePrimaryDomain(site));
}
