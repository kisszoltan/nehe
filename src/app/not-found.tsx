"use client";

import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

import { message, title } from "@/components/ui/primitives";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <h2 className={title({ size: "sm" })}>404</h2>
      <p className={message()}>This page could not be found.</p>
      <Button onPress={() => router.back()}>Go Back</Button>
    </div>
  );
}
