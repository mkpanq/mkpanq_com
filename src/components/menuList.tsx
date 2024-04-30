'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

const MenuListItems: {name: string, url: string}[] = [
  {name: 'Home', url: '/'},
  {name: 'Now', url: '/now'},
  {name: 'Blog', url: '/blog'},
  {name: 'About me', url: '/about'},
]

export default function MenuList({setIsOpen}: {setIsOpen?: (isOpen: boolean) => void}) {
  const pathname = usePathname();
  const handleClick = () => {
    if (setIsOpen) setIsOpen(false)
  }

  return (
    MenuListItems
      .filter(item => item.url !== pathname)
      .map((item, index) => {
        return (
          <Link key={index} href={item.url} onClick={handleClick}>
              <span className='text-slate-200 font-thin hover:text-california-900'>
                {item.name}
              </span>
          </Link>
        )
      }
    )
  )
}
