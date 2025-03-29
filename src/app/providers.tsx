"use client";

import type { ThemeProviderProps } from "next-themes";

import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ToastProvider } from "@heroui/react";
import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  useEffect(() => {
    const firebaseConfig = process.env.NEXT_PUBLIC_GOOGLE_FIREBASE;

    if (!!firebaseConfig) {
      getAnalytics(initializeApp(JSON.parse(firebaseConfig)));
    }

    const clarityId = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY;

    if (!!clarityId) {
      Clarity.init(clarityId);
    }
  }, []);

  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider />
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
