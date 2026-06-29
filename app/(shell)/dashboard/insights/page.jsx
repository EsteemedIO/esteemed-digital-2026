import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return (
    <ShellPlaceholder
      title="Insights"
      description="Insights will become the reports surface from the handoff, with connected-app report sets for finance, workforce, project management, sales, and support."
      actions={[
        { label: "Connect sources", href: "/dashboard/sources", primary: true },
        { label: "Back to dashboard", href: "/dashboard" },
      ]}
    />
  );
}
