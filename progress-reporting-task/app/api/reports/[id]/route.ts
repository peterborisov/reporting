import { reports } from '@lib/mockData'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
    const report = reports.data.filter(item => item.id === params.id)
    return NextResponse.json({ report: report });
}
