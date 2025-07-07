import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function CookiesPage() {
  const locale = await getLocale();

  try {
    const Content = (await import(`./${locale ?? "en"}.mdx`)).default;

    return <Content />;
  } catch {
    notFound();
  }
}
