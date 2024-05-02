import Link from "next/link";
import MenuList from "@/components/menuList";

export default function Header() {
  const PAGE_URL = process.env.PAGE_URL;

  return (
    <header className="w-full flex justify-between items-center text-xl p-2">
      <Link href="/">
        <span className="text-slate-200 font-medium">{PAGE_URL}</span>
      </Link>

      <div className="max-sm:hidden flex gap-10">
        <MenuList />
      </div>
    </header>
  );
}
