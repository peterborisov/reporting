"use client";

import React from "react";
import { ReportDetails } from "./ReportDetails";

interface Props {
  params: { id: string };
}

const Page = ({ params }: Props) => {
  return <ReportDetails reportId={params.id} />;
};

export default Page;
