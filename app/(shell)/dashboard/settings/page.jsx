import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <ShellPlaceholder
      title="Settings"
      description="Settings will cover account profile, workspace settings, connected integrations, billing preferences, and notification controls."
      actions={[
        { label: "Manage plans", href: "/dashboard/plans", primary: true },
        { label: "Back to dashboard", href: "/dashboard" },
      ]}
    />
  );
}
