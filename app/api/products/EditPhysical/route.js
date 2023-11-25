

import { NextResponse } from 'next/server'

export async function PUT(request) {
  try {
    const body = await request.json()

    const {
      category,
      costPrice,
      description,
      keywords,
      mrp,
      price,

      title,
      thumbImage,
    } = body.product
    const productImages = body.productImages
    const postID = body.postId

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
      category: category,
      mrp: mrp,
      costPrice: costPrice,
      productImageGallery: productImages,
    }


    const updatePRoduct = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/products/physical/${postID}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metaData),
      }
    )
    let product = await updatePRoduct.json()

    return NextResponse.json(product, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: `Server Error ${error}` },
      { status: 500 }
    )
  }
}
