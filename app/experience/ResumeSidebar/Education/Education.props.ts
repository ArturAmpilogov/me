import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IEducation } from "@/types";

export interface EducationProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  title: string;
  primary: IEducation[];
  secondary?: IEducation[];
}
