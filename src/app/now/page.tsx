import PageTitle from "@/components/shared/pageTitle";
import Link from "next/link";
import PageContentBox from "@/components/shared/pageContentBox";
import { Metadata } from "next";

const PAGE_NAME = "Now ⏳";
const LAST_UPDATE_DATE = "30-04-2024";

export const metadata: Metadata = {
  title: "Now | mkpanq.com | Marek Pankowski",
  description: "Now | mkpanq.com - Marek Pankowski's personal page",
  keywords: [
    "marek",
    "pankowski",
    "marek pankowski",
    "mkpanq",
    "mkpanq.com",
    "panq",
    "panq digital",
    "digital",
  ],
  openGraph: {
    url: "https://mkpanq.com/now",
    type: "website",
    title: "Now | mkpanq.com | Marek Pankowski",
    description: "Now | mkpanq.com - Marek Pankowski's personal page",
    images: [
      {
        url: "https://dynamic-og-image-generator.vercel.app/api/generate?title=Now&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl",
        width: 1200,
        height: 630,
        alt: "mkpanq.com/now",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Now | mkpanq.com | Marek Pankowski",
    description: "Now | mkpanq.com - Marek Pankowski's personal page",
    creator: "@mkpanq",
    site: "@mkpanq",
    images: [
      {
        url: "https://dynamic-og-image-generator.vercel.app/api/generate?title=Now&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl",
        width: 1200,
        height: 630,
        alt: "mkpanq.com/Now",
      },
    ],
  },
  alternates: {
    canonical: "https://mkpanq.com/now",
  },
};

export default function NowPage() {
  const subtitle = `Last update: ${LAST_UPDATE_DATE}`;

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
          my health. I&apos;m enhancing my skill set by diving more into
          frontend technologies while leveraging my background in backend
          development. Over the coming weeks, I plan to unveil some of the
          projects I&apos;m actively engaged in. Additionally, in keeping with
          the{" "}
          <Link
            href="https://www.swyx.io/learn-in-public"
            className="text-california-900 italic"
          >
            learning in public
          </Link>{" "}
          philosophy, I&apos;ll be regularly posting blog posts, or video
          updates about my progress on these projects.
        </p>
      </div>
    </PageContentBox>
  );
}
