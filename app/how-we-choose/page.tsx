import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "How We Choose Tools",
  description:
    "How TradeGear HQ researches tools, verifies specifications and makes recommendations without claiming hands-on testing.",
  alternates: { canonical: "/how-we-choose/" },
};
export default function Methodology() {
  return (
    <section className="section">
      <div className="shell methodology">
        <span className="eyebrow orange">EDITORIAL METHOD</span>
        <h1>How we choose tools</h1>
        <p>
          TradeGear HQ helps US tradespeople choose tools for the work they do.
          Our current guides and reviews are based on research into manufacturer
          specifications, manuals and documented features. We have not hands-on
          tested the products in these guides.
        </p>
        <h2>Start with the job</h2>
        <p>
          We consider access, measurement requirements, documentation,
          portability and compatibility with an existing kit. A tool can be a
          good choice for one workflow and a poor fit for another. Our “best
          for” labels describe that fit; they are not laboratory rankings.
        </p>
        <h2>Verify the exact product</h2>
        <p>
          We link to primary manufacturer sources, distinguish product families
          from exact models, and identify kit or hardware variations where they
          affect the decision. Published performance, protection ratings and
          battery life remain manufacturer claims unless we explicitly provide
          independent testing evidence.
        </p>
        <h2>Explain the tradeoffs</h2>
        <p>
          Every review describes who should consider the tool, who should skip
          it and meaningful drawbacks. We separate specification comparisons
          from our judgment about their practical value. We do not invent user
          experiences, star ratings, professional endorsements or testing
          results.
        </p>
        <h2>What we have not verified</h2>
        <p>
          We have not independently measured accuracy, durability, real-world
          battery life, app reliability or long-term performance. Compatibility,
          warranty coverage and included accessories can change; check the exact
          listing and current manufacturer documentation before purchase.
        </p>
        <h2>How affiliate links work</h2>
        <p>
          Amazon links may open a search result rather than an exact product. Confirm
          the model, kit and seller before ordering. We do not publish fixed
          Amazon prices or customer-review scores.
        </p>
        <h2>Updates and future testing</h2>
        <p>
          Review dates identify when the editorial material was checked. When we
          obtain tools for hands-on testing, the page will identify the tested
          unit, methods and evidence. Until then, our recommendations remain
          research-based.
        </p>
        <p>
          <Link href="/#trades">Explore the trade guides →</Link>
        </p>
      </div>
    </section>
  );
}
