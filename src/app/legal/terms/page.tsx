import { notFound } from "next/navigation";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) ?? { locale: "en" };

  try {
    const Content = (await import(`./${locale}.mdx`)).default;

    return (
      <section className="flex flex-col gap-4">
        <article className="text-left prose dark:prose-invert bg-background">
          <Content />
        </article>
      </section>
    );
  } catch {
    notFound();
  }
}
