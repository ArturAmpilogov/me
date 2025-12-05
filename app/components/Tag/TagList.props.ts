import { DetailedHTMLProps, HtmlHTMLAttributes, JSX } from "react";

export interface TagListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: JSX.Element[],
}