import PageTitle from "@/components/shared/pageTitle";
import Link from "next/link";
import PageContentBox from "@/components/shared/pageContentBox";
import { Metadata } from "next";
import staticPageMetadata from "@/lib/staticSeo";
import { parseDate } from "@/lib/utils";

const PAGE_NAME = "Now ⏳";
const LAST_UPDATE_DATE = "2024-05-09";

export const metadata: Metadata = staticPageMetadata("Now");

export default function NowPage() {
  const subtitle = `Last update: ${parseDate(LAST_UPDATE_DATE)}`;

  return (
    <PageContentBox>
      <PageTitle title={PAGE_NAME} subtitle={subtitle} />
      <div className="text-slate-200 text-justify sm:leading-loose leading-loose text-sm sm:text-xl overflow-scroll my-10">
        <Link
          href="https://sive.rs/nowff"
          className="text-california-900 italic"
        >
          What is it ?
        </Link>
        <p>
          I&apos;m currently on sabbatical to take a career break and focus on
          my health. I&apos;m focusing on Typescript Full-Stack application
          development. Additionally, in keeping with the{" "}
          <Link
            href="https://www.swyx.io/learn-in-public"
            className="text-california-900 italic"
          >
            learning in public
          </Link>{" "}
          philosophy, I&apos;ll be regularly posting blog posts, or video
          updates about my progress on my pet projects.
        </p>
      </div>
    </PageContentBox>
  );
}
