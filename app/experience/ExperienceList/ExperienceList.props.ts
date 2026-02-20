import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ExperienceProps } from "./Experience";

export interface ExperienceListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    items: ExperienceProps[]
}