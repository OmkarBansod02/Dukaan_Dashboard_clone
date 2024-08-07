import React from 'react'
import { SideBarOpen } from "../atoms/sidebarAtom";
import { useSetRecoilState } from 'recoil'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown, FaRegCircleQuestion } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

export const Header = () => {
    const setSideBarOpen = useSetRecoilState(SideBarOpen);
  return (
    <header className=" flex justify-between items-center gap-2 sm:gap-4 px-4 sm:px-8 py-3 border-b border-[#D9D9D9] sticky top-0 bg-[#FFFFFF]">
        <div className='flex items-center gap-2 sm:gap-4 sm:grow'>
        <button
          className="block lg:hidden"
          onClick={() => setSideBarOpen((prev) => !prev)}
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
        <h5 className="text-[#1A181E] font-medium  text-xl">Payouts</h5>
        <div className="flex items-center gap-[6px] text-[#4D4D4D]">
        <FaRegCircleQuestion className="text-sm"/>
        <p className='hidden sm:block text-xs'>How it works</p>
       
        </div>
     </div>
        <div className=' flex gap-2 items-center px-4 py-1.5 sm:py-[9px] w-[140px] text-[#808080] rounded-md  bg-[#F2F2F2] sm:flex-grow ' > 
        <IoSearchOutline />
         <input type="text" placeholder='Search features, tutorials, etc.' className=' bg-transparent outline-none w-full ' />
        </div>
        <div className='flex justify-end gap-2   sm:flex-grow'>
          <button className=' text-[#4D4D4D] p-2 items-center justify-center  h-8 sm:flex w-8 bg-[#E6E6E6] sm:w-10 sm:h-10  rounded-full '>
            <img src="speaker.png" alt="Speaker logo" 
            width={20}
            height={20} />
          </button>
          <button className='text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 sm:w-10 sm:h-10 flex items-center justify-center'>
          <FaCaretDown className='text-2xl'/>
          </button>
        </div>
    </header> 


  )
}
