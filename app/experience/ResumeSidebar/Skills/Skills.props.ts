import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";


export interface SkillsProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    moreButtonText?: string,
    primary: string[],
    secondary: string[]
}