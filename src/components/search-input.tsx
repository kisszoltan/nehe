"use client";

import { Input, Kbd } from "@heroui/react";
import { Icon } from "@iconify/react";
import { FC } from "react";

const SEARCH_ENABLED = true;

export const SearchInput: FC = () => {
  return (
    SEARCH_ENABLED && (
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <Icon
            className="text-base text-default-400 pointer-events-none flex-shrink-0"
            icon="proicons:search"
          />
        }
        type="search"
      />
    )
  );
};
