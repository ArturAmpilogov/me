import { Experience } from "./Experience";
import { ExperienceProps } from "./Experience.props";
import { ExperienceListProps } from "./ExperienceList.props";
import cn from "classnames";
import styles from "./ExperienceList.module.css";

export const ExperienceList = ({
  items,
  ...props
}: ExperienceListProps): JSX.Element => {
  const itemsToExperiences = (item: ExperienceProps) => (
    <Experience key={`${item.position}-${item.organization}`} {...item} />
  );

  return (
    <>
      <h2>Experience</h2>
      <ul {...props} className={cn(styles.ul, props.className)}>
        {items.map(itemsToExperiences)}
      </ul>
    </>
  );
};
