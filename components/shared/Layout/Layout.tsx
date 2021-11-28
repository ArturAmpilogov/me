import { ILayoutProps } from "./Layout.props";
import styles from "./Layout.module.scss";
import cn from "classnames";

export const Layout = ({ children, ...props}: ILayoutProps): JSX.Element => {
    return (
        <div {...props} className={cn(styles.layout, props.className)}>
            {children}
        </div>        
    );
};