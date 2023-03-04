import React from 'react'
import Transaction from './Transaction'
import { transactions } from '../../data/transactions'
const TransactionList = () => {
  return (
    <div className='min-h-full sm:w-8/12 md:w-8/12 xl:w-7/12 lg:w-8/12 w-12/12 rounded-lg flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-2xl capitalize text-black'>last transactions</h1>
        <p className='font-medium
         cursor-pointer text-lg capitalize hover:text-gray-400 text-gray-500'>see all</p>
      </div>
      <div className='flex gap-6 w-full flex-col'>
        {
          transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction}/>
          ))
        }
      </div>
    </div>
  )
}

export default TransactionList