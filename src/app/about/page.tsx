import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function AboutPage() {
  const locale = await getLocale();

  try {
    const Content = (await import(`./${locale ?? "en"}.mdx`)).default;

    return (
      <section className="flex flex-col gap-4">
        <article className="prose dark:prose-invert prose-th:bg-default-50 prose-table:border prose-td:p-2 prose-th:p-2 bg-background max-w-full">
          <Content />
        </article>
      </section>
    );
  } catch {
    notFound();
  }
}
