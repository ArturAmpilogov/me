import { ILayoutProps } from "./Layout.props";
import styles from "./Layout.module.scss";
import cn from "classnames";
import { Nav } from "../Nav/Nav";

export const Layout = ({ children, ...props }: ILayoutProps): JSX.Element => {
  return (
    <div {...props} className={cn(styles.container, props.className)}>
      <Nav />
      <div>{children}</div>
    </div>
  );
};
