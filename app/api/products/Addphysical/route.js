import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      category,
      costPrice,
      description,
      keywords,
      mrp,
      price,
      title,
      thumbImage,
    } = body.product;
    const productImages = body.productImages;

    if (
      !title ||
      !description ||
      !price ||
      !category ||
      !mrp ||
      !costPrice ||
      !thumbImage ||
      !productImages
    ) {
      let emptyFields = [];
      if (!title) emptyFields.push("title");
      if (!description) emptyFields.push("description");
      if (!price) emptyFields.push("price");
      if (!category) emptyFields.push("category");
      if (!mrp) emptyFields.push("mrp");
      if (!costPrice) emptyFields.push("costPrice");
      if (!thumbImage) emptyFields.push("thumbImage");
      if (!productImages) emptyFields.push("productImages");

      return NextResponse.json(
        {
          message: `Please fill the following fields: ${emptyFields.join(
            ", "
          )}`,
          status: 400,
        },
        { status: 400 }
      );
    }

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
    };

    const createProduct = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/products/physical`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(metaData),
      }
    );

    const product = await createProduct.json();

    console.log(product);

    if (product.error) {
      return NextResponse.json(product, { status: 400 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Server Error ${error}` },
      { status: 500 }
    );
  }
}
