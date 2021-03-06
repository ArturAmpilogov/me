import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { ExperienceProps } from "./Experience.props";

export interface ExperinceListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    items: ExperienceProps[]
}