import { EducationProps, EducationRecord } from "./Education.props";
import styles from "./Education.module.css";
import { Expandable, Tag, TagList } from "../../../components";

export const Education = ({
  primary,
  secondary,
  title,
  ...props
}: EducationProps): JSX.Element => {
  const educationRecordToListItem = (rec: EducationRecord) => {
    return (
      <li className={styles.li} key={`${rec.name}-${rec.dateOfIssue}`}>
        {rec.link ? (
          <a
            href={rec.link}
            target="_blank"
            rel="noreferrer"
            className={styles.name}
          >
            {rec.name}
          </a>
        ) : (
          <div className={styles.name}>{rec.name}</div>
        )}
        <div className={styles.org}>{rec.organization}</div>
        <div className={styles.date}>{rec.dateOfIssue.toString()}</div>
        {rec.tags && (
          <TagList>
            {rec.tags.map((tag) => (
              <Tag key={`${rec.name}-${tag}`} type="ghost" size="sm">
                {tag}
              </Tag>
            ))}
          </TagList>
        )}
      </li>
    );
  };

  const primaryEducation = (
    <ul className={styles.ul}>{primary.map(educationRecordToListItem)}</ul>
  );
  const secondryEducation = secondary && (
    <ul className={styles.ul}>{secondary.map(educationRecordToListItem)}</ul>
  );

  const body = !secondryEducation ? (
    primaryEducation
  ) : (
    <Expandable more={secondryEducation}>{primaryEducation}</Expandable>
  );
  return (
    <div {...props}>
      <h2>{title}</h2>
      {body}
    </div>
  );
};
