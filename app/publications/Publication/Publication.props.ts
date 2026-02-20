import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IPublication } from "../../../types";

export interface PublicationProps
  extends IPublication,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
