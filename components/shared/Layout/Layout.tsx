import { ILayoutProps } from "./Layout.props";
import styles from "./Layout.module.scss";
import cn from "classnames";
import { Nav } from "../Nav/Nav";

export const Layout = ({ children, ...props }: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <Nav />
      <div {...props} className={cn(styles.layout, props.className)}>
        {children}
      </div>
    </div>
  );
};
