import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface TagListProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: JSX.Element[],
}