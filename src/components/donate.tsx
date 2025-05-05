"use client";

import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@heroui/react";
import Link from "next/link";
import { useMessages, useTranslations } from "next-intl";

import { siteConfig } from "@/shared/site";

export const Donate = () => {
  const t = useTranslations("Donate");
  const messages = useMessages();
  const idx = Object.keys(messages.Donate.desc);

  return (
    <Tooltip
      content={
        <div className="flex flex-col gap-1 px-1 py-2 max-w-xs">
          <div className="text-medium font-bold">{t("title")}</div>
          {idx.map((key) => (
            <div key={key}>{t(`desc.${key}`)}</div>
          ))}
        </div>
      }
      delay={1000}
    >
      <Button
        as={Link}
        className="text-sm font-normal"
        href={siteConfig.links.donate}
        startContent={
          <Icon className="text-danger" icon="proicons:heart" width={22} />
        }
        target="_blank"
        variant="flat"
      >
        {t("Donate")}
      </Button>
    </Tooltip>
  );
};
