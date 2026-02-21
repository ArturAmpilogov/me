import { About, Links } from "./resume";

import { aboutme, links } from "@/data";

export default function HomePage() {
  return (
    <main>
      <About name="Artur Ampilogov" photoUrl="/img/photo_2023.jpg">
        {aboutme}
      </About>
      <Links items={links} />
      <section aria-label="CV download">
        <h2>CV</h2>
        <a href="/CV-Artur-Ampilogov.pdf" target="_blank" rel="noreferrer">
          CV-Artur-Ampilogov.pdf
        </a>
      </section>
    </main>
  );
}
