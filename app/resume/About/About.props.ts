import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface AboutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: string,
    name: string,
    photoUrl: string
};