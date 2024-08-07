import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import tableData from "../Data/Table"
export const Transactions = ()=> {
  return (
   <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
            <h5 className='text-xl text-[#1A181E] font-medium'>Transactions | This Month </h5>
        <div className='flex gap-3 '>
        <button className="px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full">
              Payouts (22)
        </button>
        <button className="px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full">
              Refunds (6)
        </button>
        </div>
        </div>
        <div className='flex flex-col rounded-[8px] px-3 pt-3 pb-2 gap-3 bg-white'>
            <div className='flex justify-between items-center gap-3'>
                    <div className='flex items-center border px-4 py-[6px] last:gap-2 border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]'>
                    <IoSearch className="text-lg" />
                    <input type="text" placeholder='Order ID or transactions ID' className='bg-transparent outline-none w-full' />
                    </div>
                    <div className='flex items-center gap-3'>
                     <button className='flex items-center border rounded-[4px] px-3 py-[6px] gap-[6px] min-w-[75px] text-[#4D4D4D] '>
                        Sort{" "}
                        <img src="/updown.png" alt="updown icon"  
                         />
                      </button>
                      <button className="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
                             <FiDownload className="text-xl" />
                       </button>
                    </div>
            </div>
            <div className='overflow-x-auto'>
            <table className='min-w-full'>
            <colgroup>
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className='text-[#4D4D4D]'>
              <tr className="bg-[#F2F2F2]">
                    <td className='px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l'>
                    Order ID
                    </td>
                    <td className='px-3 py-[10px] text-left text-sm font-medium tracking-wider '>
                    Status
                    </td>
                    <td className='px-3 py-[10px] text-left text-sm font-medium tracking-wider '>
                    Transaction ID
                    </td>
                    <td className='px-3 py-[10px] text-left text-sm font-medium tracking-wider '>
                    Refund Date
                    </td>
                    <td className='px-3 py-[10px] text-right text-sm font-medium tracking-wider '>
                    Order Amount
                    </td>
                    </tr>
              </thead>
              <tbody className="bg-white divide-[#E6E6E6]">
                        {tableData.map((row, index) => {
                            return (
                                <tr className={`${index !== tableData.length - 1 ? 'border-b border-[#E6E6E6]' : ''} text-sm font-normal`} key={index}>
                                    <td className="font-medium px-3 py-[10px] text-[#146EB4] text-left">{row.orderId}</td>
                                    <td className="flex items-center gap-[6px] px-3 py-[10px] text-[#1A181E] text-left">
                                        <span
                                            className={`${row.status === "Successful"
                                                ? "bg-green-500"
                                                : "bg-[#999999]"
                                                } w-[10px] h-[10px] rounded-full`}
                                        ></span>
                                        {row.status}
                                    </td>
                                    <td className="px-3 py-[10px] text-[#4D4D4D] text-left">
                                        {row.transactionId}
                                    </td>
                                    <td className="px-3 py-[10px] text-[#1A181E] text-left">{row.refundDate}</td>
                                    <td className="px-3 py-[10px] text-[#1A181E] text-right">{row.orderAmount}</td>
                                  
                                </tr>
                            )
                        })}
                    </tbody>
            </table>
            </div>
        </div>
   </section>
  )
}                                       
