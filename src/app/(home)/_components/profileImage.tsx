import Image from "next/image";

export function ProfileImage() {
  return (
    <Image
      src="/profile_memoji.png"
      width={420}
      height={420}
      alt="mkpanq.com - My memoji :) "
      priority
      className="
    object-scale-down
    max-h-[420px]

    max-sm:opacity-35
    max-sm:max-w-[200px]"
    />
  );
}
