import numbro from "numbro";
import { DateArg, formatDistanceToNow } from "date-fns";

export function normalizeString(input?: string) {
  return (
    input &&
    input
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "") // remove accents
      .toLowerCase()
  );
}

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const format = (
  value?: number | string | null,
  short = false,
): string => {
  try {
    return numbro(forcedNum(value)).format({
      average: short,
      thousandSeparated: true,
    });
  } catch {
    return "N/A";
  }
};

export const forcedNum = (value?: string | number | null): number =>
  !value ? 0 : typeof value === "string" ? Number.parseInt(value, 10) : value;

export const timeAgo = (value: DateArg<Date>): string =>
  formatDistanceToNow(value, {
    addSuffix: true,
    includeSeconds: true,
  });
