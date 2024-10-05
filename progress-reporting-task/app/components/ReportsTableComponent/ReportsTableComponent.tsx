"use client";

import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export const ReportsTableComponent = () => {
  //TODO: Use real reports. Mock reports are only for testing purpose.
  const reports = [
    {
      name: "Olympic Medals Map",
      description:
        "Presents map layout of the Olympic medals by national teams and associations.",
    },
    {
      name: "Invoice",
      description: "Invoice report implemented using master-detail approach.",
    },
    {
      name: "Employee Sales Summary",
      description:
        "Displays sales statistics for an individual employee per month.",
    },
    {
      name: "Product Sales",
      description:
        "Crosstab summary of AdventureWorks sales, grouped by product category over a 4 year period.",
    },
    {
      name: "Sales Summary",
      description: "Display sales statistics per month.",
    },
  ];

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
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Details
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
