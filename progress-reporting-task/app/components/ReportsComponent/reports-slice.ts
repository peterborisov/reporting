"use client";
import { createSlice } from "@reduxjs/toolkit";
import { useData } from "@hooks/useData";
import { Report } from "./types"

interface ReportsState {
    reports: Report[];
    report: Report;
}

export const initialState: ReportsState = {
    reports: [],
    report: {},
};

const { fetchReport, fetchReports } = useData();

export const usersSlice = createSlice({
    name: "reportsState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReports.fulfilled, (state, action) => {
            state.reports = action.payload.reports;
        });
        builder.addCase(fetchReport.fulfilled, (state, action) => {
            state.report = action.payload.report;
        });
    },
});

export default usersSlice.reducer;
