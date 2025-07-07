"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/components/ui/link";
import { useUser } from "@/hooks/user";
import { useAuth } from "@/hooks/auth";
import { Authenticated, Unauthenticated } from "@/components/ui/auth";

export const ProfileIcon: FC = () => {
  const t = useTranslations("ProfileIcon");
  const user = useUser();
  const { signOut } = useAuth();

  return (
    <>
      <Authenticated>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src={user?.image}
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label={t("Profile Actions")}
            className="max-w-xs"
            variant="flat"
          >
            <DropdownItem
              key="profile"
              as={Link}
              className="h-14 gap-2"
              href={`/@${user?.username}`}
            >
              <p className="font-semibold">
                {t("Signed in as", { email: user?.email ?? "" })}
              </p>
            </DropdownItem>
            <DropdownItem
              key="dashboard"
              as={Link}
              href={`/@${user?.username}`}
            >
              {t("Dashboard")}
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onPress={() => signOut()}>
              {t("Log Out")}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Authenticated>
      <Unauthenticated>
        <Button as={Link} color="primary" href="/auth/login" variant="light">
          {t("Sign In")}
        </Button>
      </Unauthenticated>
    </>
  );
};
