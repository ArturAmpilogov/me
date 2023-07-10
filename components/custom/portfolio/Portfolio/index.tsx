import { IPortfolio } from "../../../../types";
import styles from "./Portfolio.module.scss";

export const Portfolio = ({ name, description, link, images }: IPortfolio) => {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        {name}
      </a>
      <div className={styles.description}>{description}</div>
      <div className={styles.images}>
        {images?.map((src) => (
          <img className={styles.image} key={src} src={src} />
        ))}
      </div>
    </div>
  );
};
