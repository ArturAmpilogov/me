import { TagProps } from "./Tag.props";
import clsx from "clsx";
import styles from "./Tag.module.css";
import { JSX } from "react";

export const Tag = ({
  children,
  size = "md",
  type = "primary",
  ...props
}: TagProps): JSX.Element => {
  return (
    <span
      {...props}
      className={clsx(styles.tag, props.className, {
        [styles.primary]: type === "primary",
        [styles.ghost]: type === "ghost",
        [styles.lg]: size === "lg",
        [styles.md]: size === "md",
        [styles.sm]: size === "sm",
      })}
    >
      {children}
    </span>
  );
};
