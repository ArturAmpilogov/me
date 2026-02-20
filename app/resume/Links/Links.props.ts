import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ILink } from "../../../types";

export interface LinksProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: ILink[]
}