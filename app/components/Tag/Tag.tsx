import { TagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({children, size="md", type="primary", ...props}: TagProps): JSX.Element => {
    return (
    <span {...props} 
        className={cn(styles.tag, props.className, {
            [styles.primary]: type === "primary",
            [styles.ghost]: type === "ghost",
            [styles.lg]: size === "lg",
            [styles.md]: size === "md",
            [styles.sm]: size === "sm",
        })}>
        {children}       
    </span>
    );
}