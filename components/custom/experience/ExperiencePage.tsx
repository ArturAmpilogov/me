import type { NextPage } from "next";
import Head from "next/head";
import {
  EducationProps,
  ExperienceList,
  ExperienceProps,
  ResumeSidebar,
  SkillsProps,
} from ".";
import { Layout } from "../../shared";
import styles from "./ExperiencePage.module.scss";

export interface ExperiencePageProps {
  languages: SkillsProps;
  technologies: SkillsProps;
  roles: string[];
  education: EducationProps;
  certificates: EducationProps;
  experience: ExperienceProps[];
}

export const ExperiencePage: NextPage<ExperiencePageProps> = ({
  languages,
  roles,
  technologies,
  education,
  certificates,
  experience,
  ...props
}) => {
  return (
    <Layout {...props}>
      <Head>
        <title>{"Artur Ampilogov's Experience"}</title>
        <meta name="description" content="Artur Ampilogov's Experience" />
      </Head>
      <div className={styles.container}>
        <main>
          <h1>Experience</h1>
          <ExperienceList items={experience} />
        </main>
        <ResumeSidebar
          roles={roles}
          languages={languages}
          technologies={technologies}
          education={education}
          certificates={certificates}
        />
      </div>
    </Layout>
  );
};
