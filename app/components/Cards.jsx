import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BsHandbag } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'

export const datas = [
  {
    id: 1,
    title: 'Total views',
    value: '$3.456K',
    percentage: '0.43%',
    icon: IoEyeOutline,
    isUp: true,
  },
  {
    id: 2,
    title: 'Total Profit',
    value: '$45,2K',
    percentage: '4.35%',
    icon: HiOutlineShoppingCart,
    isUp: true,
  },
  {
    id: 3,
    title: 'Total Product',
    value: '2.45',
    percentage: '2.59%',
    icon: BsHandbag,
    isUp: true,
  },
  {
    id: 4,
    title: 'Total Users',
    value: '3.456',
    percentage: '0.95%',
    icon: HiOutlineUsers,
    isUp: false,
  },
]

const Cards = () => {
  return datas?.map((data) => (
    <div className='rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2  text-primary dark:text-white dark:bg-meta-4'>
        <data.icon className=' w-[20px] h-[25px]' />
      </div>

      <div className='mt-4 flex items-end justify-between'>
        <div>
          <h4 className='text-title-md font-bold text-black dark:text-white'>
            {data.value}
          </h4>
          <span className='text-sm font-medium'>{data.title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            data.isUp ? 'text-meta-3' : 'text-meta-5'
          }`}
        >
          {data.percentage}
          <AiOutlineArrowUp
            className={`w-[15px] h-[14px] ${
              data.isUp ? 'rotate-0 fill-meta-3' : 'rotate-180 fill-meta-5'
            }`}
          />
        </span>
      </div>
    </div>
  ))
}

export default Cards
