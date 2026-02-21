import type { Metadata } from "next";

import { publications } from "@/data";
import { Publications } from "./Publications";

const sortedPublications = [...publications].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Articles, expert commentaries, and video appearances on software engineering, microservices, and developer culture.",
};

export default function PublicationsPage() {
  return (
    <main>
      <Publications items={sortedPublications} />
    </main>
  );
}
