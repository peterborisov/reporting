"use client";
import { useRouter } from "next/navigation";

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
  //TODO: Use real reports. Mock reports are only for testing purpose.
  const reports = [
    {
      id: 1,
      name: "Olympic Medals Map",
      description:
        "Presents map layout of the Olympic medals by national teams and associations.",
    },
    {
      id: 2,
      name: "Invoice",
      description: "Invoice report implemented using master-detail approach.",
    },
    {
      id: 3,
      name: "Employee Sales Summary",
      description:
        "Displays sales statistics for an individual employee per month.",
    },
    {
      id: 4,
      name: "Product Sales",
      description:
        "Crosstab summary of AdventureWorks sales, grouped by product category over a 4 year period.",
    },
    {
      id: 5,
      name: "Sales Summary",
      description: "Display sales statistics per month.",
    },
  ];

  const router = useRouter();

  const reportDetails = (report) => {
    router.push(`/${report.id}`);
  };

  return (
    <div className="my-14 m-auto w-[80%]">
      <Table hoverable>
        <TableHead className="bg-gray-100 h-14">
          <TableHeadCell />
          <TableHeadCell>Report name</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell />
        </TableHead>
        <TableBody className="divide-y">
          {reports.map((report) => (
            <TableRow
              key={report.name}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="p-4">
                <Checkbox />
              </TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {report.name}
              </TableCell>
              <TableCell> {report.description}</TableCell>
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
