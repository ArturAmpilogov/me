import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface Link {
    name: string
    url: string,
    icon: string
}

export interface LinksProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: Link[]
}