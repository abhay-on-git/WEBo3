import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function Navbar() {
  return (
    <div className='w-full h-[7vw] flex items-center justify-between'>
         <div className='logo'>
             <h1 className='text-[1.7vw] font-medium bg-gradient-to-r from-[#F242AC] to-[#F9A01E] text-transparent bg-clip-text'>WEo3</h1>
         </div>
             <div className='flex items-center justify-between gap-10'>
              {["products","solutions","customers","pricing","resources"].map((item,index)=>{
                return <a href="" className='uppercase text-[1vw] text-[#616161]' key={index}>{item}</a>
              })}
             </div>
             <div className='flex justify-between items-center font-medium gap-1 text-[#F8F8F8]'>
               <h3>Register Now</h3><span className='text-[1.4vw]'><GoArrowUpRight /></span>
             </div>
    </div>
  )
}

export default Navbar