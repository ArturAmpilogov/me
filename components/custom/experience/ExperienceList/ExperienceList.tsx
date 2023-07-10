import { Experience, ExperienceProps } from "./Experience";
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
      <ul {...props} className={cn(styles.ul, props.className)}>
        {items.map(itemsToExperiences)}
      </ul>
    </>
  );
};
