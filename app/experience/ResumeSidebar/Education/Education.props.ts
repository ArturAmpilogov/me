import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ICertificate } from "../../../../types";

export interface EducationRecord extends Omit<ICertificate, "link" | "tags"> {
  link?: string;
  tags?: string[];
}

export interface EducationProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  primary: EducationRecord[];
  secondary?: EducationRecord[];
}
