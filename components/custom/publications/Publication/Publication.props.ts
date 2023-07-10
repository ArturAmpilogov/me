import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { IPublication } from "../../../../types/IPublication";

export interface PublicationProps
  extends IPublication,
    DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
