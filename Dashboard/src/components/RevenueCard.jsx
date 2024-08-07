import React from 'react'
import { FaRegCircleQuestion} from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export const  RevenueCard = ({
    title,
    orderCount,
    amount,
})=> {
  return (
    <div className='flex flex-grow min-w-[300px] h-fit gap-4 bg-white shadow-sm flex-col p-5  rounded-lg'>
        <h5 className='text-[#4D4D4D] flex items-center gap-3'>
          {title} <FaRegCircleQuestion className="text-m"/>
        </h5>
        <div className='flex justify-between items-center'>
            <p className=' text-3xl  font-medium'>
            ₹{amount}</p>
            {orderCount ? <p className="text-base font-medium underline text-[#146EB4] flex items-center">
              {orderCount} Orders 
              <FaChevronRight  className='text-xl'/>
              </p>: null}
        
        </div>
      
    </div>
  )
}
