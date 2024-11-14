import Link from "next/link";
import socials from "../lib/socials";

export default function Home() {
  return (
    <div
      className="
      justify-self-center
      max-w-5xl
      xl:mx-52
      lg:mx-48
      md:mx-32
      sm:mx-24 sm:h-full
      mx-10
      max-sm:mt-10
      max-sm:pb-10
      flex flex-col justify-center gap-6 text-justify tracking-wider [&>*]:leading-loose"
    >
      <p className="text-3xl xl:text-6xl font-semibold">
        Hi ! I&apos;m Marek !
      </p>
      <p className="text-xl xl:text-2xl font-thin">
        I&apos;m a full-stack product engineer based in Warsaw, Poland,
        passionate about creating digital experiences that make a difference.
        I&apos;m all about building tools people find useful and fun to use. I
        love working with people, putting in the hard work, and keeping things
        fun and light with a dose of humor.
      </p>
      <p className="text-xl xl:text-2xl font-thin">
        Outside of work, I&apos;m a motorsports fanatic (Formula 1 all the way
        !), NBA fan and a PS5 gamer — especially when it involves simracing!
      </p>
      <p className="text-xl xl:text-2xl font-medium mt-5">
        Let&apos;s work with me !
      </p>
      <ul className="flex max-sm:flex-col gap-6 text-xl xl:text-2xl mb-48">
        {socials.map((social) => (
          <li key={social.name}>
            <Link href={social.url} target="_blank">
              {social.name}
            </Link>
          </li>
        ))}
      </ul>
      <footer className="text-xs xl:text-sm font-thin text-center">
        <p>
          © {new Date().getFullYear()} Marek Pankowski. All rights reserved.{" "}
          <br />
          Built with <a href="https://nextjs.org/">Next.js</a> and{" "}
          <a href="https://tailwindcss.com/">Tailwind CSS</a>.
        </p>
      </footer>
    </div>
  );
}
