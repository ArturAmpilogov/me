import { PublicationProps } from "./Publication.props";
import styles from "./Publication.module.scss";

export const Publication = ({ publication }: PublicationProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <a href={publication.link} target="_blank">
        {publication.name}
      </a>
      <div className={styles.footer}>
        <span className={styles.date}>{publication.date}</span>{" "}
        <span className={styles.type}>{publication.type}</span>{" "}
        <span className={styles.publisher}>{publication.publisher}</span>
      </div>
    </div>
  );
};
