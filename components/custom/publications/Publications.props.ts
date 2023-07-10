import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import { IPublication } from "./IPublication";

export interface PublicationsProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  publications: IPublication[];
}
