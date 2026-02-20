import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface ExpandableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    more: ReactNode,
    moreButtonText?: string,
}