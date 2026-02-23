import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RolesProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  roles: readonly string[];
}
