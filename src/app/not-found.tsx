import NotFoundGif from '../../public/not-found.gif'
import Image from "next/image";

export default function NotFound() {
 return <div className='flex flex-col sm:flex-row items-center justify-around my-auto'>
  <div className='text-slate-200 space-y-8 px-5 text-center sm:text-left'>
   <h1 className='text-4xl sm:text-6xl'>Page not found</h1>
   <p className='text-xl'>Yup, I&apos;m surprised too</p>
  </div>

  <Image src={NotFoundGif} alt="NotFoundGif" className='sm:max-w-xl max-w-[250px] max-sm:my-4'/>
 </div>
}
