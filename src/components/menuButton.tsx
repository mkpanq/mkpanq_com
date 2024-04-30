'use client'

import {useState} from "react";
import MenuList from "@/components/menuList";
import {cn} from "@/lib/utils";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  // TODO: Try to add animation
  return (
      <div className='sm:hidden'>
        <ActionButton handleClickMethod={handleClick} label='Menu' />

        {
          isOpen &&
          <div className='absolute w-full bg-slate-800 bottom-0 left-0 rounded-t-3xl'>
            <div className='flex flex-col items-center gap-10 py-10'>
              <MenuList setIsOpen={setIsOpen} />
              <ActionButton handleClickMethod={handleClick} label='Close' />
            </div>
          </div>
        }
      </div>
  )
}

function ActionButton({handleClickMethod, label}: { handleClickMethod: () => void, label: string }) {
  return <button
    onClick={handleClickMethod}
    className='flex flex-col mx-auto items-center text-california-100 text-sm'
  >
    <div className={cn('flex', (label === 'Menu' ? 'flex-col': 'flex-col-reverse'))}>
      <i className={cn("fa-solid", (label === 'Menu' ? 'fa-chevron-up': 'fa-chevron-down'))}/>
      <label>{label}</label>
    </div>
  </button>
}
