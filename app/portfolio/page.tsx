import { Metadata } from "next";
import { portfolio } from "@/data";
import { PortfolioList } from "./PortfolioList";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Open-source projects, startup collaborations, and publicly available work samples from full-stack and architecture roles.",
};

export default function PortfolioPage() {
  return (
    <main>
      <h1>Portfolio</h1>
      <p>
        Some work is under NDA, and some work was with pure backend programming, development
        operations, software architecture, or team management, which cannot be shown in the
        portfolio. Below you can find some of the open-source examples, as well as publicly
        available information about projects created with team collaboration.
      </p>
      <PortfolioList items={portfolio} />
    </main>
  );
}
