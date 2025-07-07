"use client";

import { Spinner } from "@heroui/react";
import { useTranslations } from "next-intl";
import { FC } from "react";

import { siteConfig } from "@/shared/site";

export const Loading: FC = () => {
  const t = useTranslations("Loading");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <Spinner color="primary" size="lg" />
        <p className="text-foreground-600">
          {t("Loading", { name: siteConfig.name })}
        </p>
      </div>
    </div>
  );
};
