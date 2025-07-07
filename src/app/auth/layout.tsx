"use client";

import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

import Loading from "@/app/loading";
import { useAuth } from "@/hooks/auth";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated()) router.replace("/dashboard");
  }, [isAuthenticated, isLoading]);

  return isLoading ? (
    Loading()
  ) : (
    <Suspense fallback={Loading()}>
      <section className="max-w-7xl h-full mx-auto">{children}</section>
    </Suspense>
  );
}
