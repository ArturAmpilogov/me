import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> {
  children: ReactNode;
  size?: "lg" | "md" | "sm";
  type?: "primary" | "ghost";
}
