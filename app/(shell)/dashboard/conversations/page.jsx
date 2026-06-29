import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Conversations",
};

export default function ConversationsPage() {
  return (
    <ShellPlaceholder
      title="Conversations"
      description="Unified inbox for Star AI threads and connected channels. The design handoff calls for channel filters, a thread list, and a reading pane for email, LinkedIn, X, Slack, and other connected sources."
      actions={[
        { label: "Connect sources", href: "/dashboard/sources", primary: true },
        { label: "Back to dashboard", href: "/dashboard" },
      ]}
    />
  );
}
