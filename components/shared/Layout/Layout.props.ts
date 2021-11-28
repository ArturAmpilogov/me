import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ILayoutProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sidebar?: ReactNode,
    children: ReactNode
}