import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/shared";
import { About, Links, Link } from "../components/custom";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

import { aboutme, links } from "../data";

interface ResumePageProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  aboutme: string;
  links: Link[];
}

const ResumePage: NextPage<ResumePageProps> = ({ aboutme, ...props }) => {
  return (
    <Layout {...props}>
      <Head>
        <title>Artur Ampilogov</title>
        <meta name="description" content="Resume Artur Ampilogov" />
      </Head>
      <main>
        <About name="Artur Ampilogov" photoUrl="/img/photo_2023.jpg">
          {aboutme}
        </About>
        <Links items={links} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  // In the future an external API endpoint can be called to fetch data
  return {
    props: {
      aboutme,
      links,
    },
  };
}

export default ResumePage;
