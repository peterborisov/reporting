import { Card, Button } from "flowbite-react";
import { CellItem } from "@components/index";

export const Results = () => {
  return (
    <div className="my-10 flex justify-center">
      <Card>
        <div className="flex flex-wrap gap-4">
          <CellItem title={"Report"} value={"Olympic Medals Map"} />
          <CellItem title={"Format"} value={"PDF"} />
        </div>
        <Button className="bg-[#ce584b]">Download</Button>
      </Card>
    </div>
  );
};
