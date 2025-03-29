import { notFound } from "next/navigation";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) ?? { locale: "en" };

  try {
    const Content = (await import(`./${locale}.mdx`)).default;

    return (
      <section className="flex flex-col gap-4">
        <article className="prose dark:prose-invert bg-background max-w-full">
          <Content />
        </article>
      </section>
    );
  } catch {
    notFound();
  }
}
