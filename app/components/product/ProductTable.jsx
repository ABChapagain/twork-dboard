'use client'
import ActionsButton from "./ActionButtons"
import React from "react"



const ProductTable = ({ products }) => {

    return (
        <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
            <h4 className='mb-6 text-xl font-semibold text-black dark:text-white'>
                Your Products
            </h4>


            <div className='max-w-full overflow-x-auto'>
                <table className='w-full table-auto'>
                    <thead>
                        <tr className='bg-gray-2 text-left dark:bg-meta-4'>
                            <th className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11'>
                                Title
                            </th>
                            <th className='min-w-[150px] py-4 px-4 font-medium text-black dark:text-white'>
                                MRP
                            </th>
                            <th className='min-w-[120px] py-4 px-4 font-medium text-black dark:text-white'>
                                Description
                            </th>
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                Keywords
                            </th>
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.reverse().map((product) => {
                            let cat = product.category
                            if (!!cat) var len = Object.keys(cat).length
                            return (
                                <tr key={product._id}>
                                    <td className='border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11'>
                                        <div className='flex items-center gap-2'>
                                            <div className='avatar flex-shrink-0'>
                                                <img
                                                    className='rounded-full w-10 h-10'
                                                    src={product.productImageGallery[0]}
                                                    alt='Brand'
                                                />
                                            </div>
                                            <div>
                                                <h5 className='font-medium text-black dark:text-white'>
                                                    {product.title}
                                                </h5>
                                                <p className='text-sm'>
                                                    {' '}
                                                    {!!len &&
                                                        len > 0 &&
                                                        cat.map((data, index) => {
                                                            return (
                                                                <p
                                                                    key={index}
                                                                    className='text-black dark:text-white'
                                                                >
                                                                    {data?.title}
                                                                </p>
                                                            )
                                                        })}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <p className='text-black dark:text-white'>
                                            Rs {product.price}
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <p className='text-black dark:text-white'>
                                            {product.description.substring(0, 30) + '...'}
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <p
                                            className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium `}
                                        >
                                            {product.meta.keywords[0]}
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <ActionsButton id={product._id} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductTable
