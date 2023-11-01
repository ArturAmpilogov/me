import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import { IPublication } from "../../types";

export interface PublicationsProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  items: IPublication[];
}
