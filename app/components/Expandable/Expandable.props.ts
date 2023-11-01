import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";


export interface ExpandableProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    more: ReactNode,
    moreButtonText?: string,
}