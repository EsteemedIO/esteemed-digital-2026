import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Agents",
};

export default function AgentsPage() {
  return (
    <ShellPlaceholder
      title="Agents"
      description="Agents will show the Marketer, Writer, Recruiter, Social Media Manager, and Publicist cards from the handoff, including online/offline state and task assignment."
      actions={[
        { label: "Activate Agents", href: "/dashboard/activate/agents", primary: true },
        { label: "Back to dashboard", href: "/dashboard" },
      ]}
    />
  );
}
