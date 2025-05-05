"use client";

import { useTransition } from "react";
import { SharedSelection } from "@heroui/system";
import { useLocale, useTranslations } from "next-intl";
import { cn, Select, SelectItem } from "@heroui/react";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/lib/locale";
import { routing } from "@/i18n/routing";

export default function LocaleSwitch() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const t = useTranslations("LocaleSwitcher");

  function onSelectionChange(keys: SharedSelection) {
    const nextLocale = keys.currentKey as Locale;

    startTransition(() => {
      setUserLocale(nextLocale);
    });
  }

  return (
    <Select
      aria-label={t("label")}
      classNames={{
        trigger: cn(
          "bg-none shadow-none rounded-sm p-2 transition-colors hover:bg-slate-200",
          isPending && "pointer-events-none opacity-60",
        ),
      }}
      fullWidth={false}
      selectedKeys={[locale]}
      variant="flat"
      onSelectionChange={onSelectionChange}
    >
      {routing.locales.map((loc) => (
        <SelectItem key={loc}>{t("locale", { locale: loc })}</SelectItem>
      ))}
    </Select>
  );
}
