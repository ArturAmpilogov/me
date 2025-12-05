import { IExperience } from "../types";

export const experience: IExperience[] = [
  {
    position: "Full-stack Developer (full time, contract)",
    organization: "Perci Health (UK, remote)",
    duration: { start: "Apr 2025", end: "current" },
    description:
      "Rejoined Perci Health by request to co-lead the architecture and backend development of the next-generation healthcare platform, building a scalable Node.js/Firebase solution used across mobile and web clients within a team of 7 engineers.\n" +
      "Designed core backend foundations (API patterns, Firestore schema, security, versioning) and introduced a custom concurrency-protection layer that prevents race conditions and guarantees state integrity across all APIs.\n" +
      "Delivered end-to-end orchestration across scheduling, messaging, authentication, and care-pathway workflows, integrating systems such as Cal.com, GetStream, Awell, Medplum (FHIR), Descope, Customer.io, Slack, and Google Cloud Events.\n" +
      "Implemented Fast Healthcare Interoperability Resources (FHIR) data flows and backend APIs used by the mobile app, supporting onboarding, scheduling, and care-delivery workflows.\n" +
      "Collaborated closely with frontend engineers, QA, PM, a full-stack engineer, and the CTO to clarify backend interfaces, unblock development, and drive consistent adoption of platform patterns.\n" +
      "Played a key role in delivering a high-stakes demo for a major partner under extreme time pressure; the success directly supported new commercial agreements.",
    tags: [
      "TypeScript",
      "Node.JS",
      "REST API",
      "Firebase",
      "Google Cloud",
      "Flutter",
      "FlutterFlow",
      "Medplum",
      "FHIR",
      "AI",
    ],
  },
  {
    position: "Full-stack Engineer (full time, contract)",
    organization: "Checkatrade (UK, remote)",
    duration: { start: "Feb 2024", end: "Mar 2025" },
    description:
      "Contributed to the Core Platform team within a large UK marketplace company with more than 100 engineers, delivering shared tooling and platform upgrades used by more than 10 engineering teams across multiple products, improving consistency and development efficiency.\n" +
      "Helped build an AI-powered image search prototype using GCP, Firestore, Cloud Run, and Gemini, exploring retrieval and ranking approaches for future product integration.\n" +
      "Owned the migration of Google Cloud Functions from v1 to v2 and upgraded organization tooling and backend services to .NET 8 and .NET 9 for the Bidding and Trades teams, increasing reliability, reducing cold starts, and improving deployment performance.\n" +
      "Enhanced organization-wide libraries by improving the internal logging system and implementing Streaming Pull support for GCP Pub/Sub consumers, increasing message throughput, reducing processing latency, and eliminating hundreds of incorrect error reports per day.\n" +
      "Strengthened observability by extending Datadog instrumentation, adding full request tracing and performance metrics across key backend services, improving issue detection and debugging speed for multiple teams.",
    tags: [
      "C#.NET",
      "ASP.NET",
      "TypeScript",
      "Firebase",
      "Node.JS",
      "Google Cloud",
      "Terraform",
      "Docker",
      "Datadog",
      "AI",
    ],
  },
  {
    position: "Full-stack Developer (part time, contract)",
    organization: "Perci Health (UK, remote)",
    duration: { start: "Jul 2021", end: "Feb 2024" },
    description:
      "Served as the primary engineer for the Employee Benefits Program (EBP), a core subsystem enabling Perci's partnerships with employer benefit providers and supporting thousands of oncology-related support journeys.\n" +
      "Designed and delivered the full EBP architecture across a React frontend, Firestore data model, and Firebase/Node.js backend, collaborating with the CTO on system direction and key design decisions.\n" +
      "Automated critical clinical and administrative workflows by processing incoming forms, handling webhook-driven data ingestion, and generating internal views that surfaced key information and highlighted items requiring clinical attention.\n" +
      "Implemented secure, event-driven communication workflows using Postmark, Paubox, and Slack, automating multi-step notifications for patients, clinicians, and partner organizations.\n" +
      "Introduced a monorepo architecture (Turborepo) and built CI/CD pipelines with GitHub Actions, consolidating multiple UI apps and backend services into a single, maintainable codebase.\n" +
      "Improved product quality and reliability by implementing end-to-end test suites with Cypress and later Playwright, enabling stable releases and reducing regression risk.\n" +
      "Integrated and delivered multiple third-party service integrations, including AWS Cognito for authentication, Typeform, Slack automation, and secure email providers.\n" +
      "Delivered features and internal tools that reduced repetitive manual work for oncology nurses, improved turnaround time for case reviews, and increased operational efficiency across the clinical team.",
    tags: [
      "TypeScript",
      "React.JS",
      "Firebase",
      "Firestore",
      "Node.JS",
      "Express.JS",
      "WebSockets",
      "REST API",
      "AWS",
      "AWS Cognito",
      "AWS AI",
      "Google Cloud",
      "Google Cloud AI",
      "Cypress",
      "Playwright",
      "Postmark",
      "Paubox",
      "Slack",
      "Typeform",
      "Turborepo",
      "Stripe identity",
    ],
  },
  {
    position: "Senior Full-Stack Engineer (full time, contract)",
    organization: "Nodia (Germany, remote)",
    duration: { start: "Oct 2023", end: "Jan 2024" },
    description:
      "Worked as the sole engineer building a greenfield Web3/NFT application for a German art exhibition startup, collaborating with the designer-founder and visioner-founder to turn physical artwork into minted NFTs.\n" +
      "Developed the full stack using Next.js (App Router), TypeScript, Tailwind, and Firebase.\n" +
      "Built Solidity smart contracts and Hardhat pipelines for NFT minting, implemented wallet authentication (Web3Auth, WalletConnect), and integrated IPFS for asset storage.\n" +
      "Delivered a complete, production-ready application under an intensive timeline covering both frontend and backend complexity.",
    tags: [
      "Web3",
      "NFT",
      "Solidity",
      "Ethereum",
      "Next.js",
      "React.js",
      "Tailwind",
      "TypeScript",
      "REST API",
      "Firebase",
      "Github",
      "Stripe",
      "Web3Auth",
      "WalletConnect",
      "IPFS",
      "CI",
    ],
  },
  {
    position: "Chief Technology Officer (CTO) (full time, part time)",
    organization: "Socionom (Russia, remote)",
    duration: { start: "Jan 2021", end: "Dec 2023" },
    description:
      "Joined a founder, former manager, as CTO to build a greenfield EdTech platform from scratch, defining the system architecture, infrastructure, and technical roadmap.\n" +
      "Designed and implemented cloud infrastructure in Yandex Cloud using Terraform, with automated Dev, UAT, and Production environments, including on-demand personal Dev environments for engineers and QA.\n" +
      "Built a microservices ecosystem (Node.js, Express, WebSockets) for core features such as authentication, video processing and playback, and payments.\n" +
      "Established CI/CD pipelines in GitHub Actions (with Git submodules) and automated deployments via Docker Swarm across all stages.\n" +
      "Helped build the engineering team (3 FE, 3 BE) by sourcing candidates, conducting technical interviews, recommending hires, assigning tasks, reviewing PRs, and ensuring consistent architecture and code quality.\n" +
      "Created comprehensive technical documentation, architectural diagrams, and long-term growth plans to support product scaling and onboarding.\n" +
      "Collaborated closely with the founder and product stakeholders, translating business needs into technical strategy and delivering key features under tight startup timelines.\n" +
      "Reduced infrastructure and third-party service costs by 5x (~30,000 USD/year) through cloud optimization and architecture improvements.",
    tags: [
      "Vue.js",
      "JavaScript",
      "Node.JS",
      "Express.JS",
      "REST API",
      "WebSockets",
      "AWS",
      "Yandex Cloud",
      "Terraform",
      "Docker Swarm",
      "Github",
      "CI",
      "Postgres",
      "Sequelize",
      "Mongo DB",
      "Redis",
    ],
  },
  {
    position: "Software Engineering Tech Lead (full time, contract)",
    organization: "Kana (UK, remote)",
    duration: { start: "Jan 2022", end: "Sep 2022" },
    description:
      "Led the architectural design of a greenfield Pricing SaaS platform while working closely with the CEO and engineering team to build a Next.js UI, multiple backend services, and ClickHouse/PostgreSQL analytics pipelines.\n" +
      "Served as the senior engineer on the team, guiding architecture, reviewing PRs, supporting 3 full-stack engineers, and helping to mentor a fresh graduate.\n" +
      "Introduced a TypeScript monorepo (Turborepo), designed the structure, and built CI/CD pipelines in GitHub Actions, significantly improving developer velocity and simplifying cross-service development.\n" +
      "Implemented deep Stripe Billing integration (subscriptions, pricing models, webhooks), enabling A/B testing and flexible billing scenarios for customers.\n" +
      "Created public NPM packages (client and server) used across the product to unify GraphQL access patterns and reduce duplication.\n" +
      "Delivered a high-throughput Go service sustaining 1M requests per hour using 2 GB RAM, eliminating Node.js/GraphQL performance bottlenecks and reducing cloud resource consumption.\n" +
      "Selected and integrated ClickHouse for analytics workloads, and contributed to the integration of Redis and DynamoDB for supporting services.\n" +
      "Collaborated daily with the CEO and product leadership, shaping technical decisions and delivering at a pace that consistently exceeded expectations.",
    tags: [
      "GPT",
      "Open AI",
      "Prompt engineering",
      "TypeScript",
      "React.JS",
      "Next.JS",
      "Chakra UI",
      "Nest JS",
      "Node.JS",
      "GraphQL",
      "REST API",
      "WebSockets",
      "Prisma ORM",
      "PostgreSQL",
      "AWS Dynamo DB",
      "AWS",
      "Redis",
      "Go lang",
      "Stytch",
      "Stripe",
      "Sentry",
      "Segment",
      "Turborepo",
    ],
  },
  {
    position: "Product Chief Architect (full time, contract)",
    organization: "Aurea via Crossover (US, remote)",
    duration: { start: "Nov 2017", end: "Apr 2020" },
    description:
      "Provided technical due diligence for three mid- and large-scale products with millions of lines of code prior to acquisition, assessing architecture, risks, code quality, and integration readiness. \n" +
      "Migrated two products to AWS infrastructure and improved performance and reliability by moving critical on-premise services to the cloud. \n" +
      "Promoted from .NET Chief Architect to Product Chief Architect, owning the architecture of a large supply-chain product and guiding its technical direction.\n" +
      "Documented the existing product architecture and defined its long-term evolution, prioritizing modernization and improvements based on business needs.\n" +
      "Exercised technical leadership via deep PR reviews and architectural guidance, selecting and orchestrating 12 cross-functional engineers (DevOps, QA, BE, FE, Security) from other teams while ensuring consistent architecture and engineering quality.\n" +
      "Managed cloud and DevOps operations across AWS and Azure, maintaining CI/CD pipelines and deployment environments.\n" +
      "Modernized key components by upgrading .NET versions, frontend JavaScript dependencies, and MS SQL Server versions to improve reliability and maintainability.\n" +
      "Cut infrastructure spend by several thousand USD/month by auditing the cloud environment and decommissioning dozens of unused VMs left from migration efforts.",
    //  +
    // "Tech: C#, .NET, .NET Core, ASP.NET, Entity Framework, MS SQL Server, xUnit, NUnit, AWS, Azure, Azure CI/CD, Jenkins, Docker, Ansible, GitHub" ,
    tags: [
      "C#.NET",
      ".NET Core",
      "WiX installer",
      "WPF",
      "XAML",
      "ASP.NET",
      "Entity Framework",
      "Linq",
      "ADO.NET",
      "nUnit",
      "Angular",
      "React.JS",
      "TypeScript",
      "JavaScript",
      "JQuery",
      "Selenium",
      "Mocha",
      "Node.JS",
      "REST API",
      "AWS",
      "Azure",
      "Jenkins",
      "Docker",
      "Ansible",
      "Github",
      "MS SQL",
    ],
  },
  {
    position: "Full-stack Developer (part time, contract)",
    organization: "Sensing Cloud SpA (Chile, remote)",
    duration: { start: "Jan 2016", end: "Oct 2017" },
    description:
      "Delivered several full-stack projects as an independent engineer for Chilean startups and a wildfire-prevention non-profit, working directly with founders and owning architecture, development, and deployment end-to-end.\n" +
      "Built applications across diverse domains, including a .NET-based remote-control interface for a mine-inspection robot and a web platform for a laundry pickup/delivery service with backend services and database integration.\n" +
      "Designed and deployed solutions using AWS Lambda, Serverless, Node.js, React, PHP/Shopify, MySQL, and DynamoDB, handling everything from system design and data models to hosting and production rollout.",
    tags: [
      "C#.NET",
      "WPF",
      "XAML",
      "MVVM",
      "React.JS",
      "Node.JS",
      "JavaScript",
      "TypeScript",
      "JQuery",
      "CSS",
      "AWS",
      "AWS Lambda",
      "AWS Dynamo DB",
      "Serverless",
      "PHP",
      "Shopify",
      "MySQL",
    ],
  },
  {
    position: "Sustained Engineering Developer (full time)",
    organization: "Readify (Australia, on-site)",
    duration: { start: "Jun 2015", end: "Dec 2015" },
    description:
      "Maintained and enhanced a portfolio of production applications for multiple Australian enterprise clients as part of Readify's engineering team, working across healthcare, logistics, mining, and insurance domains.\n" +
      "Delivered features and fixes across a wide range of technologies, including C#/ASP.NET, Xamarin Native (C#, XAML), Silverlight/WCF, MS SQL Server, and modern JavaScript frameworks (React, Angular, TypeScript) hosted on AWS and Azure.\n" +
      "Supported and improved more than eight applications, ranging from mobile tools for truck drivers to public-facing corporate sites and internal systems for large insurance organizations.",
    tags: [
      "C#.NET",
      "WPF",
      "Silverlight",
      "XAML",
      "MVVM",
      "ASP.NET",
      "Linq",
      "Entity Framework",
      "WCF",
      "Umbraco",
      "Xamarin",
      "Sharepoint",
      "React.JS",
      "Angular",
      "JavaScript",
      "TypeScript",
      "JQuery",
      "Node.JS",
      "CSS",
      "Mocha",
      "Jasmin",
      "nUnit",
      "Azure",
      "MS SQL",
      "Mongo DB",
      "DDD",
    ],
  },
  {
    position: "Principal Software Developer | Senior Software Developer (full time)",
    organization: "T-Systems CIS (Russia, Germany, on-site)",
    duration: { start: "Oct 2012", end: "May 2015" },
    description:
      "Promoted from Senior Developer to Principal Software Developer while contributing to a new enterprise desktop application for a major German automotive client, working across both frontend (WPF/XAML) and backend services (C#, WCF, MS SQL Server).\n" +
      "Developed core application modules using MVVM, PRISM, and modular architecture patterns within a large engineering program of more than 80 specialists (developers, QA, architects, analysts, designers) collaborating across several shared rooms.\n" +
      "Worked onsite in Munich for several months alongside core developers, team leads, and architects, refining requirements, participating in design discussions, and aligning technical solutions directly with German stakeholders.\n" +
      "Implemented business logic, data-access layers, and UI components, ensuring maintainability and consistency inside a highly structured enterprise environment.",
    tags: [
      "C#.NET",
      "WPF",
      "XAML",
      "WCF",
      "MVVM",
      "Microsoft PRISM",
      "Devexpress",
      "Linq",
      "Entity Framework",
      "nUnit",
      "MS SQL",
      "DDD",
    ],
  },
  {
    position: "Technical Founder (part time)",
    organization: "High Robotics (UK, remote)",
    duration: { start: "Jul 2013", end: "Dec 2014" },
    description:
      "Founded and operated a UK-based micro-studio delivering several software products end-to-end for early-stage international clients while running engineering, product, and delivery functions.\n" +
      "Secured and delivered approximately five client projects across Chile and Germany, owning scoping, UX direction, architecture, implementation, and deployment while coordinating work with a contract designer.\n" +
      "Led product and UX strategy and built functional applications, including a real-time WPF interface for a mine-inspection robot streaming video and sensor data improving usability and operational safety.\n" +
      "Delivered all engineering execution (C#, WPF, PHP, JavaScript, AWS) and published open-source UI libraries, improving development speed and establishing credibility for a newly created studio.\n" +
      "Demonstrated entrepreneurial leadership by handling sales, product strategy, and engineering independently, applying end-to-end ownership well before joining large-scale engineering organizations.",
    tags: [
      "C#.NET",
      "WPF",
      "XAML",
      "MVVM",
      "React.JS",
      "Node.JS",
      "JavaScript",
      "TypeScript",
      "JQuery",
      "CSS",
      "AWS",
      "AWS Lambda",
      "AWS Dynamo DB",
      "Serverless",
      "PHP",
      "Shopify",
      "MySQL",
    ],
  },
  {
    position: ".NET Developer (full time)",
    organization: "Intourist - Thomas Cook (Russia, on-site)",
    duration: { start: "Nov 2010", end: "Oct 2012" },
    description:
      "Developed and maintained core operational systems for one of Russia's largest travel companies, supporting ~20 internal agents across multiple international destinations.\n" +
      "Built a new desktop application for bus-tour scheduling used across Turkey, Egypt, and partner markets worldwide, replacing manual Excel workflows and reducing daily coordination effort by 1-2 hours.\n" +
      "Extended and supported a large insurance and tour-management ASP.NET system (100k+ LoC, 100+ screens, 50+ SQL procedures), delivering features and stabilizing critical workflows for the insurance and transfer departments.\n" +
      "Implemented complex SQL logic, large stored procedures, and parsing pipelines for importing Amadeus flight data, automating previously manual data-entry processes.\n" +
      "Handled production fixes and hotfixes, collaborating directly with transfer and insurance teams to resolve operational issues and keep business-critical tools running smoothly.",
    tags: [
      "C#.NET",
      "WPF",
      "XAML",
      "WinForms",
      "WCF",
      "Linq",
      "ADO.NET",
      "MS SQL",
      "Reporting Services",
      "COM",
    ],
  },
  {
    position: "Software Engineer (full time)",
    organization:
      "Saint Petersburg State Institute of Psychology and Social Work (Russia, on-site)",
    duration: { start: "Mar 2010", end: "Oct 2010" },
    description:
      "Developed and supported internal IT systems for the Psychology Institute, primarily building workflows and document-processing features on Microsoft SharePoint (MOSS 2007) for 20 staff members.\n" +
      "Collaborated directly with the dean and head of IT to implement digital workflows, automate administrative processes, and improve internal operations.\n" +
      "Maintained and extended supporting systems (C#, ASP.NET, MS SQL) and assisted with network expansion for a newly opened building.",
    tags: [
      "C#.NET",
      "WinForms",
      "ASP.NET",
      "ADO.NET",
      "PHP",
      "Sharepoint",
      "MS SQL",
    ],
  },
  {
    position: "Teacher of the IT course (contract, part time)",
    organization: "Saint Petersburg State University (Russia, on-site)",
    duration: { start: "Sep 2009", end: "Jul 2010" },
    description:
      "Taught an introductory IT course at Saint Petersburg State University as part of postgraduate work in Applied Mathematics and Control Processes faculty.\n" +
      "Delivered practical classes for Psychology and Social Sciences students, covering computer fundamentals, HTML/CSS, XML data visualization, and basic SQL/T-SQL.\n" +
      "Developed course materials and guided students through hands-on assignments, improving their digital literacy and foundational technical skills.",
    tags: ["HTML", "CSS", "Databases"],
  },
  {
    position: "Information technology specialist (full time)",
    organization: "Nevskie Shkafy (Russia, on-site)",
    duration: { start: "Sep 2009", end: "Jul 2010" },
    description:
      "Worked as a full-stack developer and IT specialist for a large wardrobe manufacturing company, delivering both software and internal IT support.\n" +
      "Developed and maintained the company's e-commerce website using PHP and MySQL, and rebuilt the visual wardrobe-configuration tool by migrating it from Flash to Silverlight (C#).\n" +
      "Provided IT administration across the organization, including workstation setup, hardware/software maintenance, Windows server configuration, and expansion of office Ethernet networks.\n" +
      "Supported internal staff and customers with technical issues, ensuring stable daily operations across offices and the online store.",
    tags: [
      "C#.NET",
      "Silverlight",
      "PHP",
      "Web services",
      "JavaScript",
      "CSS",
      "MySQL",
      "MS SQL",
      "Help desk",
      "Administration",
    ],
  },
  {
    position: "Junior Software Engineer (part time)",
    organization: "SEO-promotion group (Russia, on-site)",
    duration: { start: "Jun 2007", end: "Mar 2008" },
    description:
      "Worked part-time as a junior software engineer in an SEO and web-development group, building and updating client-facing websites using PHP, ASP Classic, JavaScript, and HTML/CSS.\n" +
      "Implemented technical SEO improvements and site-level optimizations that increased search visibility for multiple clients.\n" +
      "Gained early full-stack experience across legacy and modern stacks while supporting small clients with rapid feature updates and fixes.",
    tags: [
      "PHP",
      "C#.NET",
      "ASP Classic",
      "Macromedia Flash CS3",
      "CSS",
      "JavaScript",
    ],
  },
];
