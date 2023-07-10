import { ExperiencePage } from "../components/custom/experience";
import {
  languages,
  roles,
  technologies,
  education,
  certificates,
  experience,
} from "../data";

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
    },
  };
}

export default ExperiencePage;
