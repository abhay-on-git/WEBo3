import React from 'react';
import Navbar from './Navbar';
// import '../../public/imgs/skull.png'

function Pg1() {
  return (
    <div className=' relative w-full min-h-screen overflow-hidden'>
        <div className='w-[30vw] h-[30vw] rounded-full radial-gradient1 absolute top-[28%] left-[-15%]'></div>
        <div className='w-[30vw] h-[30vw] rounded-full radial-gradient2 absolute top-[8%] right-[-18%]'></div>
        <div className='w-full h-full absolute backdropFilter'></div>
        <div className='absolute w-full h-full px-12'>
           <Navbar/>
           <div className='w-full flex flex-col items-center justify-center mt-5'>
            <div className='w-full h-full flex items-center justify-center gap-6'>
            <h1 className='text-[7vw] leading-[7vw] font-semibold bg-gradient-to-r from-[#F8F8F8] to-[#616161] text-transparent bg-clip-text'>Web3</h1>
            <h1 className='text-[7vw] leading-[7vw] font-semibold bg-gradient-to-r from-[#616161] to-[#F8F8F8] text-transparent bg-clip-text'>Design</h1>
            </div>
            <div className='w-full h-full flex items-center justify-center'>
            <h1 className='text-[7vw] leading-[7vw] font-semibold bg-gradient-to-r from-[#616161] to-[#F8F8F8] text-transparent bg-clip-text'>Agency.</h1>
            </div>
           </div>
           <div className='flex items center justify-between px-12'>
            <div className="left flex flex-col gap-12 mt-8">
              <div className='flex flex-col items-center justify-center p-5 px-6 rounded-tr-[1.5vw] rounded-br-[1.5vw] text-white bg-gradient-to-l from-[#9c9c9c57] to-transparent border-l-0'>
                <h1 className='text-[2.4vw]'>240+</h1>
                <h3 className='uppercase text-[#9C9C9C]'>PARtners</h3>
              </div>
              <div className='flex flex-col items-center justify-center p-5 px-6 rounded-tl-[1.5vw] rounded-bl-[1.5vw] text-white bg-gradient-to-r from-[#9c9c9c57] to-transparent border-l-0'>
                <h1 className='text-[2.4vw]'>92%</h1>
                <h3 className='uppercase text-[#9C9C9C]'>faster technology</h3>
              </div>
            </div>
            <div className="mid w-1/4 h-[30vw] mt-12">
            <img src="../../public/imgs/skull.png" alt="" />
            </div>
            <div className="right w-[20%] flex flex-col items-center justify-start text-white">
                  <p className='w-[80%] text-[#878787] mt-[8vw] mb-[2vw]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deleniti mollitia of acces to everyone.</p>
                  <button className='border bg-zinc-100 text-black font-semibold border-white p-3 px-8 rounded-full'>Get Started</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Pg1