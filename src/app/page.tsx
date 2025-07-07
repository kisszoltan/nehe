import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

import { Link } from "@/components/ui/link";
import { siteConfig } from "@/shared/site";
import { H1, BodyMedium } from "@/components/ui/typography";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-4xl text-center justify-center space-y-4">
        <H1>
          {t("Make beautiful websites regardless of your design experience")}
        </H1>
        <BodyMedium>
          {t("Beautiful, fast and modern React UI library")}
        </BodyMedium>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/auth/signin"
        >
          <Icon icon="proicons:person" />
          Login
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
