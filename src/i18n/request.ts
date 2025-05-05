import { getRequestConfig } from "next-intl/server";

import { getMessages } from "./utils";

import { getUserLocale } from "@/lib/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const messages = await getMessages(locale);

  return {
    locale,
    messages,
  };
});
