import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function footer() {
  return (
    <div className='w-full h-[26vw] bg-gradient-to-tr from-[#b13e3e76] to-[#04040442] backdrop-blur-xl text-white'>
     <div className='f1 w-full h-[22vw] flex items-center justify-betweenpx-12'>
        <div className='p1 flex flex-col gap-5 w-[50%] h-full px-12 '>
            <h1 className='text-[3vw] mt-10 font-medium bg-gradient-to-b from-[#b66a98a4] to-[#fd9904] text-transparent bg-clip-text'>WEo3</h1>
            <p className='text-[1vw] w-[80%] mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio a praesentium reprehenderit corrupti reiciendis earum sapiente perspiciatis repudiandae porro, laboriosam, consequatur natus error excepturi similique fugit veniam ipsa dolor qui.</p>
            <div className='icons flex gap-2 w-full h-[5vw]'>
                <div className='w-[2vw] h-[2vw] p-1 flex items-center justify-center rounded-full bg-[#bb7b7b]'>
                    <IoLogoInstagram />
                </div>
                <div className='w-[2vw] h-[2vw] p-1 flex items-center justify-center rounded-full bg-[#6539c4]'>
                    <FaFacebook />
                </div>
                <div className='w-[2vw] h-[2vw] p-1 flex items-center justify-center rounded-full bg-[#000000]'>
                    <FaXTwitter />
                </div>
                <div className='w-[2vw] h-[2vw] p-1 flex items-center justify-center rounded-full bg-[#ac6c41]'>
                     <FaYoutube />
                </div>
            </div>
        </div>
        <div className='w-[20%] flex items-center flex-col gap-2 pt-20 h-full'>
         {["Useful Links","IOS Apps", "Contact Us","Term & Condition","Privacy"].map((item,index)=>{
            return <h1 key={index} className='text-[#6B6B6B] text-[1.1vw]'>{index === 0 && (<h1 className='font-md text-white text-[1.3vw]'>{item}</h1>)} {item}</h1>
         })}
        </div>
        <div className='w-[30%] flex items-center flex-col gap-2 pt-20 h-full'>
         {["Contact Us","+123 456 789","abcd@gmail.com","21-b, New York"].map((item,index)=>{
            return <h1 key={index} className='text-[#6B6B6B] text-[1.1vw]'>{index === 0 && (<h1 className='font-md text-white text-[1.3vw]'>{item}</h1>)} {item}</h1>
         })}
        </div>
     </div>
     <div className='f2 flex items-center justify-center text-center'>
        <h1 className='text-[1.5vw] mt-3'>Developed by - Abhay Agnihotri</h1>
     </div>
    </div>
  )
}

export default footer