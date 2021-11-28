import { RolesProps } from "./Roles.prop";
import styles from "./Roles.module.css";

export const Roles = ({roles, ...props}: RolesProps): JSX.Element => {
    return (
    <div {...props}>
        <h2>Roles</h2>
        <div className={styles.container}>{roles.map(role => <span key={role}>{role}</span>)}</div>
    </div>);
}