import { Expandable, Tag, TagList } from "../../../components";
import { SkillsProps } from "./Skills.props";

export const Skills = ({
  primary,
  secondary,
  title,
  moreButtonText = "see more",
  ...props
}: SkillsProps): JSX.Element => {
  const primarySkills = (
    <TagList>
      {primary.map((skill) => (
        <Tag key={skill} type="primary" size="lg">
          {skill}
        </Tag>
      ))}
    </TagList>
  );
  const secondarySkills = (
    <TagList>
      {secondary.map((skill) => (
        <Tag key={skill} type="ghost" size="md">
          {skill}
        </Tag>
      ))}
    </TagList>
  );

  return (
    <div {...props}>
      <h2>{title}</h2>
      <Expandable more={secondarySkills} moreButtonText={moreButtonText}>
        {primarySkills}
      </Expandable>
    </div>
  );
};
