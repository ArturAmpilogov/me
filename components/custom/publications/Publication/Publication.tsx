import { PublicationProps } from "./Publication.props";
import styles from "./Publication.module.scss";

export const Publication = ({
  type,
  date,
  name,
  link,
  publisher,
  description,
}: PublicationProps): JSX.Element => {
  const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        {name}
      </a>
      {description && <div>{description}</div>}
      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>{" "}
        <span className={styles.publisher}>{`${typeCapitalized} at `}</span>{" "}
        <span className={styles.publisher}>{publisher}</span>
      </div>
    </div>
  );
};
