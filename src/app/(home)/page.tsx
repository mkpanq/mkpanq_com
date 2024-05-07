import { ProfileImage } from "@/app/(home)/components/profileImage";
import { WelcomeMessage } from "@/app/(home)/components/welcomeMessage";
import { SocialLinks } from "@/app/(home)/components/socialLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | mkpanq.com | Marek Pankowski",
  description: "Home | mkpanq.com - Marek Pankowski's personal page",
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
    url: "https://mkpanq.com",
    type: "website",
    title: "Home | mkpanq.com | Marek Pankowski",
    description: "Home | mkpanq.com - Marek Pankowski's personal page",
    images: [
      {
        url: "https://dynamic-og-image-generator.vercel.app/api/generate?title=Home&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl",
        width: 1200,
        height: 630,
        alt: "mkpanq.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | mkpanq.com | Marek Pankowski",
    description: "Home | mkpanq.com - Marek Pankowski's personal page",
    creator: "@mkpanq",
    site: "@mkpanq",
    images: [
      {
        url: "https://dynamic-og-image-generator.vercel.app/api/generate?title=Home&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl",
        width: 1200,
        height: 630,
        alt: "mkpanq.com",
      },
    ],
  },
  alternates: {
    canonical: "https://mkpanq.com",
  },
};

export default function HomePage() {
  return (
    <div
      className="
      relative
      w-full
      grid grid-cols-[40%_60%] grid-rows-[40%_60%] gap-x-2
      items-center
      justify-center
      my-auto
      px-5
      "
    >
      <div
        className="
        max-sm:absolute
        max-sm:right-0
        max-sm:top-0

        sm:row-start-1
        sm:row-span-2
        sm:col-span-1
        sm:col-start-1

        self-end
        -z-10"
      >
        <ProfileImage />
      </div>

      <div
        className="
        col-start-1
        col-span-2

        sm:col-start-2
        sm:col-span-1

        row-span-1
        sm:row-start-1
        sm:row-span-1

        px-2 sm:px-4
        "
      >
        <WelcomeMessage />
      </div>

      <div
        className="
        space-y-8
        row-start-2
        row-span-1
        col-start-1
        col-span-2

        sm:col-start-2
        sm:col-span-1
        sm:row-start-2
        sm:row-span-1
        px-2 sm:px-4"
      >
        <p
          className="
                text-justify
                font-light text-slate-200
                text-sm leading-loose

                md:text-base
                md:leading-loose

                lg:text-xl
                lg:leading-10"
        >
          I&apos;m{" "}
          <span className="font-bold text-california-900/90">
            Marek Pankowski
          </span>
          , a product developer from Poland, with a strong focus on interface
          design & user experience. I&apos;m passionate about creating modern,
          full-stack, user-faced digital products.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}
