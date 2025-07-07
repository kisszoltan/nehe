import React from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/components/ui/link";
import LocaleSwitch from "@/components/widgets/locale-switch";

export const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-200 py-4 px-4 ">
      <div className="container mx-auto gap-2 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
        <span className="text-default-500 text-sm">
          {t("All rights reserved", { year: currentYear })}
        </span>
        <div className="flex items-center ml-0 sm:ml-6 gap-3">
          <Link className="text-sm" href="/legal/terms">
            {t("Terms")}
          </Link>
          <Link className="text-sm" href="/legal/privacy">
            {t("Privacy")}
          </Link>
          <Link className="text-sm" href="/legal/cookies">
            {t("Cookies")}
          </Link>
        </div>
        <LocaleSwitch />
      </div>
    </footer>
  );
};
