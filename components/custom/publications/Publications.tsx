import { PublicationsProps } from "./Publications.props";
import styles from "./Publications.module.scss";
import cn from "classnames";
import { Publication } from "./Publication";

export const Publications = ({
  publications,
  ...props
}: PublicationsProps): JSX.Element => {
  return (
    <div {...props} className={cn(styles.container)}>
      <h1>Publications</h1>
      <div className={styles.list}>
        {publications.map((pub) => (
          <Publication key={pub.link} publication={pub} />
        ))}
      </div>
    </div>
  );
};
