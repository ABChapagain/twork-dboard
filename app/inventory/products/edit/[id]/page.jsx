import EditProduct from '@/app/components/product/EditProduct'
import React, { use } from 'react'


async function getData(id) {
    let url = process.env.NEXT_PUBLIC_API_URL
    return await (await fetch(url + '/api/products/physical/' + id, {
        cache: 'no-store',
    })).json()
}

function page({ params }) {

    let products = use(getData(params.id))

    return (
        <div>
            <EditProduct products={products} />
        </div>
    )
}

export default page