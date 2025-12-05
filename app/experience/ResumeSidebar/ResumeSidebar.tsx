import clsx from "clsx";
import { ResumeSidebarProps } from "./ResumeSidebar.props";
import { Skills } from "./Skills/Skills";
import { Education } from "./Education/Education";
import { Roles } from "./Roles/Roles";
import styles from "./ResumeSidebar.module.css";
import { JSX } from "react";

export const ResumeSidebar = ({
  roles,
  languages,
  technologies,
  education,
  certificates,
  ...props
}: ResumeSidebarProps): JSX.Element => {
  return (
    <aside className={clsx(styles.sidebar, props.className)} {...props}>
      <Roles roles={roles} />
      <Skills
        {...languages}
        title="Programming languages"
        moreButtonText="and a bit of"
      />
      <Skills {...technologies} title="Technologies" />
      <Education {...education} title="Education" />
      <Education {...certificates} title="Certificates" />
    </aside>
  );
};
