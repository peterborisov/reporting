import { BreadcrumbPaths, BreadcrumbItem } from "@components/BreadcrumbComponent/types";

export const useNav = (param?: string | number) => {
    const paths: Record<BreadcrumbPaths, BreadcrumbItem> = {
        HOME: { path: "/", label: "Reports list" },
        REPORT: { label: param },
    };

    return {
        paths,
    };
};
