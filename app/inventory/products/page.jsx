import Addproduct from '@/app/components/product/Addproduct'
import ProductTable from '@/app/components/product/ProductTable'
import React, { use } from 'react'


async function getData() {
    let url = process.env.NEXT_PUBLIC_API_URL
    return await (await fetch(url + '/api/products/physical', {
        cache: 'no-store',
    })).json()
}

async function getCategory() {
    let url = process.env.NEXT_PUBLIC_API_URL
    return await (await fetch(url + 'api/categories', {
        cache: 'no-store',
    })).json()
}

export const metadata = {
    title: 'Products | Dashboard',
    description: 'Manage Products',
    url: '/inventory',
}

function page() {


    let products = use(getData())
    let category = use(getCategory())

    return (
        <div>
            <Addproduct categories={category} />
            <ProductTable products={products} />
        </div>
    )
}

export default page