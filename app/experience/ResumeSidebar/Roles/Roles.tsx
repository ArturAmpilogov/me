import { RolesProps } from "./Roles.props";
import styles from "./Roles.module.css";
import { JSX } from "react";

export const Roles = ({ roles, ...props }: RolesProps): JSX.Element => {
  return (
    <div {...props}>
      <h2>Roles</h2>
      <ul className={styles.container}>
        {roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </div>
  );
};
