import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";


export interface RolesProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    roles: string[]
}