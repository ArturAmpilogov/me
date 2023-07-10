import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import { IPublication } from "./Publication";

export interface PublicationsProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  items: IPublication[];
}
