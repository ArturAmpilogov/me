import { DetailedHTMLProps, HTMLAttributes, JSX } from "react";

export interface TagListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: JSX.Element[],
}