import { ExperienceProps } from "./Experience.props";
import cn from "classnames";
import styles from "./Experience.module.css";
import { Tag, TagList } from "../../../components";

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
      <div className={styles.description}>
        {description.split("\n").map((line, index) => (
          <div key={index}>
            • {line}
            <br />
          </div>
        ))}
      </div>
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
