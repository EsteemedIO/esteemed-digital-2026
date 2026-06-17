"use client";

import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { LayoutGrid, Settings, MessageSquare, Users, ExternalLink, Star } from "lucide-react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline SVG tile icons – extracted from design handoff assets       */
/* ------------------------------------------------------------------ */

function AcquireTileIcon() {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="51" height="51" rx="4" fill="#FEE546" />
      <path d="M41 6H11.25C8.90279 6 7 7.90279 7 10.25V40C7 42.3472 8.90279 44.25 11.25 44.25H41C43.3472 44.25 45.25 42.3472 45.25 40V10.25C45.25 7.90279 43.3472 6 41 6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 20H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 24H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 28H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 32H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 16H21C19.8954 16 19 16.8954 19 18V34C19 35.1046 19.8954 36 21 36H33C34.1046 36 35 35.1046 35 34V18C35 16.8954 34.1046 16 33 16Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 16V36" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 21H35" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 26H35" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 31H35" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HireTileIcon() {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="51" height="51" rx="4" fill="#FEE546" />
      <path d="M41 6H11.25C8.90279 6 7 7.90279 7 10.25V40C7 42.3472 8.90279 44.25 11.25 44.25H41C43.3472 44.25 45.25 42.3472 45.25 40V10.25C45.25 7.90279 43.3472 6 41 6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 37.5C17.837 37.5 17.2011 37.2366 16.7322 36.7678C16.2634 36.2989 16 35.663 16 35V15C16 14.337 16.2634 13.7011 16.7322 13.2322C17.2011 12.7634 17.837 12.5 18.5 12.5H28.5C28.8957 12.4994 29.2876 12.577 29.6532 12.7285C30.0187 12.8799 30.3507 13.1022 30.63 13.3825L35.115 17.8675C35.3961 18.1469 35.619 18.4792 35.7709 18.8452C35.9228 19.2112 36.0006 19.6037 36 20V35C36 35.663 35.7366 36.2989 35.2678 36.7678C34.7989 37.2366 34.163 37.5 33.5 37.5H18.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.5 12.5V18.75C28.5 19.0815 28.6317 19.3995 28.8661 19.6339C29.1005 19.8683 29.4185 20 29.75 20H36" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 37.5C31 36.1739 30.4732 34.9021 29.5355 33.9645C28.5979 33.0268 27.3261 32.5 26 32.5C24.6739 32.5 23.4021 33.0268 22.4645 33.9645C21.5268 34.9021 21 36.1739 21 37.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 32.5C28.0711 32.5 29.75 30.8211 29.75 28.75C29.75 26.6789 28.0711 25 26 25C23.9289 25 22.25 26.6789 22.25 28.75C22.25 30.8211 23.9289 32.5 26 32.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CreateTileIcon() {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="51" height="51" rx="4" fill="#FEE546" />
      <rect x="8" y="7" width="36" height="36" rx="7" fill="white" stroke="black" strokeWidth="2" />
      <path d="M24.75 20H17.25C15.8693 20 14.75 21.1193 14.75 22.5V35C14.75 36.3807 15.8693 37.5 17.25 37.5H24.75C26.1307 37.5 27.25 36.3807 27.25 35V22.5C27.25 21.1193 26.1307 20 24.75 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.25 15C17.25 14.337 17.5134 13.7011 17.9822 13.2322C18.4511 12.7634 19.087 12.5 19.75 12.5H34.75C35.413 12.5 36.0489 12.7634 36.5178 13.2322C36.9866 13.7011 37.25 14.337 37.25 15V35C37.25 35.663 36.9866 36.2989 36.5178 36.7678C36.0489 37.2366 35.413 37.5 34.75 37.5H31.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 32.5H21.0125" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntelligenceTileIcon() {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="51" height="51" rx="4" fill="#FEE546" />
      <path d="M41 6H11.25C8.90279 6 7 7.90279 7 10.25V40C7 42.3472 8.90279 44.25 11.25 44.25H41C43.3472 44.25 45.25 42.3472 45.25 40V10.25C45.25 7.90279 43.3472 6 41 6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.8 33.6C27.0535 33.7901 27.3486 33.9173 27.6609 33.971C27.9732 34.0248 28.2938 34.0035 28.5963 33.909C28.8988 33.8145 29.1745 33.6495 29.4007 33.4276C29.6269 33.2056 29.7972 32.9331 29.8974 32.6325C29.9976 32.3318 30.0249 32.0117 29.9771 31.6984C29.9293 31.3851 29.8078 31.0877 29.6225 30.8306C29.4372 30.5735 29.1935 30.3641 28.9114 30.2197C28.6293 30.0753 28.3169 30 28 30H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.5 22C31.7557 21.6591 32.0943 21.3892 32.4836 21.2159C32.8729 21.0427 33.3001 20.9718 33.7245 21.0101C34.1489 21.0484 34.5565 21.1945 34.9086 21.4346C35.2606 21.6747 35.5455 22.0008 35.7361 22.382C35.9266 22.7631 36.0166 23.1867 35.9975 23.6124C35.9783 24.0381 35.8507 24.4518 35.6266 24.8143C35.4026 25.1768 35.0896 25.476 34.7174 25.6836C34.3452 25.8911 33.9261 26 33.5 26H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23.8 18.4C24.0535 18.2099 24.3486 18.0827 24.6609 18.029C24.9732 17.9752 25.2938 17.9965 25.5963 18.091C25.8988 18.1855 26.1745 18.3505 26.4007 18.5724C26.6269 18.7944 26.7972 19.0669 26.8974 19.3675C26.9976 19.6682 27.0249 19.9883 26.9771 20.3016C26.9293 20.6149 26.8078 20.9123 26.6225 21.1694C26.4372 21.4265 26.1935 21.6359 25.9114 21.7803C25.6293 21.9247 25.3169 22 25 22H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AgentsTileIcon() {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="51" height="51" rx="4" fill="#FEE546" />
      <path d="M41 6H11.25C8.90279 6 7 7.90279 7 10.25V40C7 42.3472 8.90279 44.25 11.25 44.25H41C43.3472 44.25 45.25 42.3472 45.25 40V10.25C45.25 7.90279 43.3472 6 41 6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29 20V32C29 32.5933 29.1759 33.1734 29.5056 33.6667C29.8352 34.1601 30.3038 34.5446 30.852 34.7716C31.4001 34.9987 32.0033 35.0581 32.5853 34.9424C33.1672 34.8266 33.7018 34.5409 34.1213 34.1213C34.5409 33.7018 34.8266 33.1672 34.9424 32.5853C35.0581 32.0033 34.9987 31.4001 34.7716 30.852C34.5446 30.3038 34.1601 29.8352 33.6667 29.5056C33.1734 29.1759 32.5933 29 32 29H20C19.4067 29 18.8266 29.1759 18.3333 29.5056C17.8399 29.8352 17.4554 30.3038 17.2284 30.852C17.0013 31.4001 16.9419 32.0033 17.0576 32.5853C17.1734 33.1672 17.4591 33.7018 17.8787 34.1213C18.2982 34.5409 18.8328 34.8266 19.4147 34.9424C19.9967 35.0581 20.5999 34.9987 21.1481 34.7716C21.6962 34.5446 22.1648 34.1601 22.4944 33.6667C22.8241 33.1734 23 32.5933 23 32V20C23 19.4067 22.8241 18.8266 22.4944 18.3333C22.1648 17.8399 21.6962 17.4554 21.1481 17.2284C20.5999 17.0013 19.9967 16.9419 19.4147 17.0576C18.8328 17.1734 18.2982 17.4591 17.8787 17.8787C17.4591 18.2982 17.1734 18.8328 17.0576 19.4147C16.9419 19.9967 17.0013 20.5999 17.2284 21.1481C17.4554 21.6962 17.8399 22.1648 18.3333 22.4944C18.8266 22.8241 19.4067 23 20 23H32C32.5933 23 33.1734 22.8241 33.6667 22.4944C34.1601 22.1648 34.5446 21.6962 34.7716 21.1481C34.9987 20.5999 35.0581 19.9967 34.9424 19.4147C34.8266 18.8328 34.5409 18.2982 34.1213 17.8787C33.7018 17.4591 33.1672 17.1734 32.5853 17.0576C32.0033 16.9419 31.4001 17.0013 30.852 17.2284C30.3038 17.4554 29.8352 17.8399 29.5056 18.3333C29.1759 18.8266 29 19.4067 29 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ConnectTileIcon() {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="51" height="51" rx="4" fill="#FEE546" />
      <path d="M41 6H11.25C8.90279 6 7 7.90279 7 10.25V40C7 42.3472 8.90279 44.25 11.25 44.25H41C43.3472 44.25 45.25 42.3472 45.25 40V10.25C45.25 7.90279 43.3472 6 41 6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 23C16.9 23 16 22.1 16 21V17C16 15.9 16.9 15 18 15H22C23.1 15 24 15.9 24 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 29C22.9 29 22 28.1 22 27V23C22 21.9 22.9 21 24 21H28C29.1 21 30 21.9 30 23" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 27H30C28.8954 27 28 27.8954 28 29V33C28 34.1046 28.8954 35 30 35H34C35.1046 35 36 34.1046 36 33V29C36 27.8954 35.1046 27 34 27Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CurateTileIcon() {
  return (
    <svg width="51" height="51" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="33" height="33" fill="#FEE546" />
      <path d="M26.125 4.125H6.875C5.35622 4.125 4.125 5.35622 4.125 6.875V26.125C4.125 27.6438 5.35622 28.875 6.875 28.875H26.125C27.6438 28.875 28.875 27.6438 28.875 26.125V6.875C28.875 5.35622 27.6438 4.125 26.125 4.125Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.625 9.625V23.375" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.125 9.625V23.375" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.625 9.625L23.375 23.375" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SupportTileIcon() {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="51" height="51" rx="4" fill="#FEE546" />
      <path d="M41 6H11.25C8.90279 6 7 7.90279 7 10.25V40C7 42.3472 8.90279 44.25 11.25 44.25H41C43.3472 44.25 45.25 42.3472 45.25 40V10.25C45.25 7.90279 43.3472 6 41 6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 34V32C31 30.9391 30.5786 29.9217 29.8284 29.1716C29.0783 28.4214 28.0609 28 27 28H21C19.9391 28 18.9217 28.4214 18.1716 29.1716C17.4214 29.9217 17 30.9391 17 32V34" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 24C26.2091 24 28 22.2091 28 20C28 17.7909 26.2091 16 24 16C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 21V27" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 24H31" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloudTileIcon() {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="51" height="51" rx="4" fill="#FEE546" />
      <path d="M41 6H11.25C8.90279 6 7 7.90279 7 10.25V40C7 42.3472 8.90279 44.25 11.25 44.25H41C43.3472 44.25 45.25 42.3472 45.25 40V10.25C45.25 7.90279 43.3472 6 41 6Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.977 30.5826C15.052 29.7529 14.3118 28.7546 13.8005 27.6471C13.2892 26.5397 13.0172 25.3456 13.0008 24.1361C12.9844 22.9266 13.2238 21.7263 13.7048 20.6067C14.1859 19.487 14.8987 18.4708 15.8009 17.6186C16.7031 16.7664 17.7763 16.0956 18.9565 15.646C20.1368 15.1965 21.4 14.9774 22.671 15.0018C23.9421 15.0263 25.1949 15.2937 26.3551 15.7882C27.5153 16.2828 28.5591 16.9943 29.4244 17.8805C30.4146 18.8933 31.1467 20.1092 31.5641 21.4342H33.9881C35.2799 21.4508 36.5327 21.8575 37.5657 22.5957C38.5987 23.3339 39.3584 24.3653 39.7351 25.541C40.1119 26.7168 40.0861 27.9761 39.6617 29.137C39.2373 30.298 38.436 31.3005 37.3737 32" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.9023 27.2844L28.0713 27.6448L28.4648 27.7063L31.8613 28.2376L29.3838 30.7639L29.1182 31.0344L29.1787 31.4094L29.7559 34.971L26.7803 33.3352L26.4189 33.136L26.0576 33.3352L23.0811 34.971L23.6592 31.4094L23.7197 31.0344L23.4541 30.7639L20.9756 28.2376L24.373 27.7063L24.7666 27.6448L24.9355 27.2844L26.4189 24.1311L27.9023 27.2844Z" stroke="black" strokeWidth="1.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  App tile data                                                      */
/* ------------------------------------------------------------------ */

const apps = [
  { key: "acquire", name: "Acquire", sublabel: "CRM", icon: AcquireTileIcon, href: "/products/acquire" },
  { key: "hire", name: "Hire", sublabel: "ATS", icon: HireTileIcon, href: "/products/hire" },
  { key: "create", name: "Create", sublabel: "Sites \u00b7 apps", icon: CreateTileIcon, href: "/products/create" },
  { key: "intelligence", name: "Intelligence", sublabel: "Memory \u00b7 reasoning", icon: IntelligenceTileIcon, href: "/products/intelligence" },
  { key: "agents", name: "Agents", sublabel: "Intelligent Agents", icon: AgentsTileIcon, href: "/products/agents" },
  { key: "connect", name: "Connect", sublabel: "Retrieval", icon: ConnectTileIcon, href: "/products/connect" },
  { key: "curate", name: "Curate", sublabel: "CMS \u00b7 DAM", icon: CurateTileIcon, href: "/products/curate" },
  { key: "support", name: "Support", sublabel: "Expert Assistance", icon: SupportTileIcon, href: "/services/support" },
  { key: "cloud", name: "Cloud", sublabel: "Integrated Hosting", icon: CloudTileIcon, href: "/products/cloud" },
];

/* ------------------------------------------------------------------ */
/*  AppSwitcher component                                              */
/* ------------------------------------------------------------------ */

export default function AppSwitcher({ currentApp }) {
  return (
    <Popover
      placement="bottom-end"
      backdrop="opaque"
      classNames={{
        backdrop: "bg-[rgba(14,13,8,0.42)]",
        content: "p-0 bg-white rounded-xl",
      }}
    >
      <PopoverTrigger>
        <button
          aria-label="Open app switcher"
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-neutral-100 transition-colors"
        >
          <LayoutGrid className="w-5 h-5 text-[#282828]" />
        </button>
      </PopoverTrigger>

      <PopoverContent>
        <div
          className="w-[380px]"
          style={{
            boxShadow: "0 24px 60px rgba(20,18,10,0.18), 0 4px 12px rgba(20,18,10,0.08)",
          }}
        >
          {/* Header */}
          <div className="px-5 pt-5 pb-3">
            <p
              className="text-[12px] font-semibold uppercase text-[#999] tracking-[0.1em]"
            >
              Your Apps
            </p>
          </div>

          {/* 3x3 App Grid */}
          <div className="px-5 pb-4 grid grid-cols-3 gap-3">
            {apps.map((app) => {
              const Icon = app.icon;
              const isActive = currentApp === app.key;
              return (
                <Link
                  key={app.key}
                  href={app.href}
                  className="group flex flex-col items-center text-center rounded-[16px] p-3 transition-all"
                  style={{
                    border: isActive ? "2px solid #FCD72B" : "1px solid #D7D7D7",
                    borderRadius: 16,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.boxShadow = "0 0 0 2px #FCD72B, 0 8px 20px rgba(252,215,43,0.30)";
                      e.currentTarget.style.borderColor = "#FCD72B";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "#D7D7D7";
                    }
                  }}
                >
                  <div className="w-[51px] h-[51px] flex-shrink-0 mb-2">
                    <Icon />
                  </div>
                  <span className="text-[14px] font-semibold text-[#282828] leading-tight">
                    {app.name}
                  </span>
                  <span className="text-[12px] text-[#565449] leading-tight mt-0.5">
                    {app.sublabel}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-[#E5E5E5] mx-5" />

          {/* Action Links */}
          <div className="px-5 py-3 space-y-1">
            <Link
              href="/settings/plan"
              className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <Settings className="w-4 h-4 text-[#565449]" />
              <span className="text-[14px] font-medium text-[#282828]">Manage plan</span>
            </Link>
            <a
              href="https://hcmgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#565449]" />
              <span className="text-[14px] font-medium text-[#282828] flex-1">Open HCMGPT</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#999]" />
            </a>
            <a
              href="https://colleagues.esteemed.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <Users className="w-4 h-4 text-[#565449]" />
              <span className="text-[14px] font-medium text-[#282828] flex-1">Open Colleagues</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#999]" />
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-[#E5E5E5] mx-5" />

          {/* Callout Card */}
          <div className="px-5 py-4">
            <div className="bg-[#F5F5F4] rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[#282828] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-bold text-[#282828]">Try Agents</p>
                  <p className="text-[12px] text-[#565449] mt-1 leading-relaxed">
                    Build agents that execute tasks autonomously across your apps — outreach sequences, candidate screens, follow-ups, and multi-step workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
