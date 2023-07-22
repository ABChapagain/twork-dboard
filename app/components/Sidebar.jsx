'use client'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SidebarLinkGroup from './SidebarLinkGroup'
import { RxDashboard } from 'react-icons/rx'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { CiUser } from 'react-icons/ci'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname()

  const trigger = useRef(null)
  const sidebar = useRef(null)

  const [storedSidebarExpanded, setStoredSidebarExpanded] = useState(
    localStorage.getItem('sidebar-expanded')
  )

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black text-slate-100 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5'>
        <Link href='/'>
          {/* <img src={'images/logo/logo.svg'} alt='Logo' /> */}
          <h1 className='font-bold text-3xl'>Admin Panel</h1>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls='sidebar'
          aria-expanded={sidebarOpen}
          className='block lg:hidden'
        >
          <AiOutlineArrowLeft className='h-[25px] w-[30px] ' />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        {/* <!-- Sidebar Menu --> */}
        <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className='mb-4 ml-4 text-sm font-semibold text-bodydark2'>
              MENU
            </h3>

            <ul className='mb-6 flex flex-col gap-1.5'>
              <li>
                <Link
                  href='/'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname === '/' ? 'bg-graydark' : ''
                  }`}
                >
                  <RxDashboard className='h-[18px] w-[18px]' />
                  Dashboard
                </Link>
              </li>
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/inventory' || pathname.includes('inventory')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href='#'
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname === '/inventory' ||
                          pathname.includes('inventory')
                            ? 'bg-graydark dark:bg-meta-4'
                            : ''
                        }`}
                        onClick={(e) => {
                          e.preventDefault()
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true)
                        }}
                      >
                        <RxDashboard className='h-[18px] w-[18px]' />
                        Inventory
                        <FaChevronDown
                          className={`w-[16px] h-[16px] absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className='mt-4 mb-5.5 flex flex-col gap-2.5 pl-6'>
                          <li>
                            <Link
                              href='/inventory/products'
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === '/inventory/products' &&
                                '!text-white'
                              }`}
                            >
                              Products
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/inventory/categories'
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === '/inventory/categories' &&
                                '!text-white'
                              }`}
                            >
                              Categories
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  )
                }}
              </SidebarLinkGroup>
              <li>
                <Link
                  href='/profile'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname === '/profile' ? 'bg-graydark' : ''
                  }`}
                >
                  <CiUser className='h-[18px] w-[18px]' />
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href='/settings'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname === '/settings' ? 'bg-graydark' : ''
                  }`}
                >
                  <FiSettings className='h-[18px] w-[18px]' />
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 ml-4 text-sm font-semibold text-bodydark2'>
              OTHERS
            </h3>

            <ul className='mb-6 flex flex-col gap-1.5'>
              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href='#'
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/auth' || pathname.includes('auth')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault()
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true)
                        }}
                      >
                        <BiLogOut className='h-[18px] w-[18px]' />
                        Authentication
                        <FaChevronDown
                          className={`w-[16px] h-[16px] absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className='mt-4 mb-5.5 flex flex-col gap-2.5 pl-6'>
                          <li>
                            <Link
                              href='/auth/signin'
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === '/auth/signin' && '!text-white'
                              }`}
                            >
                              Sign In
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/auth/signup'
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === '/auth/signup' && '!text-white'
                              }`}
                            >
                              Sign Up
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  )
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  )
}

export default Sidebar
