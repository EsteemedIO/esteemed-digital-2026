import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Workflows",
};

export default function WorkflowsPage() {
  return (
    <ShellPlaceholder
      title="Workflows"
      description="Workflows is reserved for the HCMGPT workflow experience called out in the handoff. This route is ready for the approved workflow UI to be lifted in."
      actions={[
        { label: "Open HCMGPT", href: "https://hcmgpt.com", external: true, primary: true },
        { label: "Back to dashboard", href: "/dashboard" },
      ]}
    />
  );
}
