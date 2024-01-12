import Image from "next/image";
import { IPortfolio } from "../../../types";
import styles from "./Portfolio.module.scss";
import { imageSizes } from "../../components/lib/imageSizes";
import Link from "next/link";

export const Portfolio = ({
  name,
  description,
  link,
  images,
  imageMaxWidth = 800,
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
            <Link href={src} target="_blank">
              <Image
                className={styles.image}
                alt={`${name} image ${i}`}
                src={src}
                unoptimized={src.endsWith(".webp")}
                fill
                sizes={imageSizes({
                  desktop: `${imageMaxWidth}px`,
                  tablet: `${imageMaxWidth}px`,
                  mobile: "100vw",
                })}
                quality={90}
              />
            </Link>
          </div>
        ))}
      </div>
    </li>
  );
};
