import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <ShellPlaceholder
      title="Projects"
      description="Projects will collect active Create builds, implementation work, hiring projects, migrations, and support engagements into one workspace view."
      actions={[
        { label: "Estimate a plan", href: "/dashboard/calculator", primary: true },
        { label: "Back to dashboard", href: "/dashboard" },
      ]}
    />
  );
}
