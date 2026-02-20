import { JSX } from "react";
import { Experience } from "./Experience";
import { ExperienceListProps } from "./ExperienceList.props";
import { IExperience } from "../../../types";

export const ExperienceList = ({
  items,
  ...props
}: ExperienceListProps): JSX.Element => {
  const itemsToExperiences = (item: IExperience) => (
    <Experience key={`${item.position}-${item.organization}`} {...item} />
  );

  return (
    <ul {...props} className={props.className}>
      {items.map(itemsToExperiences)}
    </ul>
  );
};
