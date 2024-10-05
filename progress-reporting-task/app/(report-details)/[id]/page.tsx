"use client";

import React from "react";
import { ReportDetails } from "./ReportDetails";

interface Props {
  params: { Id: string };
}

const Page = ({ params }: Props) => {
  return <ReportDetails reportId={params.Id} />;
};

export default Page;
