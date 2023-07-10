import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/shared";

import { Publications, PublicationsProps } from "../components/custom";
import { publications } from "../data";

const PublicationsPage: NextPage<PublicationsProps> = ({ items, ...props }) => {
  return (
    <Layout {...props}>
      <Head>
        <title>{"Artur Ampilogov's Publications"}</title>
        <meta name="description" content="Artur Ampilogov's Publications" />
      </Head>
      <main>
        <Publications items={publications} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  let sortedPublications = publications.sort((a, b) =>
    a.date < b.date ? 1 : -1
  ); // descending

  // In the future an external API endpoint can be called to fetch data
  return {
    props: {
      items: sortedPublications,
    },
  };
}

export default PublicationsPage;
