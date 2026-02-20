import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface SkillsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    moreButtonText?: string,
    primary: string[],
    secondary: string[]
}