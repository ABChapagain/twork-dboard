import Addservices from '@/app/components/Services/Addservices'
import ServiceTable from '@/app/components/Services/ServiceTable'
import React, { use } from 'react'


async function getData() {
    let url = process.env.NEXT_PUBLIC_API_URL
    return await (await fetch(url + 'api/products/service', {
        cache: 'no-store',
    })).json()
}
export const metadata = {
    title: 'Services',
    description: 'Manage Services',
    url: '/inventory/services',
}

function page() {

    let services = use(getData())

    return (
        <div>
            <Addservices />
            <ServiceTable service={services} />
        </div>
    )
}

export default page