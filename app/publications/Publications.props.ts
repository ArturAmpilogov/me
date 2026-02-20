import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IPublication } from "../../types";

export interface PublicationsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  items: IPublication[];
}
