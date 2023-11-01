import { TagListProps } from "./TagList.props";
import styles from "./TagList.module.css";
import cn from "classnames";

export const TagList = ({children, ...props}: TagListProps): JSX.Element => {
    return (
    <div className={cn(styles.taglist, props.className)}>
        {children}
    </div>
    );
}