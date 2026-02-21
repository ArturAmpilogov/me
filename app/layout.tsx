import Script from "next/script";
import { Nav } from "./components";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import styles from "./Layout.module.scss";
import clsx from "clsx";
import "../styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ampilogov.com"),
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
  title: {
    default: "Artur Ampilogov — Software Architect & Senior Full-Stack Engineer",
    template: "%s | Artur Ampilogov",
  },
  description:
    "Staff-level Software Architect & Senior Full-Stack Engineer with 18+ years of experience in cloud architectures, engineering leadership, and full-stack development.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Artur Ampilogov",
  },
  twitter: {
    card: "summary",
  },
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
