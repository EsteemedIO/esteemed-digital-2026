"use client";

import { useEffect } from "react";
import { HeroUIProvider } from "@heroui/react";

export default function Providers({ children }) {
  useEffect(() => {
    const prefers = window.localStorage.getItem('theme');
    const hour = new Date().getHours();
    const autoDark = hour >= 19 || hour < 7;
    document.documentElement.classList.toggle('dark', prefers ? prefers === 'dark' : autoDark);
  }, []);

  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}
