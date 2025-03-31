import React from "react";
import Link from "next/link";

import { siteConfig } from "@/shared/site";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-200 py-4 px-4 ">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
        <span className="text-default-500 text-sm">
          ©{currentYear} {siteConfig.company} - All rights reserved.
        </span>
        <div className="flex items-center ml-0 sm:ml-6 gap-3">
          <Link className="text-sm" href="/legal/terms">
            Terms
          </Link>
          <Link className="text-sm" href="/legal/privacy">
            Privacy
          </Link>
          <Link className="text-sm" href="/legal/cookies">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};
