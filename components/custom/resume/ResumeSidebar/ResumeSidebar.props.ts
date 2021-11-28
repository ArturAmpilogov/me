import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { EducationProps } from "./Education/Education.props";
import { SkillsProps } from "./Skills/Skills.props";

export interface ResumeSidebarProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    languages: SkillsProps,
    technologies: SkillsProps,
    roles: string[],
    education: EducationProps, 
    certificates: EducationProps
}