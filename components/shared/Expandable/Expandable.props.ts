import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";


export interface ExapndableProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    more: ReactNode,
    moreButtonText?: string,
}