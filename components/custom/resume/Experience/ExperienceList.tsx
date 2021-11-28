import { Experience } from "./Experience";
import { ExperienceProps } from "./Experience.props";
import { ExperinceListProps } from "./ExperienceList.props";
import cn from "classnames";
import styles from "./ExperienceList.module.css";
import { Expandable } from "../../../shared/Expandable/Expandable";

export const ExperienceList = ({items, ...props}: ExperinceListProps): JSX.Element => {
    const itemsToExperiences = (item: ExperienceProps) => 
        <Experience key={`${item.position}-${item.organization}`} {...item}/>;

    const topCount = 3;
    const primaryExperience = items.slice(0, topCount).map(itemsToExperiences);
    const moreExperience = items.length > topCount ? items.slice(topCount).map(itemsToExperiences) : undefined;

    return (
    <>
        <h2>Experience</h2>        
        <ul {...props} className={cn(styles.ul, props.className)}>
            <Expandable more={moreExperience}>
                {primaryExperience}
            </Expandable>
        </ul>
    </>
    );
}