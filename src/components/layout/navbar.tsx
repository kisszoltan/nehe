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
import { cn, link as linkStyles } from "@heroui/theme";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { ProfileIcon } from "../widgets/profile-icon";

import { SearchInput } from "@/components/widgets/search-input";
import { Donate } from "@/components/widgets/donate";
import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/shared/site";
import { ThemeSwitch } from "@/components/widgets/theme-switch";
import { Link } from "@/components/ui/link";

export const Navbar = () => {
  const path = usePathname();
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
          <Link className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit block sm:hidden lg:block">
              {siteConfig.shortName}
            </p>
          </Link>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={cn(
                  linkStyles({
                    color:
                      (item.href === "/" && path === "/") ||
                      (item.href !== "/" && path.startsWith(item.href))
                        ? "primary"
                        : "foreground",
                    size: "lg",
                    underline: "hover",
                  }),
                )}
                href={item.href}
              >
                {t(item.label)}
              </Link>
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
        <NavbarItem className="hidden md:flex">
          <ProfileIcon />
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
