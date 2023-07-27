import { NextResponse } from 'next/server'

let url = process.env.NEXT_PUBLIC_API_URL + 'api/categories/'

export async function DELETE(request) {
    const body = await request.json()
    const id = body.id


    let productExist = await getProductbyCategory(id)
    if (productExist.length > 0) {
        return NextResponse.json({ message: `This Category cannot be deleted, because  ${productExist.length} ${(productExist.length == 1) ? 'product' : 'products'} ${(productExist.length == 1) ? 'is' : 'are'} mapped with this category, Edit them first.`, status: 500, error: true, productExist })
    }
    let checkCategory = await checkCategoryifParent(id)
    // check if category exist in parent
    if (checkCategory.length > 0) {
        for (let i = 0; i < checkCategory.length; i++) {
            if (checkCategory[i]._id == id) {
                return NextResponse.json({ message: `This Category cannot be deleted,  because it is a parent Category.`, status: 500, error: true })
            }
        }
    }
    try {
        const res = await fetch(url + id, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        })
        const data = await res.json()
        return NextResponse.json({ message: `The Category is deleted Successfully`, status: 200, data })
    } catch (error) {
        return NextResponse.json({ message: `Server Error ${error}`, status: 500, error: true })
    }

}



const getProductbyCategory = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "api/products/physical/category/" + id, {
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

const checkCategoryifParent = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "api/categories/parent/", {
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