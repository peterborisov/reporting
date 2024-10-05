"use client";

import { Dropdown } from "flowbite-react";

export const DropdownComponent = () => {
  return (
    <div className="my-10 flex justify-center">
      <Dropdown label={"Select Export format"}>
        <Dropdown.Item>PDF</Dropdown.Item>
        <Dropdown.Item>DOCX</Dropdown.Item>
        <Dropdown.Item>XLSX</Dropdown.Item>
      </Dropdown>
    </div>
  );
};
