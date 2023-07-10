import { IPortfolio } from "../types";

export const portfolio: IPortfolio[] = [
  {
    name: "Fireway NPM package",
    description:
      "Open source package for Firebase database migrations. It is an improved version of another project with bug fixes and TypeScript source code. It is the only available public NPM package that works good with Firebase migrations.",
    link: "https://github.com/dev-aces/fireway",
  },
  {
    name: "Node-DBMate",
    description:
      "Open source package that supports queries for a ClickHouse database. This is an improved forked project, it was required for one of the UK finance startup and ClickHouse integration.",
    link: "https://github.com/ArturAmpilogov/node-dbmate",
  },
  {
    name: "@types/react-dates",
    description: "Open source TypeScript definitions for Airbnb React dates UI controls.",
    link: "https://www.npmjs.com/package/@types/react-dates",
  },
  {
    name: "Robokassa NPM package",
    description:
      "Open source package for working with the Robokassa payment system. The integration was required for one of the Education startup.",
    link: "https://github.com/dev-aces/robokassa",
  },
  {
    name: "Perci Health Referrals",
    description: "Referral system for a Health startup.",
    link: "https://www.percihealth.com/",
    images: ["/img/portfolio/perci_referral.webp"],
  },
  {
    name: "Kana",
    description: "Smart pricing page for a financial startup.",
    link: "https://www.usekana.com/",
    images: ["/img/portfolio/kana.gif", "/img/portfolio/kana_analytics.svg"],
  },
  {
    name: "Socionom",
    description: "Social network for education.",
    link: "https://socionom.org/",
    images: ["/img/portfolio/socionom.png"],
  },
  {
    name: "WPF/XAML themes for Microsoft.NET",
    description: "Open source project with WPF/XAML themes for Microsoft.NET.",
    link: "https://github.com/ArturAmpilogov/WpfThemesHR",
    images: [
      "/img/portfolio/wpf_theme_1.png",
      "/img/portfolio/wpf_theme_2.png",
    ],
  },
];
