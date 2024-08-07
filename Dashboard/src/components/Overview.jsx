import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { NextPayoutCard } from "./NextPayoutCard"
import { RevenueCard } from "./RevenueCard"

export const Overview = ()=> {
  return (
   <section className='flex flex-col gap-6  '>
    <div className='flex justify-between'>
        <h2 className='text-[#1A181E] font-medium text-xl'>Overview</h2>
        <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
            This Month <FaChevronDown />
          </button>
    </div>
    <div className="flex flex-wrap gap-5">
            <NextPayoutCard title={"Next Payout"} amount={"2,312.23"} orderCount={13} nextPaymentDate={"Today, 4:00PM"} />
            <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={17} />
            <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
        </div>
   </section>
  )
}
