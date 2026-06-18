import { productIconPaths } from "@/lib/pricing-catalog";

export default function ProductIcon({ product, className = "h-10 w-10", alt = "" }) {
  const src = productIconPaths[product];
  if (!src) return null;
  return <img src={src} alt={alt} className={`${className} object-contain`} />;
}
