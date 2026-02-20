import { AboutProps } from "./About.props";
import styles from "./About.module.scss";
import cn from "clsx";
import { JSX } from "react";
import Image from "next/image";

export const About = ({
  children,
  name,
  photoUrl,
  ...props
}: AboutProps): JSX.Element => {
  return (
    <div {...props} className={cn(styles.container, props.className)}>
      <h1>About me</h1>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>
        <Image src={photoUrl} alt={`Photo ${name}`} width={160} height={168} />
        <div>
          {children.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
