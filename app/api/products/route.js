import { NextResponse } from 'next/server'

export async function GET() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/products/physical', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()

    return NextResponse.json({ data })
}

export async function POST() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/products/physical', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()

    return NextResponse.json({ data })
}