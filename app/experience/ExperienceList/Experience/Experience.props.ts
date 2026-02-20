import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ExperienceProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    position: string,
    organization: string,
    duration: { start: string, end: string }
    description: string,
    tags: string[]
}