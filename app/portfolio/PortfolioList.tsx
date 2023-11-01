import { Portfolio } from "./Portfolio";
import { PortfolioListProps } from "./PortfolioList.props";
import styles from "./PortfolioList.module.scss";

export const PortfolioList = ({ items }: PortfolioListProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <Portfolio key={item.link} {...item} />
      ))}
    </ul>
  );
};
