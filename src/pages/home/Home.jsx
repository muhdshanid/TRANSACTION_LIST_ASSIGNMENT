import React from 'react'
import TransactionList from '../../components/transactions/TransactionList'

const Home = () => {
  return (
    <div className='bg-gray-100 w-full min-h-screen md:py-10 md:px-20 lg:py-14 lg:px-[10rem]
    xl:py-[5rem] xl:px-[15rem] sm:py-6 sm:px-10  flex items-center justify-center'>
        <TransactionList/>
    </div>
  )
}

export default Home