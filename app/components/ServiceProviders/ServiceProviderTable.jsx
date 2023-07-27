'use client'

import ActionsButton from "./ActionButtons"



const ServiceProviderTable = ({ providers }) => {
    return (
        <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
            <h4 className='mb-6 text-xl font-semibold text-black dark:text-white'>
                Service Providers
            </h4>

            <div className='flex flex-col'>
                <div className='grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5'>
                    <div className='p-2.5 xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Name
                        </h5>
                    </div>

                    <div className='p-2.5 text-center xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Contact
                        </h5>
                    </div>

                    <div className='hidden p-2.5 text-center sm:block xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Address
                        </h5>
                    </div>
                    <div className='p-2.5 text-center xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Rate (per)
                        </h5>
                    </div>
                    <div className='p-2.5 text-center xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Actions
                        </h5>
                    </div>
                </div>
                {providers.reverse().map((data) => {
                    return (
                        <div
                            key={data._id}
                            className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5'
                        >
                            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
                                <div className='avatar flex-shrink-0'>
                                    <img
                                        className='rounded-full w-10 h-10'
                                        src={data.image}
                                        alt='John Doe'
                                    />
                                </div>
                                <div className='flex flex-col items-center gap-3 p-2.5 xl:p-5'>
                                    <p className='hidden text-black dark:text-white sm:block'>
                                        {data.name}
                                    </p>
                                    <p>{(!!data.service) && data.service.title}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
                                <p className='hidden text-black dark:text-white sm:block'>
                                    {data.contact}
                                </p>
                            </div>


                            <div className='flex gap-2 items-center justify-center p-2.5 xl:p-5'>
                                <p className='text-black dark:text-white'>
                                    {data.address}
                                </p>
                            </div>

                            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
                                <p className='text-meta-5'>
                                    {data.rate} {data.rateType}
                                </p>
                            </div>


                            <div className='flex items-center justify-center p-2.5 xl:p-5'>
                                <div className='flex gap-2'>
                                    <ActionsButton id={data._id} />
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default ServiceProviderTable
