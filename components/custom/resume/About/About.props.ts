import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";


export interface AboutProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    name: string,
    photoUrl: string
};