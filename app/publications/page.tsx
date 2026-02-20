import type { Metadata } from "next";

import { publications } from "../../data";
import { Publications } from "./Publications";

const sortedPublications = [...publications].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const metadata: Metadata = {
  title: "Artur Ampilogov's Publications",
  description: "Artur Ampilogov's Publications",
};

export default function PublicationsPage() {
  return (
    <main>
      <Publications items={sortedPublications} />
    </main>
  );
}
