import { IPortfolio } from "../../../../types";
import styles from "./Portfolio.module.scss";

export const Portfolio = ({
  name,
  description,
  link,
  images,
  imageMaxWidth,
}: IPortfolio) => {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        {name}
      </a>
      <div className={styles.description}>{description}</div>
      <div className={styles.images}>
        {images?.map((src) => (
          <img
            className={styles.image}
            style={{ maxWidth: imageMaxWidth }}
            key={src}
            src={src}
          />
        ))}
      </div>
    </div>
  );
};
