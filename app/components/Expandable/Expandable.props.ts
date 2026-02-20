import { ReactNode } from "react";

export interface ExpandableProps {
    children: ReactNode,
    more: ReactNode,
    moreButtonText?: string,
}