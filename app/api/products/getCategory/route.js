import { NextResponse } from 'next/server'

export async function GET() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/categories', {
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
        revalidate: 10
    })
    const data = await res.json()

    return NextResponse.json({ data })
}