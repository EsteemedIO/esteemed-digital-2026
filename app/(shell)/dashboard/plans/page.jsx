import ShellPlaceholder from "@/components/shell/ShellPlaceholder";

export const metadata = {
  title: "Plans & Features",
};

export default function PlansPage() {
  return (
    <ShellPlaceholder
      title="Plans & features"
      description="Plans and features will show active subscriptions, entitlements, invoices, and upgrade paths. For now, use the calculator to assemble a checkout set."
      actions={[
        { label: "Open calculator", href: "/dashboard/calculator", primary: true },
        { label: "View public pricing", href: "/pricing" },
      ]}
    />
  );
}
