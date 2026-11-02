import Image from "next/image";
import { IPortfolio } from "@/types";
import styles from "./Portfolio.module.scss";
import { imageSizes } from "@/app/components/lib/imageSizes";

const isVideo = (src: string) => src.endsWith(".webm");

export const Portfolio = ({ name, description, link, images, imageMaxWidth = 800 }: IPortfolio) => {
  return (
    <li className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        {name}
      </a>
      <div className={styles.description}>{description}</div>
      <div className={styles.images}>
        {images?.map((src, i) =>
          isVideo(src) ? (
            <div
              key={src}
              className={styles["video-container"]}
              style={{ maxWidth: imageMaxWidth }}
            >
              <a href={src} target="_blank" rel="noreferrer">
                <video
                  className={styles.video}
                  aria-label={`Screen recording of ${name} (${i + 1})`}
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </a>
            </div>
          ) : (
            <div
              key={src}
              className={styles["image-container"]}
              style={{ maxWidth: imageMaxWidth }}
            >
              <a href={src} target="_blank" rel="noreferrer">
                <Image
                  className={styles.image}
                  alt={`Screenshot of ${name} (${i + 1})`}
                  src={src}
                  fill
                  sizes={imageSizes({
                    desktop: `${imageMaxWidth}px`,
                    tablet: `${imageMaxWidth}px`,
                    mobile: "100vw",
                  })}
                  quality={90}
                />
              </a>
            </div>
          ),
        )}
      </div>
    </li>
  );
};
