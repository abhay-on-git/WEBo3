import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

function Pg2() {
  return (
    <div className='w-full overflow-x-hidden overflow-y-hidden relative min-h-screen bg-[#161618]'>
            <img src="../../imgs/star.png" className='w-full h-full object-cover rotate-12 object-center'/>
        <div className='absolute top-0  w-full h-full bg-[#16161877] backdrop-blur-2xl'>
        <div className='w-full h-[15vmax] pt-32 pb-6 flex items-center justify-center'>
             <h1 className=' text-nowrap text-white text-[4.8vmax] font-medium'>Our Services</h1>
        </div>
        <div className='relative w-full  h-[70vmax] pt-6 pb-0 text-white'>
           <div className='w-full h-2/3 flex items-center px-16'>
           <div className='w-1/2 h-1/2'>
                <h1 className='text-[4vw] font-medium mb-6'>UI/UX Design</h1>
                <p className='w-[70%] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae quo delectus incidunt explicabo fugit animi ipsam eveniet ad ut libero, repudiandae reiciendis.</p>
                <h3 className='flex items-center my-6 gap-2'><span className='rounded-full bg-[#56565c54] p-1.5 backdrop-blur-lg'><FaCheck /></span> User Interface design</h3>
                <h3 className='flex items-center my-6 gap-2'><span className='rounded-full bg-[#56565c54] p-1.5 backdrop-blur-lg'><FaCheck /></span> User Experience design</h3>
                <h3 className='flex items-center my-6 gap-2'><span className='rounded-full bg-[#56565c54] p-1.5 backdrop-blur-lg'><FaCheck /></span> Mobile Application design</h3>
                <button className=' flex items-center gap-2 py-3 px-9 bg-transparent border border-[#676767] rounded-full mt-10'>Learn More <GoArrowUpRight /> </button>

            </div>
            <div className='w-1/2 h-1/2'>
                <img src="../../imgs/computer.png" />
            </div>

           </div>
        <div className=' w-full h-[18vmax] flex items-center gap-52 justify-center bg-[#baabab16] backdrop-blur-sm'>
            <div className='flex flex-col items-center justify-center text-white'>
                <h1 className='text-[4vw]'>5M+</h1>
                <h3 className='capitalize leading-[0.1vw]'>customers</h3>
            </div>
            <div className='flex flex-col items-center justify-center text-white'>
                <h1 className='text-[4vw]'>450M+</h1>
                <h3 className='capitalize leading-[0.1vw]'>coverage</h3>
            </div>
            <div className='flex flex-col items-center justify-center text-white'>
                <h1 className='text-[4vw]'>8.03%</h1>
                <h3 className='capitalize leading-[0.1vw]'>intrest</h3>
            </div>
            <div className='flex flex-col items-center justify-center text-white'>
                <h1 className='text-[4vw]'>5M+</h1>
                <h3 className='capitalize leading-[0.1vw]'>customers</h3>
            </div>
        </div>
        <div className='text-white w-full pt-[4.5vw] h-[40vw]'>
            <h1 className='text-[4.5vw] font-medium text-center'>Our happy Customers</h1>
             <div className='flex items-center justify-between px-12 pt-40'>
                   <div className='card p-5 relative w-[22vmax] h-[16vmax] rounded-2xl bg-gradient-to-b from-[#2b2b2dd0] to-[#3b3737c7] backdrop-blur-xl'>
                     <div className='flex w-fit py-2 px-3 rounded-full gap-2 bg-[#161618e1] backdrop-blur-2xl absolute left-1/2 -translate-x-[50%] top-[-10%]'>
                        <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-300'>
                            <img className=' w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-300'>
                            <img className=' w-full h-full object-cover object-center' src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                     </div>
                     <h1 className='text-[4vw] mt-10 leading-[2.5vw] flex items-center'>* * * * *</h1>
                     <p className='text-[1vw]'>Lorem ipsum dolor sit amet elit. Eius quam aperiam quod omnis, Consequatur numquam pariatur voluptatem quis.</p>
                     <h3 className='mt-5'>Founder of Rubix</h3>
                   </div>
                   <div className='card p-5 relative w-[22vmax] h-[16vmax] rounded-2xl bg-gradient-to-b from-[#2b2b2dd0] to-[#3b3737c7] backdrop-blur-xl'>
                     <div className='flex w-fit py-2 px-3 rounded-full gap-2 bg-[#161618e1] backdrop-blur-2xl absolute left-1/2 -translate-x-[50%] top-[-10%]'>
                        <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-300'>
                            <img className=' w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-300'>
                            <img className=' w-full h-full object-cover object-center' src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                     </div>
                     <h1 className='text-[4vw] mt-10 leading-[2.5vw] flex items-center'>* * * * *</h1>
                     <p className='text-[1vw]'>Lorem ipsum dolor sit amet elit. Eius quam aperiam quod omnis, Consequatur numquam pariatur voluptatem quis.</p>
                     <h3 className='mt-5'>Founder of Rubix</h3>
                   </div>
                   <div className='card p-5 relative w-[22vmax] h-[16vmax] rounded-2xl bg-gradient-to-b from-[#2b2b2dd0] to-[#3b3737c7] backdrop-blur-xl'>
                     <div className='flex w-fit py-2 px-3 rounded-full gap-2 bg-[#161618e1] backdrop-blur-2xl absolute left-1/2 -translate-x-[50%] top-[-10%]'>
                        <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-300'>
                            <img className=' w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-300'>
                            <img className=' w-full h-full object-cover object-center' src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                     </div>
                     <h1 className='text-[4vw] mt-10 leading-[2.5vw] flex items-center'>* * * * *</h1>
                     <p className='text-[1vw]'>Lorem ipsum dolor sit amet elit. Eius quam aperiam quod omnis, Consequatur numquam pariatur voluptatem quis.</p>
                     <h3 className='mt-5'>Founder of Rubix</h3>
                   </div>
                   <div className='card p-5 relative w-[22vmax] h-[16vmax] rounded-2xl bg-gradient-to-b from-[#2b2b2dd0] to-[#3b3737c7] backdrop-blur-xl'>
                     <div className='flex w-fit py-2 px-3 rounded-full gap-2 bg-[#161618e1] backdrop-blur-2xl absolute left-1/2 -translate-x-[50%] top-[-10%]'>
                        <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-300'>
                            <img className=' w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-300'>
                            <img className=' w-full h-full object-cover object-center' src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                     </div>
                     <h1 className='text-[4vw] mt-10 leading-[2.5vw] flex items-center'>* * * * *</h1>
                     <p className='text-[1vw]'>Lorem ipsum dolor sit amet elit. Eius quam aperiam quod omnis, Consequatur numquam pariatur voluptatem quis.</p>
                     <h3 className='mt-5'>Founder of Rubix</h3>
                   </div>
             </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Pg2