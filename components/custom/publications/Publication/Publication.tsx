import { PublicationProps } from "./Publication.props";
import styles from "./Publication.module.scss";

export const Publication = ({
  type,
  date,
  name,
  link,
  publisher,
  description,
  language,
}: PublicationProps): JSX.Element => {
  const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
  const typePreposition = type === "article" ? "in" : "for";

  return (
    <li className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        {name}
      </a>
      {description && <div>{description}</div>}
      {language && <div>Language: {language}</div>}
      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>{" "}
        <span
          className={styles.type}
        >{`${typeCapitalized} ${typePreposition} `}</span>{" "}
        <span className={styles.publisher}>{publisher}</span>
      </div>
    </li>
  );
};
