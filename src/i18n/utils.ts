import { createTranslator } from "next-intl";
import { getMessages as getIntlMessages } from "next-intl/server";

export async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch {
    return (await import(`../../messages/en.json`)).default;
  }
}

export async function getTranslations(namespace: string, locale: string) {
  const messages = await getIntlMessages({ locale });

  return createTranslator({
    locale,
    messages,
    namespace,
  });
}
