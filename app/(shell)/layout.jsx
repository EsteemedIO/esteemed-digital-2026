import ShellNav from "@/components/shell/ShellNav";
import ShellTopBar from "@/components/shell/ShellTopBar";

export const metadata = {
  title: {
    default: "Dashboard | Esteemed",
    template: "%s | Esteemed",
  },
};

export default function ShellLayout({ children }) {
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
      <div className="flex flex-col min-h-screen">
        <ShellTopBar />
        <main className="flex-1" style={{ padding: 24 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
