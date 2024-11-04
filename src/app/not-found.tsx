import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
      <p className="text-4xl xl:text-6xl font-thin">404 | Not found</p>
      <Link href="/" className="text-2xl xl:text-4xl font-medium">
        Home
      </Link>
    </div>
  );
}
