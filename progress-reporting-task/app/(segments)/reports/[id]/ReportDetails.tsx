"use client";
import { FC, useEffect } from "react";
import { Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useNav, useData } from "@hooks/index";
import { BreadcrumbComponent, CellItem } from "@components/index";
import type { RootState, AppDispatch } from "@/store/store";

type Props = {
  reportId: string;
};

export const ReportDetails: FC<Props> = ({ reportId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    paths: { HOME, REPORT },
  } = useNav(reportId);
  const { fetchReport } = useData();

  useEffect(() => {
    dispatch(fetchReport(reportId));
  }, [dispatch]);

  const state = useSelector((state: RootState) => state.reportsState.reports);

  //TODO: remove this .find after API bug is resolved
  const report = state.find((item) => item.id === reportId);

  const {
    CategoryId,
    CategoryName,
    CreatedBy,
    DateModifiedUtc,
    Description,
    Extension,
    id,
    IsUserLinkVisible,
    LockedBy,
    ModifiedBy,
    ModifiedByUserLink,
    Name,
    Revision,
  } = report;

  return (
    <div>
      <BreadcrumbComponent breadcrumbItems={[HOME, REPORT]} />
      <Card className="mx-auto my-4">
        <div className="flex flex-wrap gap-4">
          <CellItem title="CategoryId" value={CategoryId} />
          <CellItem title="CategoryName" value={CategoryName} />
          <CellItem title="CreatedBy" value={CreatedBy} />
          <CellItem title="DateModifiedUtc" value={DateModifiedUtc} />
          <CellItem title="Description" value={Description} />
          <CellItem title="Extension" value={Extension} />
          <CellItem title="Id" value={id} />
          <CellItem title="IsUserLinkVisible" value={IsUserLinkVisible} />
          <CellItem title="LockedBy" value={LockedBy} />
          <CellItem title="ModifiedBy" value={ModifiedBy} />
          <CellItem title="ModifiedByUserLink" value={ModifiedByUserLink} />
          <CellItem title="Name" value={Name} />
          <CellItem title="Revision" value={Revision} />
        </div>
      </Card>
    </div>
  );
};
