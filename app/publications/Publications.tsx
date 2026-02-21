import { PublicationsProps } from "./Publications.props";
import styles from "./Publications.module.scss";
import { Publication } from "./Publication";
import { JSX } from "react";

export const Publications = ({ items, ...props }: PublicationsProps): JSX.Element => {
  return (
    <div {...props} className={styles.container}>
      <h1>Publications</h1>
      <ul className={styles.list}>
        {items.map((pub) => (
          <Publication key={pub.link} {...pub} />
        ))}
      </ul>
    </div>
  );
};
