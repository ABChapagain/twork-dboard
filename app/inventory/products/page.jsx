import Addproduct from '@/app/components/product/Addproduct'
import ProductTable from '@/app/components/product/ProductTable'
import React, { use } from 'react'


async function getData() {
    let url = process.env.NEXT_PUBLIC_API_URL
    return await (await fetch(url + '/api/products/physical', {
        cache: 'no-store',
    })).json()
}

function page() {
    const metadata = {
        title: 'Inventory',
        description: 'Manage inventory',
        url: '/inventory',
    }

    let products = use(getData())

    return (
        <div>
            <Addproduct />
            <ProductTable products={products} />
        </div>
    )
}

export default page