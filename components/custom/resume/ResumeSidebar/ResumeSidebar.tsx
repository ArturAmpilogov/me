import { ResumeSidebarProps } from "./ResumeSidebar.props";
import { Skills } from "./Skills/Skills";
import cn from "classnames";
import styles from "./ResumeSidebar.module.css";
import { Education } from "./Education/Education";
import { Roles } from "./Roles/Roles";

export const ResumeSidebar = ({ roles, languages, technologies, education, certificates, ...props} : ResumeSidebarProps): JSX.Element => {

    return (
    <aside className={cn(styles.sidebar, props.className)} {...props}>
        <Roles roles={roles} />
        <Skills {...languages} title="Programming languages" moreButtonText="and a bit of" />
        <Skills {...technologies} title="Technologies" />
        <Education {...education} title="Education" />
        <Education {...certificates} title="Certificates" />
    </aside>);
}