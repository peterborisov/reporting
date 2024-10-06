"use client";

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import {
  QueueListIcon,
  ArrowDownOnSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import { Reports, ExportFormat, Results } from "@segments/index";

export const WizardComponent = () => {
  const handleComplete = () => {
    console.log("Form completed!");
  };

  return (
    <>
      <FormWizard shape="circle" color="#ce584b" onComplete={handleComplete}>
        <FormWizard.TabContent
          title="Reportings"
          icon={<QueueListIcon className="size-6 white" />}
        >
          <Reports />
        </FormWizard.TabContent>
        <FormWizard.TabContent
          title="Export Format"
          icon={<ArrowDownOnSquareIcon className="size-6 white" />}
        >
          <ExportFormat />
        </FormWizard.TabContent>
        <FormWizard.TabContent
          title="Result"
          icon={<CheckCircleIcon className="size-6 white" />}
        >
          <Results />
        </FormWizard.TabContent>
      </FormWizard>
    </>
  );
};
