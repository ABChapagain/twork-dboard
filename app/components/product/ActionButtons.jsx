'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { toast } from 'react-toastify'

const ActionsButton = ({ id }) => {
    const router = useRouter()
    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            try {
                // const response = await deleteProduct(id)
                // toast.success(response.message)
            } catch (error) {
                toast.error(error.message)
            } finally {
                router.push('/inventory/products')
                router.refresh()
            }
        } else {
            return
        }
    }

    return (
        <div className='flex items-center space-x-3.5'>
            <button className='hover:text-primary'>
                <RiDeleteBinLine
                    onClick={() => handleDelete(id)}
                    className='h-[18px] w-[18px]'
                />
            </button>
            <Link
                href={`/inventory/products/edit/${id}`}
                className='hover:text-primary'
            >
                <BiEdit className='h-[18px] w-[18px]' />
            </Link>
        </div>
    )
}

export default ActionsButton