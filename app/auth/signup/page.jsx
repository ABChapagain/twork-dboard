import Link from 'next/link'
import { BsEnvelope } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { TfiLock } from 'react-icons/tfi'
import { FcGoogle } from 'react-icons/fc'
const SignUp = () => {
  return (
    <>
      <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='flex flex-wrap items-center'>
          <div className='hidden w-full xl:block xl:w-1/2'>
            <div className='py-17.5 px-26 text-center'>
              <Link className='mb-5.5 inline-block' href='/'>
                {/* <img
                  className='hidden dark:block'
                  src={'../images/logo/logo.svg'}
                  alt='Logo'
                />
                <img
                  className='dark:hidden'
                  src={'../images/logo/logo-dark.svg'}
                  alt='Logo'
                /> */}
                <h1 className='font-bold text-3xl'>Admin Panel</h1>
              </Link>
              <p className='2xl:px-20'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>

              <span className='mt-15 inline-block'>
                <img
                  src='https://i.ibb.co/NW1d6h1/authentication-bg.png'
                  alt=''
                />
              </span>
            </div>
          </div>

          <div className='w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2'>
            <div className='w-full p-4 sm:p-12.5 xl:p-17.5'>
              <span className='mb-1.5 block font-medium'>Start for free</span>
              <h2 className='mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2'>
                Sign Up to Admin Panel
              </h2>

              <form>
                <div className='mb-4'>
                  <label className='mb-2.5 block font-medium text-black dark:text-white'>
                    Name
                  </label>
                  <div className='relative'>
                    <input
                      type='text'
                      placeholder='Enter your full name'
                      className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />

                    <span className='absolute right-4 top-4'>
                      <FiUser className='h-[22px] w-[22px]' />
                    </span>
                  </div>
                </div>

                <div className='mb-4'>
                  <label className='mb-2.5 block font-medium text-black dark:text-white'>
                    Email
                  </label>
                  <div className='relative'>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />

                    <span className='absolute right-4 top-4'>
                      <BsEnvelope className='h-[22px] w-[22px]' />
                    </span>
                  </div>
                </div>

                <div className='mb-4'>
                  <label className='mb-2.5 block font-medium text-black dark:text-white'>
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      type='password'
                      placeholder='Enter your password'
                      className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />

                    <span className='absolute right-4 top-4'>
                      <TfiLock className='h-[22px] w-[22px]' />
                    </span>
                  </div>
                </div>

                <div className='mb-6'>
                  <label className='mb-2.5 block font-medium text-black dark:text-white'>
                    Re-type Password
                  </label>
                  <div className='relative'>
                    <input
                      type='password'
                      placeholder='Re-enter your password'
                      className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                    />

                    <span className='absolute right-4 top-4'>
                      <TfiLock className='h-[22px] w-[22px]' />
                    </span>
                  </div>
                </div>

                <div className='mb-5'>
                  <input
                    type='submit'
                    value='Create account'
                    className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
                  />
                </div>

                <button className='flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50'>
                  <span>
                    <FcGoogle className='h-[20px] w-[20px]' />
                  </span>
                  Sign up with Google
                </button>

                <div className='mt-6 text-center'>
                  <p>
                    Already have an account?{' '}
                    <Link href='/auth/signin' className='text-primary'>
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
