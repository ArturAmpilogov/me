import { IPortfolio } from "../types";

export const portfolio: IPortfolio[] = [
  {
    name: "Nodia",
    description:
      "Digital exhibitions. The project is built with React.JS, Next.JS, TailwindCSS, TypeScript, Firebase, Solidity and Ethereum blockchain. The project has not been released live yet.",
    link: "https://www.linkedin.com/in/artur-ampilogov/",
    images: [
      "/img/portfolio/aarrcc.webp",
      "/img/portfolio/aarrcc_wallet_selection.png",
    ],
    imageMaxWidth: 600,
  },
  {
    name: "Perci Health Referrals",
    description:
      "Referral system for the Healthcare startup, made with React.JS and Firebase.",
    link: "https://www.percihealth.com/",
    images: [
      "/img/portfolio/perci_referral.webp",
      "/img/portfolio/perci_referral.png",
    ],
    imageMaxWidth: 600,
  },
  {
    name: "Kana",
    description:
      "Smart pricing page for the UK FinTech startup. The project is built with React.JS, Next.JS, Nest.JS, TypeScript, GoLang, PostgresDB and DynamoDB.",
    link: "https://www.usekana.com/",
    images: [
      "/img/portfolio/kana.webp",
      "/img/portfolio/kana_analytics.svg",
      "/img/portfolio/kana_plan.png",
      "/img/portfolio/kana_plans.png",
    ],
    imageMaxWidth: 600,
  },
  {
    name: "High Robotics - Minespector",
    description:
      "Mining safety robot. The work included UX research and software creation for the tablet controller of the robot.",
    link: "https://vimeo.com/85248707",
    images: [
      "/img/portfolio/minespector_ui.png",
      "/img/portfolio/minespector.webp",
    ],
    imageMaxWidth: 600,
  },
  {
    name: "Socionom",
    description:
      "The social network for education. The work is done as the CTO, including architecture, DevOps, and microservices creation. The team used Vue.JS, Node.JS, MongoDB, Postgres, and Redis.",
    link: "https://socionom.org/",
    images: ["/img/portfolio/socionom.webp"],
  },
  {
    name: "WPF/XAML themes for Microsoft.NET",
    description:
      "An open-source project with WPF/XAML themes for Microsoft.NET.",
    link: "https://github.com/ArturAmpilogov/WpfThemesHR",
    images: [
      "/img/portfolio/wpf_theme_1.png",
      "/img/portfolio/wpf_theme_2.png",
    ],
    imageMaxWidth: 600,
  },
  {
    name: "Personal website",
    description:
      "This website itself is an open-sourced example that is built with React and NextJS.",
    link: "https://github.com/ArturAmpilogov/me",
  },
  {
    name: "Fireway NPM package",
    description:
      "An open-source package for Firebase database migrations. It is an improved version of another project with bug fixes and TypeScript source code. Database migrations were required for the Healthcare startup.",
    link: "https://github.com/dev-aces/fireway",
  },
  {
    name: "Node-DBMate",
    description:
      "An open-source package that supports queries for the ClickHouse database. This is an improved forked project, it was required for the FinTech startup and ClickHouse integration.",
    link: "https://github.com/ArturAmpilogov/node-dbmate",
  },
  {
    name: "@types/react-dates",
    description:
      "Open-source TypeScript definitions for Airbnb React dates UI controls. The definitions were required for several startups projects.",
    link: "https://www.npmjs.com/package/@types/react-dates",
  },
  {
    name: "Robokassa NPM package",
    description:
      "Open source package for working with the Robokassa payment system. The integration was required for the EdTech startup.",
    link: "https://github.com/dev-aces/robokassa",
  },
  {
    name: "Kana NPM packages",
    description:
      "Open-source frontend and backend packages for convenient work with Kana GraphQL API",
    link: "https://www.npmjs.com/package/@usekana/admin-kana-js",
  },
];
