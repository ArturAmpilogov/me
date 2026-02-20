import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
}