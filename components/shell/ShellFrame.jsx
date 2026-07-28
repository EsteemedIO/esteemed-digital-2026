"use client";

import ShellNav from "@/components/shell/ShellNav";
import ShellTopBar from "@/components/shell/ShellTopBar";

export default function ShellFrame({ children }) {
  return (
    <div
      className="min-h-screen"
      style={{
        display: "grid",
        gridTemplateColumns: "248px 1fr",
        background: "#FAFAF7",
      }}
    >
      <ShellNav />
      <div className="flex min-h-screen flex-col">
        <ShellTopBar />
        <main className="flex-1" style={{ padding: 24 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
