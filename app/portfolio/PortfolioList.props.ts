import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import { IPortfolio } from "../../types";

export interface PortfolioListProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  items: IPortfolio[];
}
