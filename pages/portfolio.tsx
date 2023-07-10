import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/shared";

import { PortfolioList, PortfolioListProps } from "../components/custom";
import { portfolio } from "../data";

const PortfolioPage: NextPage<PortfolioListProps> = ({ items, ...props }) => {
  return (
    <Layout {...props}>
      <Head>
        <title>{"Artur Ampilogov's Portfolio"}</title>
        <meta name="description" content="Artur Ampilogov's Portfolio" />
      </Head>
      <main>
        <h1>Portfolio</h1>
        <p>
          Some of the work is under NDA, and some work was with pure backend
          programming, development operations, software architecture, or teams
          management, which cannot be shown in the portfolio. <br />
          Below you can find some of the open source examples, as well as publicly
          available information about projects created with teams
          collaboration.
        </p>
        <PortfolioList items={items} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      items: portfolio,
    },
  };
}

export default PortfolioPage;
