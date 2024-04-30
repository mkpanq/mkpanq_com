import Image from "next/image";
import ProfilePicture from "../../../../public/profile_memoji.png";

export function ProfileImage() {
  return <Image
    src={ProfilePicture}
    alt='mkpanq.com - My memoji :) '
    priority
    className='
    object-scale-down
    max-h-[420px]

    max-sm:opacity-35
    max-sm:max-w-[200px]'
  />
}
