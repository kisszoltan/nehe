import { title } from "@/components/ui/primitives";

type ColorType =
  | "violet"
  | "yellow"
  | "blue"
  | "cyan"
  | "green"
  | "pink"
  | "foreground";

const colorize = (text: string, match: string, color: ColorType): string => {
  const regex = new RegExp(`(${match})`, "gi");

  return text.replace(regex, (matched) => {
    return `<span class="${title({ color })}">${matched}</span>`;
  });
};

export const HighlightTitle = ({
  text,
  match,
  color,
}: {
  text: string;
  match: string;
  color: ColorType;
}) => {
  const coloredText = colorize(text, match, color);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: coloredText }}
      className={title()}
    />
  );
};
