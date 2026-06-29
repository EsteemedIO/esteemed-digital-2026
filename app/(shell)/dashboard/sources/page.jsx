import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Sources",
};

export default function SourcesPage() {
  return (
    <ShellPlaceholder
      title="Sources"
      description="Sources is the Connect/Onyx connector surface for Drive, Gmail, Slack, Confluence, Notion, GitHub, Jira, Salesforce, and related knowledge sources."
      actions={[
        { label: "Activate Connect", href: "/dashboard/activate/connect", primary: true },
        { label: "Back to dashboard", href: "/dashboard" },
      ]}
    />
  );
}
