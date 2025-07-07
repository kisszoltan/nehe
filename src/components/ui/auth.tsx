"use client";

import { FC, ReactNode } from "react";

import { useAuth } from "@/hooks/auth";

export const Authenticated: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? children : <></>;
};

export const Unauthenticated: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated() ? children : <></>;
};
