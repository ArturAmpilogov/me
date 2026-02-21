import { PublicationProps } from "./Publication.props";
import styles from "./Publication.module.scss";
import { JSX } from "react";

export const Publication = ({
  type,
  date,
  name,
  link,
  archive,
  publisher,
  description,
  language,
}: PublicationProps): JSX.Element => {
  const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
  let typePreposition = "";
  switch (type) {
    case "article":
      typePreposition = "in";
      break;
    case "expert commentary":
      typePreposition = "for";
      break;
    case "video":
      typePreposition = "on";
      break;
    default: {
      const _exhaustive: never = type;
      typePreposition = "in";
      void _exhaustive;
    }
  }

  return (
    <li className={styles.container}>
      <div>
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
          {name}
        </a>
        {archive && (
          <span className={styles.archive}>
            {"("}
            <a href={archive} target="_blank" rel="noreferrer">
              Archive
            </a>
            {")"}
          </span>
        )}
      </div>
      {description && <div>{description}</div>}
      {language && <div>Language: {language}</div>}
      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>{" "}
        <span className={styles.type}>{`${typeCapitalized} ${typePreposition} `}</span>{" "}
        <span className={styles.publisher}>{publisher}</span>
      </div>
    </li>
  );
};
