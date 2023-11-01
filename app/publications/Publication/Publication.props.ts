import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { IPublication } from "../../../types";

export interface PublicationProps
  extends IPublication,
    DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
