import Script from "next/script";
import { Nav } from "./components/Nav/Nav";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import styles from "./Layout.module.scss";
import clsx from "clsx";
import "../styles/global.css";

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  icons: {
    apple: {
      type: "image/png",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  title: "Artur Ampilogov",
  description: "Resume Artur Ampilogov",
};

const openSans = Open_Sans({ subsets: ["latin"], weight: ["500", "700"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={clsx(styles.container, openSans.className)}>
        <Script
          id="google-tag-manager-header-remote-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-X20GD52Z7Z"
        />
        <Nav />
        {children}
        <Script id="google-tag-manager-header-body-script" strategy="afterInteractive">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments); }
         gtag('js', new Date());
         gtag('config', 'G-X20GD52Z7Z');
        `}
        </Script>
      </body>
    </html>
  );
}
