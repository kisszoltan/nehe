"use client";

import { Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

import { useAuth } from "@/shared/auth";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) router.replace("/");
  }, [isAuthenticated, isLoading]);

  return isLoading ? (
    <Loading />
  ) : (
    <Suspense fallback={<Loading />}>
      <section className="max-w-7xl h-full mx-auto">{children}</section>
    </Suspense>
  );
}

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};
