import { ILayoutProps } from "./Layout.props";
import styles from "./Layout.module.scss";
import cn from "classnames";
import { Nav } from "../Nav/Nav";
import Script from "next/script";

export const Layout = ({ children, ...props }: ILayoutProps): JSX.Element => {
  return (
    <>
      <div {...props} className={cn(styles.container, props.className)}>
        <Nav />
        <div>{children}</div>
      </div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-X20GD52Z7Z"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-X20GD52Z7Z');
      `,
        }}
      />
    </>
  );
};
