import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { ExperienceProps } from "./Experience";

export interface ExperienceListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    items: ExperienceProps[]
}