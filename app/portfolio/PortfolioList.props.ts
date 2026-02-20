import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IPortfolio } from "../../types";

export interface PortfolioListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  items: IPortfolio[];
}
