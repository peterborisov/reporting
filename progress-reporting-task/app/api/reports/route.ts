import { reports } from '@lib/mockData'
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(
    { reports: reports.data },
  );
}