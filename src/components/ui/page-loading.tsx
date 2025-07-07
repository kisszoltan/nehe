"use client";

import { Spinner } from "@heroui/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useNavigationLoading } from "@/contexts/navigation-context";

export function PageLoading() {
  const { loading, setLoading } = useNavigationLoading();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="bg-default-500 fixed inset-0 z-50 flex items-center justify-center opacity-50">
      <Spinner color="default" size="lg" />
    </div>
  );
}
