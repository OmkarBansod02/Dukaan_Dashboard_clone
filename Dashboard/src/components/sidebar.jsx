import React from 'react'
import { useEffect, useRef } from 'react';
import { useRecoilState } from "recoil";
import { Link } from 'react-router-dom';
import { SideBarOpen } from '../atoms/sidebarAtom';
import { IoIosCloseCircle } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import orders from '../assets/icons/orders.png';
import home from "../assets/icons/home.png";
import products from "../assets/icons/products.png";
import delivery from "../assets/icons/delivery.png";
import marketing from "../assets/icons/marketing.png";
import analytics from "../assets/icons/analytics.png";
import payouts from "../assets/icons/payouts.png";
import discounts from "../assets/icons/discounts.png";
import audience from "../assets/icons/audience.png";
import appearence from "../assets/icons/appearence.png";
import plugins from "../assets/icons/plugins.png";
import nishyan from "../assets/icons/nishyan.svg";
import wallet from "../assets/icons/wallet.svg"



const menuLists = [
    {
      icon: home,
      name: "Home",
    },
    {
      icon: orders,
      name: "Orders",
    },
    {
      icon: products,
      name: "Products",
    },
    {
      icon: delivery,
      name: "Delivery",
    },
    {
      icon: marketing,
      name: "Marketing",
    },
    {
      icon: analytics,
      name: "Analytics",
    },
    {
      icon: payouts,
      name: "Payouts",
    },
    {
      icon: discounts,
      name: "Discounts",
    },
    {
      icon: audience,
      name: "Audience",
    },
    {
      icon: appearence,
      name: "Appearence",
    },
    {
      icon: plugins,
      name: "Plugins",
    },
  ];


export const Sidebar = () => {
const modalRef = useRef(null);

const [ isOpen , setIsOpen] = useRecoilState(SideBarOpen);

const handleToggleModal = () => {
    setIsOpen(!isOpen);
};

const handleClickOutside = (e)=>{
    if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
    }
};
useEffect(() => {
    document.addEventListener("mousedown",handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

  return (
    <>
  <aside
        className={`fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] ${
          isOpen
            ? "pointer-events-all opacity-100"
            : "pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto"
        }`}
      >
        <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <button
          className={`${isOpen ? "fixed" : "hidden"} top-5 right-4 lg:hidden`}
          onClick={handleToggleModal}
        >
          <IoIosCloseCircle className="text-white text-3xl"/>
        </button>
        <div   className={`relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between ${
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
          ref={modalRef}
        >
          <div className='w-full flex items-center flex-col gap-6'>
            <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
            <div className=" flex bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
            <img  src={nishyan}
                  alt="nishyanLogo"
                  fill = "true"
                  className="object-cover object-center"
                  quality={95} />
            </div>
            <div className='flex flex-col w-[108px] gap-1 justify-center'>
              <h3 className='font-medium text-[15px] leading-[22px]'>Nishyan</h3>
              <a href="#" className='underline text-[13px] opacity-80 text-white'>Visit Store</a>
            </div>
            <FaChevronDown className='w-[20px] h-[20px]'/>
            </div>
            <div className='w-full flex flex-col justify-center'>
            {menuLists.map((item) => (
                <a
                  key={item.name}
                  href={"#"}
                  className ={`${
                    item.name === "Payouts" ? "bg-[#FFFFFF]/10" : ""
                  } px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10`}
                >
                   <div className="relative w-[18px] h-[18px]">
                    <img
                      src={item.icon}
                      alt={item.name}
                      fill = "true"
                      className="object-contain object-center"
                    />
                  </div>
                  <p className="text-[14px] font-medium">{item.name}</p>
                </a>
              ))}
            </div>
           </div>
           <div className='py-[6px] px-3 bg-[#353C53] rounded mx-2 '>
                <div className='flex gap-3 items-center'>
                    <div className='w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center'>
                    <img src={wallet} alt="wallet_icon" className='w-[23.6px] h-[19.6px] '/>
                    </div>
                    <div className='flex flex-col text-white gap-[2px]'>
                    <h3 className='text-[13px] text-[#ffffff] font-light' >Available credits</h3>
                    <h6 className='text-base font-medium  '>242.10</h6>
                </div>
                </div>
                
           </div>
        </div>
   
    </aside>
      
    </>
  )
}
