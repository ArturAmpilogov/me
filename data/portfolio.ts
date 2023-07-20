import { IPortfolio } from "../types";

export const portfolio: IPortfolio[] = [
  {
    name: "Personal website",
    description:
      "This website itself is open sourced and is generated with React and NextJS.",
    link: "https://github.com/ArturAmpilogov/me",
  },
  {
    name: "Fireway NPM package",
    description:
      "Open source package for Firebase database migrations. It is an improved version of another project with bug fixes and TypeScript source code. The database migrations were required for a health startup.",
    link: "https://github.com/dev-aces/fireway",
  },
  {
    name: "Node-DBMate",
    description:
      "Open source package that supports queries for a ClickHouse database. This is an improved forked project, it was required for a FinTech startup and ClickHouse integration.",
    link: "https://github.com/ArturAmpilogov/node-dbmate",
  },
  {
    name: "@types/react-dates",
    description:
      "Open source TypeScript definitions for Airbnb React dates UI controls. The definitions were required for several startups projects.",
    link: "https://www.npmjs.com/package/@types/react-dates",
  },
  {
    name: "WPF/XAML themes for Microsoft.NET",
    description: "Open source project with WPF/XAML themes for Microsoft.NET.",
    link: "https://github.com/ArturAmpilogov/WpfThemesHR",
    images: [
      "/img/portfolio/wpf_theme_1.png",
      "/img/portfolio/wpf_theme_2.png",
    ],
    imageMaxWidth: 600,
  },
  {
    name: "Robokassa NPM package",
    description:
      "Open source package for working with the Robokassa payment system. The integration was required for one of the Education startup.",
    link: "https://github.com/dev-aces/robokassa",
  },
  {
    name: "Kana",
    description: "Smart pricing page for a FinTech startup.",
    link: "https://www.usekana.com/",
    images: [
      "/img/portfolio/kana.webp",
      "/img/portfolio/kana_analytics.svg",
      "/img/portfolio/kana_plan.png",
      "/img/portfolio/kana_plans.png",
    ],
  },
  {
    name: "Perci Health Referrals",
    description: "Referral system for a Health startup.",
    link: "https://www.percihealth.com/",
    images: [
      "/img/portfolio/perci_referral.webp",
      "/img/portfolio/perci_referral.png",
    ],
  },
  {
    name: "High Robotics - Minespector",
    description:
      "UX research and software creation for a tablet controller of a mining safety robot.",
    link: "https://vimeo.com/85248707",
    images: [
      "/img/portfolio/minespector_ui.png",
      "/img/portfolio/minespector.webp",
    ],
  },
  {
    name: "Socionom",
    description: "Social network for education.",
    link: "https://socionom.org/",
    images: ["/img/portfolio/socionom.webp", "/img/portfolio/socionom.png"],
  },
];
