import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ExperienceProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    position: string,
    organization: string,
    duration: { start: Date | string, end: Date | string }
    description: string,
    tags: string[]
}