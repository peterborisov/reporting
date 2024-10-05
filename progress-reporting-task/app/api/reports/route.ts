import { reports } from '@components/ReportsComponent/mockData'
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(
    { reports: reports.data },
  );
}