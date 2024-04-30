import {ReactNode} from "react";

export default function PageContentBox({children}: {children: ReactNode}) {
 return (
   <div className='px-4 sm:px-7 overflow-scroll my-2 sm:my-10'>
     {children}
   </div>
 );}
