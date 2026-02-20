import { DetailedHTMLProps, HTMLAttributes } from "react";
import { EducationProps } from "./Education/Education.props";
import { SkillsProps } from "./Skills/Skills.props";

export interface ResumeSidebarProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  languages: Pick<SkillsProps, "primary" | "secondary">;
  technologies: Pick<SkillsProps, "primary" | "secondary">;
  roles: string[];
  education: Pick<EducationProps, "primary" | "secondary">;
  certificates: Pick<EducationProps, "primary" | "secondary">;
}
