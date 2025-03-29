"use client";

import { Image } from "@heroui/react";
import { FC } from "react";

import { siteConfig } from "@//config/site";

export const Logo: FC<{ size?: number }> = ({ size = 24 }) => {
  return (
    <>
      <Image
        alt={siteConfig.shortName}
        className="block dark:hidden rounded-none"
        height={size}
        src="/logo-light.png"
        width={size}
      />
      <Image
        alt={siteConfig.shortName}
        className="hidden dark:block rounded-none"
        height={size}
        src="/logo-dark.png"
        width={size}
      />
    </>
  );
};
