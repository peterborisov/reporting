import { Card, Button } from "flowbite-react";

export const ResultComponent = () => {
  return (
    <div className="my-10 flex justify-center">
      <Card>
        <h1 className="text-2xl">Report: "Report name"</h1>
        <h1 className="text-2xl">Format: "Selected format"</h1>
        <Button>Download</Button>
      </Card>
    </div>
  );
};
