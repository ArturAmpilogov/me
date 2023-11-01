import Image from "next/image";
import { IPortfolio } from "../../../types";
import styles from "./Portfolio.module.scss";
import { imageSizes } from "../../components/lib/imageSizes";

export const Portfolio = ({
  name,
  description,
  link,
  images,
  imageMaxWidth,
}: IPortfolio) => {
  return (
    <li className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        {name}
      </a>
      <div className={styles.description}>{description}</div>
      <div className={styles.images}>
        {images?.map((src, i) => (
          <div
            key={src}
            className={styles["image-container"]}
            style={{ maxWidth: imageMaxWidth }}
          >
            <Image
              className={styles.image}
              alt={`${name} image ${i}`}
              src={src}
              fill
              quality={95}
              sizes={imageSizes({
                desktop: `${imageMaxWidth}px`,
                tablet: "100vw",
                mobile: "100vw",
              })}
            />
          </div>
        ))}
      </div>
    </li>
  );
};