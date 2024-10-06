import { createAsyncThunk } from "@reduxjs/toolkit";

export const useData = () => {
    const fetchReports = createAsyncThunk("reports/", async () => {
        const response = await fetch(`/api/reports`);
        return await response.json();
    });

    const fetchReport = createAsyncThunk(`report`, async (id: string) => {
        const res = await fetch(`/api/reports/${id}`);
        return res.json();
    });

    return {
        fetchReport,
        fetchReports,
    };
};
