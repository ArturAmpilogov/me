import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/shared";
import { 
  ExperienceList,
  About,
  Links,
  ResumeSidebar,
  SkillsProps,
  EducationProps,
  ExperienceProps,
  Link
} from "../components/custom";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

import { 
  languages, 
  roles, 
  technologies,
  education,
  certificates,
  experience,
  aboutme,
  links
} from "../data";

interface ResumePageProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  languages: SkillsProps,
  technologies: SkillsProps,
  roles: string[],
  education: EducationProps, 
  certificates: EducationProps,
  experience: ExperienceProps[],
  aboutme: string,
  links: Link[]
}

const ResumePage: NextPage<ResumePageProps> = ({
    languages,
    roles, 
    technologies,
    education,
    certificates,
    experience,
    aboutme,
    links,
    ...props
  }) => {

  return (
    <Layout {...props}>
      <Head>
        <title>Artur Ampilogov</title>
        <meta name="description" content="Resume Artur Ampilogov" />
      </Head>
      <main>      
        <About name="Artur Ampilogov" photoUrl="/img/photo.jpg">{aboutme}</About>
        <Links items={links}/>
        <ExperienceList items={experience} />
      </main>  
      <ResumeSidebar 
        roles={roles}
        languages={languages} 
        technologies={technologies} 
        education={education}
        certificates={certificates}
      /> 
    </Layout>
  );
};

export async function getStaticProps() {
  // In the future an external API endpoint can be called to fetch data
  return {
    props: {
      languages, 
      roles, 
      technologies,
      education,
      certificates,
      experience,
      aboutme,
      links
    },
  }
}

export default ResumePage;