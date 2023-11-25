import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const body = await request.json()

        const {
            name,
            description,
            address,
            contact,
            image,
            service,
            rate,
            rateType,
            isAvailable,
            email,
        } = body.provider
        var metaData = {
            name: name,
            description: description,
            address: address,
            contact: contact,
            image: image,
            service: service,
            rate: rate,
            rateType: rateType,
            isAvailable: isAvailable,
            email: email,
        }
        const createCategories = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}api/serviceproviders`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(metaData),
            }
        )

        const product = await createCategories.json()

        return NextResponse.json(product, { status: 200 })

    } catch (error) {
        return NextResponse.json(
            { message: `Server Error ${error}` },
            { status: 500 }
        )
    }
}

