import { metadata } from '@/app/layout'
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const body = await request.json()

        const {
            parentCategory,
            bannerImage,
            description,
            keywords,
            title,
            thumbImage,
        } = body.product

        if (!!parentCategory || parentCategory == "null") {

            var metaData = {
                title: title,
                description: description,
                meta: {
                    keywords: keywords,
                    title: title,
                    description: description
                },
                bannerImage: bannerImage,
                thumbImage: thumbImage,
                parentCategory: parentCategory,
            }
        } else {
            var metaData = {
                title: title,
                description: description,
                meta: {
                    keywords: keywords,
                    title: title,
                    description: description
                },
                bannerImage: bannerImage,
                thumbImage: thumbImage,
            }
        }



        const createCategories = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
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

