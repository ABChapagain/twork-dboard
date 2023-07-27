import { NextResponse } from 'next/server'

let url = process.env.NEXT_PUBLIC_API_URL + 'api/products/service/'

export async function DELETE(request) {
    const body = await request.json()
    const id = body.id


    let productExist = await getProvidersbyServiceID(id)
    if (productExist.length > 0) {
        return NextResponse.json({ message: `This Service cannot be deleted, because  ${productExist.length} ${(productExist.length == 1) ? 'provider' : 'providers'} ${(productExist.length == 1) ? 'is' : 'are'} mapped with this Service, Edit them first.`, status: 500, error: true, productExist })
    }
    try {
        const res = await fetch(url + id, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        })
        const data = await res.json()
        return NextResponse.json({ message: `The Service is deleted Successfully`, status: 200, data })
    } catch (error) {
        return NextResponse.json({ message: `Server Error ${error}`, status: 500, error: true })
    }
}



const getProvidersbyServiceID = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "api/serviceproviders/services/" + id, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}
