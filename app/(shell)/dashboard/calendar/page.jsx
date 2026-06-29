import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Calendar",
};

export default function CalendarPage() {
  return (
    <ShellPlaceholder
      title="Calendar"
      description="Calendar will use the platform shell calendar patterns from the handoff, including agenda, month, week, and day views once connected calendar sources are available."
      actions={[
        { label: "Connect sources", href: "/dashboard/sources", primary: true },
        { label: "Back to dashboard", href: "/dashboard" },
      ]}
    />
  );
}
