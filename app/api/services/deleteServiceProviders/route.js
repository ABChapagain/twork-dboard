import { NextResponse } from 'next/server'

let url = process.env.NEXT_PUBLIC_API_URL + 'api/serviceproviders/'

export async function DELETE(request) {
    const body = await request.json()
    const id = body.id
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


