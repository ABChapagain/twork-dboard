import AddserviceProviders from '@/app/components/ServiceProviders/AddservicesProviders'
import ServiceProviderTable from '@/app/components/ServiceProviders/ServiceProviderTable'
import React, { use } from 'react'


async function getProviders() {
    let url = process.env.NEXT_PUBLIC_API_URL
    return await (await fetch(url + 'api/serviceproviders', {
        cache: 'no-store',
    })).json()
}
export const metadata = {
    title: 'Services Providers | Dashboard',
    description: 'Manage Services providers',
    url: '/inventory/services/providers',
}

async function getService() {
    let url = process.env.NEXT_PUBLIC_API_URL
    return await (await fetch(url + 'api/products/service', {
        cache: 'no-store',
    })).json()
}

function page() {

    let serviceProviders = use(getProviders())
    let services = use(getService())

    return (
        <div>
            <AddserviceProviders service={services} />
            <ServiceProviderTable providers={serviceProviders} />

        </div>
    )
}

export default page