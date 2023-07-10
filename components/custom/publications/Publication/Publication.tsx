import { PublicationProps } from "./Publication.props";
import styles from "./Publication.module.scss";

export const Publication = ({
  type,
  date,
  name,
  link,
  publisher,
}: PublicationProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>{" "}
        <span className={styles.type}>{type}</span>{" "}
        <span className={styles.publisher}>{publisher}</span>
      </div>
    </div>
  );
};
