import { Portfolio } from "./Portfolio";
import { PortfolioListProps } from "./PortfolioList.props";

export const PortfolioList = ({ items }: PortfolioListProps) => {
  return (
    <>
      {items.map((item) => (
        <Portfolio key={item.link} {...item} />
      ))}
    </>
  );
};
