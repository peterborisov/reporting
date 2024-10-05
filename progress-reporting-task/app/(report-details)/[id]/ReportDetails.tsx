"use client";
import { FC } from "react";
import { useNav } from "@hooks/index";
import { BreadcrumbComponent } from "@components/index";

type Props = {
  reportId: string;
};

export const ReportDetails: FC<Props> = ({ reportId }) => {
  const {
    paths: { HOME, REPORT },
  } = useNav(reportId);

  return <BreadcrumbComponent breadcrumbItems={[HOME, REPORT]} />;
};
