import type {Metadata} from "next";
import {ProfileImage} from "@/app/(home)/components/profileImage";
import {WelcomeMessage} from "@/app/(home)/components/welcomeMessage";
import {Description} from "@/app/(home)/components/description";
import {SocialLinks} from "@/app/(home)/components/socialLinks";

export const metadata: Metadata = {
  title: `Home - ${process.env.PAGE_URL}`
}

export default function HomePage() {
  return (
    <div
      className='
      relative
      w-full
      grid grid-cols-[40%_60%] grid-rows-[40%_60%] gap-x-2
      items-center
      justify-center
      my-auto
      px-5
      '
    >
      <div
        className='
        max-sm:absolute
        max-sm:right-0
        max-sm:top-0

        sm:row-start-1
        sm:row-span-2
        sm:col-span-1
        sm:col-start-1

        self-end
        -z-10'
      >
        <ProfileImage/>
      </div>

      <div
        className='
        col-start-1
        col-span-2

        sm:col-start-2
        sm:col-span-1

        row-span-1
        sm:row-start-1
        sm:row-span-1

        px-2 sm:px-4
        '
      >
        <WelcomeMessage/>
      </div>

      <div
        className='
        space-y-8
        row-start-2
        row-span-1
        col-start-1
        col-span-2

        sm:col-start-2
        sm:col-span-1
        sm:row-start-2
        sm:row-span-1
        px-2 sm:px-4'
      >
        <Description/>
        <SocialLinks/>
      </div>
    </div>
  );
}
