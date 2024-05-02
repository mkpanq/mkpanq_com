import type { Metadata } from "next";
import PageTitle from "@/components/shared/pageTitle";
import PageContentBox from "@/components/shared/pageContentBox";
import ProfilePicture from "../../../public/profile_picture.jpeg";
import Image from "next/image";

const PAGE_NAME = "About me 💁‍♂️";
const LAST_UPDATE_DATE = "30-04-2024";

export const metadata: Metadata = {
  title: `${PAGE_NAME} - ${process.env.PAGE_URL}`,
};

export default function AboutPage() {
  const subtitle = `Last update: ${LAST_UPDATE_DATE}`;

  return (
    <PageContentBox>
      <PageTitle title={PAGE_NAME} subtitle={subtitle} />
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        <div className="md:basis-1/3">
          <Image
            src={ProfilePicture}
            alt="mkpanq.com - Hi, it's me !"
            priority
            className="max-sm:max-h-[150px] max-md:max-h-[300px] w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="md:basis-2/3 text-slate-200 text-justify sm:leading-loose leading-loose text-sm sm:text-lg overflow-scroll my-5">
          <p>
            Hi, I&apos;m Marek, a product developer from Warsaw, Poland,
            passionate about creating sophisticated digital products. Over the
            years, I have developed extensive experience in taking digital
            products from conceptualization to initial release, contributing at
            every stage of the development cycle. I&apos;ve had the opportunity
            to work in both software houses and product companies, which has
            allowed me to hone my skills in various areas of product
            development, including UX/UI design, human-machine communication,
            and end-to-end product delivery.
          </p>
          <p>
            I love motorsports, particularly Formula 1, Playstation gaming and
            basketball. I&apos;m also trying to get into the world of
            photography and video creation.
          </p>
        </div>
      </div>
    </PageContentBox>
  );
}
