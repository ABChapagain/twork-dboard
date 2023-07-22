'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'
import { CiUser } from 'react-icons/ci'
import { FiSettings } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })
  return (
    <div className='relative'>
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className='flex items-center gap-4'
        href='#'
      >
        <span className='hidden text-right lg:block'>
          <span className='block text-sm font-medium text-black dark:text-white'>
            Achyut Chapagain
          </span>
          <span className='block text-xs'>Web Developer</span>
        </span>

        <span className='h-12 w-12 avatar rounded-full'>
          <img
            src={'https://i.ibb.co/106s72s/default-user.png'}
            className='rounded-full'
            alt='User'
          />
        </span>

        <span
          className={`hidden sm:block ${
            dropdownOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <FaChevronDown
            className={`h-[20px] w-[15px] dark:text-white ${
              dropdownOpen ? 'rotate-180' : ''
            }'}`}
          />
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className='flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark'>
          <li>
            <Link
              href='/profile'
              className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
            >
              <CiUser className='h-[25px] w-[25px] fill-current' />
              My Profile
            </Link>
          </li>

          <li>
            <Link
              href='/settings'
              className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
            >
              <FiSettings className='h-[22px] w-[22px]' />
              Account Settings
            </Link>
          </li>
        </ul>
        <button className='flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'>
          <BiLogOut className='h-[22px] w-[22px]' />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
