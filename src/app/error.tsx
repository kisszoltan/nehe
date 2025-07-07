"use client";

import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { BodyMedium, BodySmall, H2 } from "@/components/ui/typography";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);
  const t = useTranslations("Error");

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <H2>{t("Error")}</H2>
      <BodyMedium>{t("Something went wrong")}</BodyMedium>
      <BodySmall>{error.message}</BodySmall>
      <Button
        onPress={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {t("Try again")}
      </Button>
    </div>
  );
}
