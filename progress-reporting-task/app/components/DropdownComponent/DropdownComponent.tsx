"use client";
import { FC } from "react";
import { Dropdown } from "flowbite-react";

type Option = {
  name: string;
  localizedName: string;
};

type Options = {
  options: Option[];
};

export const DropdownComponent: FC<Options> = ({ options }) => {
  return (
    <div className="my-10 flex justify-center">
      <Dropdown label={"Select Export format"}>
        {options.map((option: Option) => {
          return (
            <Dropdown.Item key={option.name}>
              {option.localizedName}
            </Dropdown.Item>
          );
        })}
      </Dropdown>
    </div>
  );
};
