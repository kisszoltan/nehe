"use client";

import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@heroui/react";
import Link from "next/link";

import { siteConfig } from "@//config/site";

export const Donate = () => {
  return (
    <Tooltip
      content={
        <div className="flex flex-col gap-1 px-1 py-2 max-w-xs">
          <div className="text-medium font-bold">
            Kiss Csillag Public Benefit Foundation
          </div>
          <div>
            This website was created, developed and operated by Kiss-Hanzsa Ltd.
            This company supports the Kiss Csillag Public Benefit Foundation
            operating in Deszk (Hungary) with a minimum of 10% of its income.
          </div>
          <div>
            The foundation helps disadvantaged families or single people through
            voluntary donations. With financial support, we contribute to the
            operating costs of the foundation (vehicle and warehouse rental and
            maintenance, employee salaries, etc.).
          </div>
          <div>Click here and get to know the foundation yourself.</div>
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
        Donate
      </Button>
    </Tooltip>
  );
};
