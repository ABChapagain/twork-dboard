'use client'



const ServiceTable = ({ service }) => {
    console.log(service)

    return (
        <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
            <h4 className='mb-6 text-xl font-semibold text-black dark:text-white'>
                Your Services
            </h4>

            <div className='flex flex-col'>
                <div className='grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5'>
                    <div className='p-2.5 xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Title
                        </h5>
                    </div>

                    <div className='p-2.5 text-center xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Banner Image
                        </h5>
                    </div>

                    <div className='hidden p-2.5 text-center sm:block xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Keywords
                        </h5>
                    </div>
                    <div className='p-2.5 text-center xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Description
                        </h5>
                    </div>
                    <div className='p-2.5 text-center xl:p-5'>
                        <h5 className='text-sm font-medium uppercase xsm:text-base'>
                            Slug
                        </h5>
                    </div>
                </div>
                {service.reverse().map((data) => {
                    var keywords = data.meta.keywords

                    return (
                        <div
                            key={data._id}
                            className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5'
                        >
                            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
                                <div className='avatar flex-shrink-0'>
                                    <img
                                        className='rounded-full w-10 h-10'
                                        src={data.bannerImage}
                                        alt='Brand'
                                    />
                                </div>
                                <p className='hidden text-black dark:text-white sm:block'>
                                    {data.title}
                                </p>
                            </div>

                            <div className='flex items-center gap-3 p-2.5 xl:p-5'>
                                <div className='avatar flex-shrink-0'>
                                    <img
                                        className=' w-full h-10'
                                        src={data.thumbImage}
                                        alt='thumb'
                                    />
                                </div>
                                <p className='hidden text-black dark:text-white sm:block'>
                                </p>
                            </div>


                            <div className='flex gap-2 items-center justify-center p-2.5 xl:p-5'>
                                {(keywords.length > 0) && keywords.map((data, index) => {
                                    return (
                                        <p key={index} className='text-meta-5'>
                                            {data}
                                        </p>
                                    )
                                })}
                            </div>

                            <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
                                <p className='text-meta-5'>
                                    {data.description.substring(0, 30) + '...'}
                                </p>
                            </div>


                            <div className='flex items-center justify-center p-2.5 xl:p-5'>
                                <p className='text-meta-3'>{data.slug} </p>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default ServiceTable
