import Addproduct from '@/app/components/product/Addproduct'
import ProductTable from '@/app/components/product/ProductTable'
import React, { use } from 'react'


let url = process.env.NEXT_PUBLIC_API_URL

async function getData() {
    const productUrl = url + 'api/products/physical'
    const data = await fetch(productUrl, { cache: 'no-store' }, { mode: 'no-cors' });
    let result = await data.json();
    console.log(productUrl, result)
    return result;
}

async function getCategory() {
    // return await (await fetch(url + 'api/categories', {
    //     cache: 'no-store',
    // })).json()
    const data = await fetch(url + 'api/categories');
    let result = await data.json();
    return result;
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