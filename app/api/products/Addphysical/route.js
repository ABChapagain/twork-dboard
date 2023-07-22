import { NextResponse } from 'next/server'
// const axios = require('axios');
import { cache } from 'react'


export async function POST(request) {
    const res = await request.json() // res now contains body
    const { category, costPrice, description, keywords, mrp, price, subCategory, title, thumbImage } = res.product
    const productImages = res.productImages



    var metaData = {
        "title": title,
        "description": description,
        "price": price,
        "meta": {
            "keywords": keywords
        },
        "variant": {
            "productImage": thumbImage
        },
        "subCategory": subCategory,
        "category": category,
        "mrp": mrp,
        "costPrice": costPrice,
        "productImageGallery": productImages
    };



    // let data = JSON.stringify(metaData);

    // let config = {
    //     method: 'post',
    //     maxBodyLength: Infinity,
    //     url: process.env.NEXT_PUBLIC_API_URL + '/api/products/physical',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     data: data
    // };
    // try {
    //     axios.request(config)
    //         .then((response) => {
    //             console.log("done")
    //             return NextResponse.json({ data: response })
    //         })
    //         .catch((error) => {
    //             // console.log(error);
    //             console.log("Error Here")

    //         });

    // } catch (error) {
    //     console.log("No done")
    // }

    const createProduct = cache(async (products) => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/products/physical`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(metaData),
            }
        )
        if (response.status !== 201) {
            throw new Error('Failed to create product')
        }
        console.log(response.json())
        return response.json()
    })



}

export async function GET() {
    return NextResponse.json({ message: "HELLO WORLD" })
}