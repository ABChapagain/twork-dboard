import { NextResponse } from 'next/server'

export async function DELETE(request) {
    const body = await request.json()
    const id = body.id
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/products/physical/' + id, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
            cache: 'no-store',
            revalidate: 10
        })
        const data = await res.json()
        return NextResponse.json({ message: "Done", status: 200, data })
    } catch (error) {
        return NextResponse.json({ message: `Server Error ${error}`, status: 500, error: true })
    }


}