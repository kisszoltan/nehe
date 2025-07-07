"use client";

import { Link as HeroLink, type LinkProps } from "@heroui/react";
import { usePathname } from "next/navigation";

import { useNavigationLoading } from "@/contexts/navigation-context";

type Props = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export function Link({ href, children, ...rest }: Props) {
  const { setLoading } = useNavigationLoading();
  const pathname = usePathname();
  const isSamePath = pathname === href;

  return (
    <HeroLink
      {...rest}
      href={href}
      onClick={(e) => {
        if (!isSamePath && rest.target !== "_blank" && !rest.isExternal) {
          setLoading(true);
        }
        rest.onClick?.(e);
      }}
    >
      {children}
    </HeroLink>
  );
}
