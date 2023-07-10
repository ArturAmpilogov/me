import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { IPublication } from "./IPublication";

export interface PublicationProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  publication: IPublication;
}
