import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface EducationRecord {
    name: string,
    organization: string,
    dateOfIssue: Date,
    link?: string,
    tags: string[]
};

export interface EducationProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    primary: EducationRecord[],
    secondary?: EducationRecord[],
};