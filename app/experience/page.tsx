import styles from "./ExperiencePage.module.scss";
import { Metadata } from "next";
import { ExperienceList } from "./ExperienceList";
import { ResumeSidebar } from "./ResumeSidebar";

import {
  languages,
  roles,
  technologies,
  education,
  certificates,
  experience,
} from "../../data";

export const metadata: Metadata = {
  title: "Artur Ampilogov's Experience",
  description: "Artur Ampilogov's Experience",
};

export default function ExperiencePage() {
  return (
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
  );
}
