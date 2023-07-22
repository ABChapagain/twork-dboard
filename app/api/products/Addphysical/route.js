

import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()

    const {
      category,
      costPrice,
      description,
      keywords,
      mrp,
      price,
      subCategory,
      title,
      thumbImage,
    } = body.product
    const productImages = body.productImages

    var metaData = {
      title: title,
      description: description,
      price: price,
      meta: {
        keywords: keywords,
      },
      variant: {
        productImage: thumbImage,
      },
      subCategory: subCategory,
      category: category,
      mrp: mrp,
      costPrice: costPrice,
      productImageGallery: productImages,
    }


    const createProduct = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/physical`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metaData),
      }
    )

    const product = await createProduct.json()

    return NextResponse.json(product, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: `Server Error ${error}` },
      { status: 500 }
    )
  }
}
