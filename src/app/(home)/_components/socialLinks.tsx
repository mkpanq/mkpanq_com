import { Socials } from "@/app/(home)/_lib/data/socials";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="flex gap-8 text-3xl text-slate-200/70 max-sm:justify-center">
      {Socials.map((social, index) => {
        return (
          <Link key={index} href={social.url}>
            <i className={social.iconClasses} />
          </Link>
        );
      })}
    </div>
  );
}
