'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsMoonFill, BsSun } from 'react-icons/bs'

const DarkModeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  return (
    <li>
      <label
        className={`relative m-0 block h-7.5 w-14 rounded-full ${
          theme === 'dark' ? 'bg-primary' : 'bg-stroke'
        }`}
      >
        <input
          type='checkbox'
          checked={theme === 'dark' ? true : false}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className='dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0'
        />
        <span
          className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
            theme === 'dark' ? '!right-[3px] !translate-x-full' : ''
          }`}
        >
          <span className='dark:hidden'>
            <BsSun className='h-[16px] w-[16px]' />
          </span>
          <span className='hidden dark:inline-block'>
            <BsMoonFill className='h-[16px] w-[16px]' />
          </span>
        </span>
      </label>
    </li>
  )
}

export default DarkModeSwitcher
