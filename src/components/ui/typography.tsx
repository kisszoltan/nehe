import type { ComponentProps, FC, ReactNode } from "react";

import { cn } from "@heroui/theme";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const H1: FC<TypographyProps & ComponentProps<"h1">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

export const H2: FC<TypographyProps & ComponentProps<"h2">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-semibold text-foreground leading-tight",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export const H3: FC<TypographyProps & ComponentProps<"h3">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h3
      className={cn(
        "text-2xl md:text-3xl font-semibold text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
};

export const BodyLarge: FC<TypographyProps & ComponentProps<"p">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      className={cn("text-lg text-default-600 leading-relaxed", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export const BodyMedium: FC<TypographyProps & ComponentProps<"p">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      className={cn("text-base text-default-600 leading-relaxed", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export const BodySmall: FC<TypographyProps & ComponentProps<"p">> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      className={cn("text-sm text-default-500 leading-relaxed", className)}
      {...rest}
    >
      {children}
    </p>
  );
};
