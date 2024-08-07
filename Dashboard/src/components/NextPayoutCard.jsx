import React from 'react'
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export const NextPayoutCard = ({
    title,
    orderCount,
    amount,
    nextPaymentDate
}) => {
  return (
    <div className='rounded-[8px] flex- grow hover:bg-[#0E4F82] bg-[#136EB4] text-white min-w-[300px]'>
      <div className='p-5 flex flex-col gap-4 '>
        <h5 className='flex gap-3 items-center'> {title}
        <FaRegCircleQuestion className="text-m"/>
        </h5>
        <div className='flex justify-between items-center'>
            <p className='text-3xl font-medium'>₹{amount}</p>
            <p className=' underline flex items-center text-base font-medium'>{orderCount} Orders
            <FaChevronRight  className='text-xl'/>
            </p>
        </div>
      </div>
      <div className='px-6 py-2 bg-[#0E4F82] flex  justify-between rounded-[8px] text-[#f2f2f2]'>
        <p className='font-normal text-sm'>Next Payment Date</p>
        <p className='font-normal text-sm'>{nextPaymentDate} </p>
      </div>
    </div>
  )
}


