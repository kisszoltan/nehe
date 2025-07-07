"use client";

import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";

import { BodyMedium, H2 } from "@/components/ui/typography";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <H2>404</H2>
      <BodyMedium>{t("This page could not be found")}</BodyMedium>
      <Button onPress={() => router.back()}>{t("Go Back")}</Button>
    </div>
  );
}
