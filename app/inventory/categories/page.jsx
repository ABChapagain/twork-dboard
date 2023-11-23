import Addcategory from '@/app/components/category/Addcategory'
import CategoryTable from '@/app/components/category/CategoryTable'
import React, { use } from 'react'


async function getData() {
    let url = process.env.NEXT_PUBLIC_API_URL
    // return await (await fetch(url + '/api/categories', {
    //     cache: 'no-store',
    // })).json()
    const data = await fetch(url + 'api/categories');
    let result = await data.json();


    return result;
}

function page() {
    const metadata = {
        title: 'Inventory',
        description: 'Manage inventory',
        url: '/inventory',
    }

    let categories = use(getData())

    return (
        <div>
            <Addcategory />
            <CategoryTable category={categories} />
        </div>
    )
}

export default page