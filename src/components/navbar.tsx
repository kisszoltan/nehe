"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { SearchInput } from "./search-input";
import { Donate } from "./donate";
import { Logo } from "./logo";

import { siteConfig } from "@/shared/site";
import { ThemeSwitch } from "@//components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <HeroUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit block sm:hidden lg:block">
              {siteConfig.shortName}
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {t(item.label)}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <Icon className="text-default-500" icon="proicons:x-twitter" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <Icon className="text-default-500" icon="iconoir:discord" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <Icon className="text-default-500" icon="proicons:github" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SearchInput />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Donate />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <Icon className="text-default-500" icon="proicons:github" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <SearchInput />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {t(item.label)}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
