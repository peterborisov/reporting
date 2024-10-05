import { reports } from '@components/ReportsComponent/mockData'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
    const report = reports.data.find(item => item.Id === params.Id)
    return NextResponse.json({ report: report });
}
