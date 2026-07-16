import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Support",
};

export default function SupportPage() {
  return (
    <ShellPlaceholder
      title="Support"
      description="Support will connect account support, managed support packs, and Colleagues expert help. The public support page remains available for plan details."
      actions={[
        { label: "View support plans", href: "/hire-experts/web-support", primary: true },
        { label: "Back to dashboard", href: "/dashboard" },
      ]}
    />
  );
}
