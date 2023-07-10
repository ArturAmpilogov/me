import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface ExperienceProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    position: string,
    organization: string,
    duration: { start: Date | string, end: Date | string }
    description: string,
    tags: string[]
}