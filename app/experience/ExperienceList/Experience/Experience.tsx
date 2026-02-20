import { ExperienceProps } from "./Experience.props";
import cn from "clsx";
import styles from "./Experience.module.css";
import { Tag, TagList } from "../../../components";
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
    <li {...props} className={cn(styles.li, props.className)}>
      <div className={styles.position}>{position}</div>
      <div className={styles.organization}>{organization}</div>
      <div
        className={styles.duration}
      >{`${duration.start}-${duration.end}`}</div>
      <ul className={styles.description}>
        {description.split("\n").map((line) => (
          <li key={line}>{line}</li>
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
