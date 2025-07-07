export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-5xl px-4">
        <section className="flex flex-col gap-4">
          <article className="text-left prose dark:prose-invert prose-th:bg-default-50 prose-table:border prose-td:p-2 prose-th:p-2 bg-background max-w-none">
            {children}
          </article>
        </section>
      </div>
    </section>
  );
}
