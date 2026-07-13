import { redirect } from "next/navigation";

export const metadata = {
  title: "AI Website Builder | Esteemed",
};

export default function CreateRedirect() {
  redirect("/websites/website-builder");
}
