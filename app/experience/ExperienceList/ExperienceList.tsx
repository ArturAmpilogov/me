import { JSX } from "react";
import { Experience, ExperienceProps } from "./Experience";
import { ExperienceListProps } from "./ExperienceList.props";

export const ExperienceList = ({
  items,
  ...props
}: ExperienceListProps): JSX.Element => {
  const itemsToExperiences = (item: ExperienceProps) => (
    <Experience key={`${item.position}-${item.organization}`} {...item} />
  );

  return (
    <>
      <ul {...props} className={props.className}>
        {items.map(itemsToExperiences)}
      </ul>
    </>
  );
};
