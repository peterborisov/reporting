"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useData } from "@/hooks";
import { Report } from "../ReportsComponent/types";
import type { RootState, AppDispatch } from "@/store/store";

import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";

export const ReportsTableComponent = () => {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const { fetchReports } = useData();

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  const reports = useSelector((state: RootState) => state.reportsState.reports);

  const reportDetails = (report: Report) => {
    router.push(`/${report.Id}`);
  };

  return (
    <div className="my-14 m-auto w-[80%]">
      <Table hoverable>
        <TableHead className="bg-gray-100 h-14">
          <TableHeadCell />
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Extension</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>CreatedBy</TableHeadCell>
          <TableHeadCell />
        </TableHead>
        <TableBody className="divide-y">
          {reports.map((report: Report) => (
            <TableRow
              key={report.Id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="p-4">
                <Checkbox />
              </TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {report.Id}
              </TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {report.Name}
              </TableCell>
              <TableCell> {report.Extension}</TableCell>
              <TableCell> {report.Description}</TableCell>
              <TableCell> {report.CreatedBy}</TableCell>
              <TableCell>
                <Button onClick={() => reportDetails(report)}>Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
