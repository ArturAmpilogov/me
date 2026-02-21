import { ExperienceProps } from "./Experience.props";
import clsx from "clsx";
import styles from "./Experience.module.css";
import { Tag, TagList } from "@/app/components";
import { JSX } from "react";

export const Experience = ({
  position,
  organization,
  duration,
  description,
  tags,
  ...props
}: ExperienceProps): JSX.Element => {
  return (
    <li {...props} className={clsx(styles.li, props.className)}>
      <h3 className={styles.position}>{position}</h3>
      <div className={styles.organization}>{organization}</div>
      <div className={styles.duration}>{`${duration.start} – ${duration.end}`}</div>
      <ul className={styles.description}>
        {description.split("\n").map((line, index) => (
          <li key={`${index}-${line.slice(0, 40)}`}>{line}</li>
        ))}
      </ul>
      <TagList>
        {tags.map((tag) => (
          <Tag key={`${organization}-${tag}`} type="ghost" size="sm">
            {tag}
          </Tag>
        ))}
      </TagList>
    </li>
  );
};
