import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IExperience } from "@/types";

export interface ExperienceListProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> {
  items: IExperience[];
}
