import { AboutProps } from "./About.props";
import styles from "./About.module.scss";
import cn from "classnames";

export const About = ({
  children,
  name,
  photoUrl,
  ...props
}: AboutProps): JSX.Element => {
  return (
    <div {...props} className={cn(styles.container)}>
      <h1>About me</h1>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>
        <img src={photoUrl} alt={`Photo ${name}`} width={160} height={168} />
        <p>
          {(children as string).split("\n\n").map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
