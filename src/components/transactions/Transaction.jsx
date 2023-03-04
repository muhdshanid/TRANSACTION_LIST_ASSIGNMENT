import React from 'react'
import {BsDot} from 'react-icons/bs'
const Transaction = ({transaction}) => {
  return (
    <div className=' bg-white w-full p-4 rounded-[1.2rem] flex gap-6 items-center justify-between'>
      <div className='flex items-center gap-4'>
      <div className='flex items-center'>
        <img src={transaction.image} className='rounded-full 
        w-16 h-16 object-cover' alt="profile" />
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <h1 className='font-semibold text-xl text-black capitalize'>{transaction.to}</h1>
        </div>
        <div className='flex items-center '>
          <p className='font-normal text-gray-400 text-base '>{transaction.date}</p>
          <BsDot size={20} color="gray"/>
          <p className='font-normal text-gray-400 text-base '>{transaction.time}</p>
        </div>
      </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h5 className={`font-semibold text-lg ${transaction.type === "Received" ?
         "text-green-400" : "text-red-600"}`}>
          {
            transaction.type === "Received" ?
            `+$${transaction.amount}`
            : `-$${transaction.amount}`
          }
         </h5>
         <p className='font-medium text-black text-base'>{transaction.type}</p>
      </div>
    </div>
  )
}

export default Transaction