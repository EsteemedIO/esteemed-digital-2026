import ShellFrame from "@/components/shell/ShellFrame";

export const metadata = {
  title: {
    default: "Dashboard | Esteemed",
    template: "%s | Esteemed",
  },
};

export default function ShellLayout({ children }) {
  return <ShellFrame>{children}</ShellFrame>;
}
